#include <iostream>

using namespace std;

int main()
{
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }

    int i = 0;
    int k = n - 1;

    while (i != k && i < k)
    {
        int temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp;
        i++;
        k--;
    }
    cout << "[";
    for (int g = 0; g < n; g++)
    {
        cout << arr[g] << ",";
    }
    cout << "]";
}

// [2,5,9,6,8]
// [8,6,9,5,2]
//[2,5,6,3,8,9]
//[9,8,3,6,5,2]