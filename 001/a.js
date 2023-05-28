const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
  rl.question("", function(N) {
    const skewers = [];

    rl.question("", function(skewerInput) {
      const skewerValues = skewerInput.split(" ").map(Number);

      for (let i = 0; i < 2 * N; i++) {
        skewers.push(skewerValues[i]);
      }

      skewers.sort((a, b) => a - b);

      let maxIngredients = 0;
      for (let i = 0; i < 2 * N; i += 2) {
        const espetox = skewers[i];
        const espetoy = skewers[i + 1];
        maxIngredients += (espetox < espetoy) ? espetox : espetoy;
      }

      console.log(maxIngredients);

      rl.close();
    });
  });
}

main();