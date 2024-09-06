export default function logicElement() {
    const solutions = [
        // a) Sequência de números ímpares
        9,
        // b) Sequência de números que dobram
        128,
        // c) Quadrados dos números naturais
        49,
        // d) Quadrados dos números pares
        100,
        // e) Sequência de Fibonacci
        13,
        // f) Sequência com padrão irregular
        20
    ];

    const solutionDiv = document.getElementById('solution4');
    solutionDiv.innerHTML = `
    <h2>Solução:</h2>
      <p>a) O próximo número é: <span>${solutions[0]}</span> </p>
      <p>b) O próximo número é: <span>${solutions[1]}</span></p>
      <p>c) O próximo número é: <span>${solutions[2]}</span></p>
      <p>d) O próximo número é: <span>${solutions[3]}</span></p>
      <p>e) O próximo número é: <span>${solutions[4]}</span></p>
      <p>f) O próximo número é: <span>${solutions[5]}</span></p> `;
}
