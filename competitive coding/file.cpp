

#include <bits/stdc++.h>
using namespace std;

int solve(vector<int> v1, vector<int> v2, int k)
{

    int l = max(v1.size(), v2.size());
    int sum = 0;
    int check = 0;
    for (int i = l - 1; i >= 0; i--)
    {
        if (check >= k)
        {
            break;
        }
        sum = sum + max(v1[i], v2[i]);
        check++;
        if (check >= k)
        {
            break;
        }
        cout << check << endl;
        sum = sum + min(v1[i], v2[i]);
        check++;

        cout << sum << endl;
    }

    return sum;
}

int main()
{

    int n, m, k;
    cin >> n >> m >> k;

    vector<int> v1;
    vector<int> v2;

    for (int i = 0; i < n; i++)
    {
        int a;
        cin >> a;
        v1.push_back(a);
    }

    cout << "Enter m values" << endl;

    for (int i = 0; i < m; i++)
    {
        int b;
        cin >> b;
        v2.push_back(b);
    }

    sort(v1.begin(), v1.end());
    sort(v2.begin(), v2.end());

    int result = solve(v1, v2, k);
    cout << result;
}
