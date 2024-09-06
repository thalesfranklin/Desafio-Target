function countletterA(str) {
    let lowerStr = str.toLowerCase();
    let matches = lowerStr.match(/a/g);
    return matches ? matches.length : 0;
}

const aInput = document.getElementById('aInput');
const aButton = document.getElementById('aButton');
const result2 = document.getElementById('result2');

aButton.addEventListener('click', () => {
    const inputText = aInput.value;
    const count = countletterA(inputText);
    if (typeof inputText === 'string') {
        result2.textContent = `A letra 'a' aparece ${count} vez(es) na string.`;
    } else {
        result2.textContent = 'Por favor, insira uma string válida.';
    }
});
