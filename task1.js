function findMin() {
    let a = parseFloat(document.getElementById('num1').value);
    let b = parseFloat(document.getElementById('num2').value);
    let result = Math.min(a, b);
    document.getElementById('result').textContent = Минимум: ${result};
}

function findMax() {
    let a = parseFloat(document.getElementById('num1').value);
    let b = parseFloat(document.getElementById('num2').value);
    let result = Math.max(a, b);
    document.getElementById('result').textContent = Максимум: ${result};
}

function checkEqual() {
    let a = parseFloat(document.getElementById('num1').value);
    let b = parseFloat(document.getElementById('num2').value);
    let result = a === b;
    if (result) {
        document.getElementById('result').textContent = Числа равны: ${result}. Поздравляем, числа равны! 🥳;
    } else {
        document.getElementById('result').textContent = Упс, равенства нет 😢;
    }
}
