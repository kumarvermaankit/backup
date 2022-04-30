
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

     // [23,4,12,89,45]
    for (int k = n - 1; k >= 0; k--)
    {
        for (int j = 0; j <= k; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    cout << "tt";

    for (int a = 0; a < n; a++)
    {
        cout << arr[a] << endl;
    }

    return 0;
}