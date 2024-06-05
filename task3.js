function askAge() {
    let age;
    do {
        age = prompt("Пожалуйста, введите ваш возраст:");
    } while (age === null || age.trim() === "");
    alert(Ваш возраст: ${age});
}
