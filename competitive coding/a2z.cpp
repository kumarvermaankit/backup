#include <bits/stdc++.h>

using namespace std;

int main()
{
    string s;
    cin >> s;

    int currentlength = 0;
    int maxlength = 0;
    int flag = false;
    for (int i = 0; i < s.length(); i++)
    {
        if (s[i] == 'a' && flag == false)
        {
            flag = true;
            currentlength++;
        }
        else if (s[i] == 'z')
        {
            currentlength++;
            maxlength = max(maxlength, currentlength);
        }
        else if (flag == true)
        {
            currentlength++;
        }
    }
    cout << maxlength;
}