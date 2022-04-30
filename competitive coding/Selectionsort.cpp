
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

    for (int k = 0; k < n; k++)
    {
        for (int j = k + 1; j < n; j++)
        {
            if (arr[j] < arr[k])
            {
                int temp = arr[j];
                arr[j] = arr[k];
                arr[k] = temp;
            }
        }
    }

    for (int a = 0; a < n; a++)
    {
        cout << arr[a] << "  ";
    }
    cout << endl;
}