#include <bits/stdc++.h>
using namespace std;

int minCost(vector<vector<int>> &costs,
            int N)
{
    if (N == 0)
        return 0;

    vector<vector<int>> dp(
        N, vector<int>(3, 0));

    dp[0][0] = costs[0][0];
    dp[0][1] = costs[0][1];
    dp[0][2] = costs[0][2];

    for (int i = 1; i < N; i++)
    {

        dp[i][0] = min(dp[i - 1][1],
                       dp[i - 1][2]) +
                   costs[i][0];

        dp[i][1] = min(dp[i - 1][0],
                       dp[i - 1][2]) +
                   costs[i][1];

        dp[i][2] = min(dp[i - 1][0],
                       dp[i - 1][1]) +
                   costs[i][2];
    }
    cout << min(dp[N - 1][0],
                min(dp[N - 1][1],
                    dp[N - 1][2]));
}

int main()
{
    vector<vector<int>> costs{{1, 2, 2},
                              {2, 3, 3},
                              {3, 3, 1}};
    int N = costs.size();

    minCost(costs, N);

    return 0;
}