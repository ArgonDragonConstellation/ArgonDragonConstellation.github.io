document.getElementById('submitForm').disabled = true;

function validateForm() {
    let name = document.getElementById('name').value;
    let age = parseInt(document.getElementById('age').value, 10);
    let gender = document.getElementById('gender').value;
    let mathSkill = document.getElementById('mathSkill').checked;
    let progSkill = document.getElementById('progSkill').checked;
    let education = document.getElementById('education').checked;

    if (!name.match(/^[а-яА-ЯёЁa-zA-Z]+$/) || age < 0 || !['М', 'Ж'].includes(gender)) {
        alert('Введите правильные данные.');
        return false;
    }

    return { name, age, gender, mathSkill, progSkill, education };
}

function submitSurvey() {
    const formData = validateForm();
    if (formData) {
        displayFormData(formData);
    }
}

function displayFormData(formData) {
    document.getElementById('surveyForm').style.display = 'none';
    document.getElementById('confirmationContainer').style.display = 'block';

    const formDataDisplay = document.getElementById('formDataDisplay');
    formDataDisplay.innerHTML = `
        <p>Имя: ${formData.name}</p>
        <p>Возраст: ${formData.age}</p>
        <p>Пол: ${formData.gender}</p>
        <p>Знание математики: ${formData.mathSkill ? 'Да' : 'Нет'}</p>
        <p>Знание программирования: ${formData.progSkill ? 'Да' : 'Нет'}</p>
        <p>Высшее образование: ${formData.education ? 'Да' : 'Нет'}</p>
    `;
}

function editSurvey() {
    document.getElementById('surveyForm').style.display = 'block';
    document.getElementById('confirmationContainer').style.display = 'none';
}

function confirmSurvey() {
    const formData = validateForm();
    if (formData) {
        if (formData.mathSkill && formData.progSkill && formData.education) {
            alert('Вы нам подходите');
        } else {
            alert('Попробуйте в следующий раз');
        }
    }
}

document.getElementById('surveyForm').addEventListener('input', () => {
    const isValid = validateForm();
    document.getElementById('submitForm').disabled = !isValid;
});

