#include <bits/stdc++.h>
using namespace std;
struct role
{
    string name;
    int level_needed;
};
struct contributor
{
    string name;
    map<string, int> skill;
    int avalable_in = 0;
    bool operator<(const contributor &o) const
    {
        return avalable_in > o.avalable_in;
    }
};

struct project
{
    string name;
    int num_of_days, score, best_before;
    vector<role> needs;
    bool operator<(const project &o) const
    {
        return score > o.score;
    }
};
int num_of_contributors, num_of_projects;
vector<contributor> contributors;
deque<project> projects;
set<string> roles;
// first skill level
// second index of the cont
map<string, set<pair<int, int>>> Skills;
// index of the cont
map<int, vector<int>> toBeAdded;
void input()
{
    cin >> num_of_contributors >> num_of_projects;
    for (int i = 0; i < num_of_contributors; i++)
    {
        int num_of_skills;
        contributor cur;
        cin >> cur.name >> num_of_skills;
        while (num_of_skills--)
        {
            string role;
            int val;
            cin >> role >> val;
            cur.skill[cur.name] = val;
            roles.insert(role);
        }
        contributors.push_back(cur);
    }

    for (int i = 0; i < num_of_projects; i++)
    {
        int num_of_roles;
        project cur;
        cin >> cur.name >> cur.num_of_days >> cur.score >> cur.best_before >> num_of_roles;
        while (num_of_roles--)
        {
            role need;
            int val;
            cin >> need.name >> need.level_needed;
            roles.insert(need.name);
            cur.needs.push_back(need);
        }
        projects.push_back(cur);
    }
}
void Generate()
{
    for (int i = 0; i < contributors.size(); i++)
    {
        auto cur = contributors[i];
        Skills[cur.skill.begin()->first].insert({cur.skill.begin()->second, i});
    }
}
void add(int day)
{
    for (auto i : toBeAdded[day])
    {
        auto &curCont = contributors[i];
        Skills[curCont.skill.begin()->first].insert({curCont.skill.begin()->second, i});
    }
}
struct ans
{
    string projectName;
    vector<string> conts;
};
int main()
{
    freopen("in.txt", "r", stdin);
    freopen("out.txt", "w", stdout);
    input();
    Generate();
    sort(projects.begin(), projects.end());
    vector<ans> answer;
    for (int day = 0; day <= (int)2e5; day++)
    {
        add(day);
        if (projects.empty())
            break;
        auto curProject = projects.front();
        projects.pop_front();
        bool Valid = 1;
        for (auto i : curProject.needs)
        {
            auto curSet = Skills[i.name];
            if (curSet.lower_bound({i.level_needed, 0}) == curSet.end())
                Valid = 0;
            if (!Valid)
                break;
        }
        if (!Valid)
        {
            projects.push_back(curProject);
        }
        else
        {
            ans cur;
            cur.projectName = curProject.name;
            for (auto i : curProject.needs)
            {
                auto curSet = Skills[i.name];
                auto it = curSet.lower_bound({i.level_needed, 0});
                toBeAdded[day + curProject.num_of_days].push_back(it->second);
                cur.conts.push_back(contributors[it->second].name);
                if (it->first == i.level_needed)
                {
                    contributors[it->second].skill.begin()->second++;
                }
                curSet.erase(it);
            }
            answer.push_back(cur);
        }
    }
    cout << answer.size() << endl;
    for (auto i : answer)
    {
        cout << i.projectName << endl;
        for (auto j : i.conts)
        {
            cout << j << " ";
        }
        cout << endl;
    }
    return 0;
}