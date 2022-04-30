#include <stdlib.h>
#include <iostream>

using namespace std;

struct stck
{
    int items[10];
    int top;
    int size = 0;
};

typedef struct stck st;

void createStack(st *s)
{
    s->top = -1;
}

bool isEmpty(st *s)
{
    if (s->top == -1)
    {
        return true;
    }

    return false;
}

bool isFull(st *s)
{
    if (s->size == 10)
    {
        return true;
    }

    return false;
}

void push(st *s, int val)
{

    if (isFull(s) == true)
    {
        cout << "Stack is Full";
    }
    else
    {
        s->top++;
        ;
        s->items[s->top] = val;
        s->size++;
    }
}

void pop(st *s)
{
    if (isEmpty(s) == true)
    {
        cout << "Stack is Empty";
    }
    else
    {
        cout << "Popped Element is " << s->items[s->top] << endl;
        s->top--;
        s->size--;
    }
}

void print(st *s)
{
    for (int i = s->size - 1; i >= 0; i--)
    {
        cout << s->items[i] << endl;
    }
}

int main()
{

    st *s;

    createStack(s);

    push(s, 5);
    push(s, 6);
    push(s, 10);
    push(s, 23);

    pop(s);
    print(s);
}