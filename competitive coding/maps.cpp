#include <iostream>
#include <map>
#include <string>
using namespace std;

int main()
{
    map<string, int> marksmap;
    marksmap["harry"] = 45;
    marksmap["jerry"] = 78;
    marksmap["terry"] = 98;

    map<string, int>::iterator it;

    for (it = marksmap.begin(); it != marksmap.end(); it++)
    {
        cout << (*it).first << " " << (*it).second;
    }
}