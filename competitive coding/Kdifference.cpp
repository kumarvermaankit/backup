/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>
#include <vector>
#include <map>
using namespace std;

// [1,5,3,4,2]
int kDifference(vector<int> a, int k)
{

    map<int, int> mp;

    int pairs = 0;

    for (int i = 0; i < a.size(); i++)
    {
        mp[a[i]]++;
    }

    for (int i = 0; i < a.size(); i++)
    {
        if (mp.find(a[i] - k) != mp.end())
        {

            pairs++;
        }
    }
    return pairs;
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

    int k;
    cin >> k;

    int p = kDifference(v, k);
    cout << p;
    return p;
}