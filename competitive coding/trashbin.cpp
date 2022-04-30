#include <bits/stdc++.h>

using namespace std;

int main()
{
    int t;
    cin >> t;

    for (int i = 0; i < t; i++)
    {
        int n;
        cin >> n;
        string s1;
        cin >> s1;
        int sum = 0;
        int close;
        for (int r = 0; r < s1.length(); r++)
        {
            if (s1[r] == '1')
            {
                close = r;
                break;
            }
        }

        for (int k = 0; k < n; k++)
        {
            if (s1[k] == '1')
            {
                close = k;
            }
            else
            {
                if (close > k || k == n - 1)
                {
                    sum = sum + abs(k - close);
                }
                else
                {
                    for (int j = k + 1; j < n; j++)
                    {
                        if (s1[j] == '1')
                        {

                            sum = sum + min(abs(close - k), abs(k - j));
                            if (abs(close - k) > abs(k - j))
                            {
                                close = j;
                            }
                            break;
                        }
                        if (j == n - 1)
                        {
                            sum = sum + abs(k - close);
                        }
                    }
                }
            }
        }
        cout << "Case #" << i << ": " << sum << endl;
    }
}