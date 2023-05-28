#include<bits/stdc++.h>
using namespace std;
typedef long long LL;
int main() {
	LL n,x;
	cin >> n >> x;
	LL ans = n;
	
	LL a = n-x, b = x; // a = 3 e b = 2
	if(a<b) swap(a,b);
	while(b!=0) {
		LL k = a / b;
		ans += k * b * 2;
		LL tmp = a % b;
		a = b;
		b = tmp;
		
	}
	cout << ans - a << endl;
	
	
	return 0;
}

