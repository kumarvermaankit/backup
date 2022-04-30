#include <iostream>

using namespace std;

int swap(int arr[], int a, int b)
{
    int temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

int main()
{
    int n;
    cin >> n;

    int arr[n];

    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }

    int l = 0;
    int h = n - 1;
    int m = 0;

    while (m <= h)
    {
        if (arr[m] == 0)
        {
            swap(arr, m, l);
            l++;
            m++;
        }
        else if (arr[m] == 1)
        {
            m++;
        }
        else if (arr[m] == 2)
        {
            swap(arr, m, h);
            h--;
        }
    }
    cout << "[";
    for (int k = 0; k < n; k++)
    {
        cout << arr[k] << ",";
    }
    cout << "]";
}