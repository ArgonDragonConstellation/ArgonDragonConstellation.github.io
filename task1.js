function findMin() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('min-output').textContent = "Пожалуйста, введите оба числа.";
    } else {
        const min = Math.min(num1, num2);
        document.getElementById('min-output').textContent = min;
    }
}

function findMax() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('max-output').textContent = "Пожалуйста, введите оба числа.";
    } else {
        const max = Math.max(num1, num2);
        document.getElementById('max-output').textContent = max;
    }
}

function checkEquality() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('equality-result').textContent = "Пожалуйста, введите оба числа.";
    } else {
        if (num1 === num2) {
            document.getElementById('equality-result').innerHTML = `Ура! Имеется равенство🥳: ${num1}`;
        } else {
            document.getElementById('equality-result').innerHTML = "Упс, равенство отсутствует😢";
        }
    }
}
