#include <iostream>
#include <vector>
#include <stack>
using namespace std;

void next(vector<int> v)
{
    stack<int> s;
    s.push(v[v.size() - 1]);

    vector<int> result;
    result.push_back(-1);
    for (int i = v.size() - 2; i >= 0; i--)
    {
        while (s.empty() != true)
        {
            if (s.top() > v[i])
            {
                result.push_back(s.top());
                break;
            }
            else
            {
                s.pop();
            }
        }
        s.push(v[i]);
    }

    for (int i = 0; i < result.size(); i++)
    {
        cout << result[i] << ",";
    }
}

int main()
{
    vector<int> v;
    int n;
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        int a;
        cin >> a;
        v.push_back(a);
    }
    next(v);
}