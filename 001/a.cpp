#include <iostream>
#include <vector>
#include <algorithm>

using namespace::std;

int main() {
    int N;
    cin >> N;

    vector<int> skewers(2 * N);
    for (int i = 0; i < 2 * N; i++) {
        cin >> skewers[i];
    }

    sort(skewers.begin(), skewers.end());

    int maxIngredients = 0;
    for (int i = 0; i < 2 * N; i+=2) {
        int espetox = skewers[i];
        int espetoy = skewers[i+1];
        maxIngredients += (espetox < espetoy) ? espetox : espetoy;
    }

    cout << maxIngredients << endl;

    return 0;
}
