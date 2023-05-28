function swap(a, b) {
    [a, b] = [b, a];
  }
  
  function main() {
    let n, x;
    // Lendo os valores de n e x da entrada
    n = parseInt(readline());
    x = parseInt(readline());
    
    let ans = n;
    let a = n - x;
    let b = x;
    
    if (a < b) {
      swap(a, b);
    }
    
    while (b !== 0) {
      let k = Math.floor(a / b);
      ans += k * b * 2;
      let tmp = a % b;
      a = b;
      b = tmp;
    }
    
    console.log(ans - a);
  }
  
  main();