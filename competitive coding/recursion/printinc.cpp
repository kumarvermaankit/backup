#include <iostream>

using namespace std;

void printIncreasing(int a, int b)
{
    if (a > b)
    {
        return;
    }
    cout << a;
    a++;
    printIncreasing(a, b);
}

int main()
{
    printIncreasing(5, 9);
}