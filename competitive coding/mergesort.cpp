#include <iostream>
#include <vector>
using namespace std;

void Display(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}

void Merge(int arr[], int l, int m, int r)
{

    int n1 = m - l + 1;
    int n2 = r - m;

    int arr1[n1];
    int arr2[n2];

    for (int i = 0; i < n1; i++)
    {
        arr1[i] = arr[i];
    }

    int j = m + 1;

    for (int i = 0; i < n2; i++)
    {
        arr2[i] = arr[j];
        j++;
    }

    int i = 0;
    int k = 0;
    int pointer = 0;

    while (i < n1 && k < n2)
    {
        if (arr1[i] < arr2[k])
        {
            arr[pointer] = arr1[i];

            i++;
        }
        else if (arr1[i] > arr2[k])
        {
            arr[pointer] = arr2[k];

            k++;
        }
        else if (arr1[i] == arr2[k])
        {
            arr[pointer] = arr2[k];
            arr[pointer + 1] = arr2[k];
            i++;
            k++;
            pointer++;
        }

        pointer++;
    }
}

void MergeSort(int arr[], int l, int r)
{

    if (l < r)
    {
        int mid = (l + r) / 2;

        MergeSort(arr, l, mid);
        MergeSort(arr, mid + 1, r);

        Merge(arr, l, mid, r);
    }
}

//[]

int main()
{
    int n;
    cin >> n;
    int arr[n];

    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }

    int a[] = {9, 3, 5, 1, 6, 4, 8, 3, 10};
    int b[] = {2, 4, 8, 9, 1, 7, 8, 10};
    MergeSort(a, 0, 9);
    // Merge(b, 0, 3, 7);
    Display(a, 9);
}