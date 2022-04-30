#include <iostream>

using namespace std;

void print(int a, int b)
{
    if (a > b)
    {
        return;
    }

    cout << a;
    print(a + 1, b);
    cout << a;
}

int main()
{
    print(4, 9);
}
