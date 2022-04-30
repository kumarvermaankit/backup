#include <bits/stdc++.h>

using namespace std;

int main()
{

    int t;
    cin >> t;

    for (int i = 1; i <= t; i++)
    {
        int n;
        cin >> n;
        string s1;
        cin >> s1;
        int sum = 0;
        int closestbin = -1;

        for (int k = 0; k < s1.length(); k++)
        {
            cout << "k" << i << endl;
            if (s1[k] == '1')
            {
                closestbin = k;
            }
            else
            {
                if (closestbin > k || k == s1.length() - 1)
                {
                    sum = sum + abs(k - closestbin);
                }
                else
                {
                    for (int j = k + 1; j < s1.length(); j++)
                    {
                        if (s1[j] == '1')
                        {
                            if (abs(k - closestbin) < abs(k - j))
                            {
                                sum = sum + abs(k - closestbin);
                            }
                            else if (abs(k - closestbin) >= abs(k - j))
                            {
                                sum = sum + abs(k - j);
                                closestbin = j;
                            }
                            break;
                        }
                        if (j == s1.length() - 1)
                        {
                            sum = sum + abs(k - closestbin);
                        }
                    }
                }
            }
            cout << sum << endl;
        }
        cout << "Case #" << i << ": " << sum << endl;
    }
}