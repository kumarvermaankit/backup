#include <iostream>
#include <vector>
using namespace std;

void print(int a, int b)
{
    if (a > b)
    {
        return;
    }
    if (a % 2 == 0)
        cout << a;
    print(a + 1, b);
    if (a % 2 != 0)
        cout << a;
}

int power(int a, int b)
{

    return b == 0 ? 1 : power(a, b - 1) * a;
}

int powerBtr(int a, int b)
{
    if (b == 0)
    {
        return 1;
    }

    int smallans = powerBtr(a, b / 2);
    smallans *= smallans;

    return b % 2 != 0 ? smallans * a : smallans;
}

int maximum(vector<int> &arr, int idx)
{

    if (idx == arr.size())
        return -1e9;
    int sf = maximum(arr, idx + 1);

    return max(sf, arr[idx]);
}
int minimum(vector<int> &arr, int idx)
{

    if (idx == arr.size())
        return 1e9;
    int sf = minimum(arr, idx + 1);

    return min(sf, arr[idx]);
}

int find(vector<int> &arr, int idx, int a)
{
    if (idx == arr.size())
        return -1;

    // this works better way to write code is below

    // if (arr[idx] == a)
    // {
    //     return idx;
    // }
    // else
    // {
    //     find(arr, idx + 1, a);
    // }

    // this is better

    return arr[idx] == a || find(arr, idx + 1, a);
}

int lastindex(vector<int> &arr, int idx, int a)
{

    if (idx == arr.size())
    {
        return -1;
    }

    return lastindex(arr, idx + 1, a);
    if (arr[idx] == a)
    {
        return idx;
    }
}

int main()
{
    // print(4, 9);

    vector<int> v;
    v.push_back(1);
    v.push_back(3);
    v.push_back(7);
    v.push_back(23);
    v.push_back(0);

    // int i = find(v, 0, 23);
    // cout << i;

    int i = lastindex()
}
