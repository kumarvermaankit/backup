#include <bits/stdc++.h>

using namespace std;

int main()
{
    int n;
    cin >> n;
    vector<int> v;
    int maxindex = 1;
    for (int i = 0; i < n; i++)
    {
        int a;
        cin >> a;
        v.push_back(a);
    }
    int maxsum = INT_MIN;
    for (int i = 1; i <= n; i++)
    {
        int sum = 0;

        for (int j = 0; j < n; j++)
        {
            if ((j + 1) % i == 0)
            {
                sum = sum + v[j];
            }
        }
        if (sum > maxsum)
        {
            maxindex = i;
            maxsum = sum;
        }
    }
    cout << maxindex;
}