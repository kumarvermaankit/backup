#include <bits/stdc++.h>
#define ll long long
using namespace std

    int
    main()
{
    int t;
    cin >> t;
    while (t--)
    {
        ll n, k;
        cin >> n >> k;
        int a[n];
        int ab[k];

        for (ll i = 0; i < k; i++)
        {
            ll y;
            cin >> y;
            ab[i] = y
        }

        sort(ab, ab + k);

        ll max = 0;

        for (ll i = 1; i <= *max_element(ab, ab + k); i++)
        {
            a[i] = i;
            if (ab[max] == i && max == 0)
            {
                next_permutation(a, a + 1);
                max++;
            }
            else if (ab[max] == i)
            {
                next_permutation(a + ab[max - 1] + 1, a + i);
                max++;
            }
        }

        for (int i = 1; i <= n; i++)
        {
            cout << a[i] << " ";
        }
        cout << endl;
    }
    return 0;
}
