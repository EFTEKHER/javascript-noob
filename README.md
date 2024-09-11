#include <bits/stdc++.h>
using namespace std;

#define ll long long
#define MOD 1e9 + 7
#define loop(i, n) for (int i = 0; i < (int)n; i++)
#define loopab(i, a, b) for (int i = (int)a; i <= (int)b; i++)

ll MOD_VAL = 1e9 + 7;

// Function to calculate (a^b) % MOD
ll power(ll a, ll b) {
    if (b == 0) return 1;
    ll t = power(a, b / 2);
    t = (t * t) % (ll)MOD_VAL;
    if (b % 2 != 0) t = (t * a) % (ll)MOD_VAL;
    return t;
}

// Function to find the kth missing positive number
int findKthMissingPositive(vector<ll> &arr, ll k) {
    if (arr[0] > k) {
        return k;
    }
    
    int left = 0;
    int right = arr.size();
    
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] - mid - 1 >= k) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return arr[left - 1] + k - (arr[left - 1] - (left - 1) - 1);
}

void solve() {
    ll n, k;
    cin >> n >> k;
    vector<ll> a(n);
    
    loop(i, n) cin >> a[i];
    
    sort(a.begin(), a.end(), greater<ll>());
    
    if (a[0] == 0) {
        cout << k << "\n";
        return;
    }
    
    if (n == 1) {
        cout << findKthMissingPositive(a, k - 1) << "\n";
        return;
    }
    
    ll gcd_val = a[0];
    loop(i, n) {
        gcd_val = __gcd(gcd_val, a[i]);
    }
    
    ll im = 0;
    loop(i, n) {
        a[i] = im * gcd_val;
        im++;
    }
    
    ll ans = findKthMissingPositive(a, k - 1);
    cout << ans << "\n";
}

int main() {
    ll t;
    cin >> t;
    while (t--) {
        solve();
    }
    return 0;
} Download this cpp option 
