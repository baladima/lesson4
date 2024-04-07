let userNumber = prompt("Введіть тризначне число");

if (
    userNumber[0] === userNumber[1] && 
    userNumber[1] === userNumber[2] && 
    userNumber[0] === userNumber[2]) {
    console.log("Всі цифри однакові");
} else if (
    userNumber[0] === userNumber[1] || 
    userNumber[1] === userNumber[2] || 
    userNumber[0] === userNumber[2]) {
    console.log("Серед цифр є однакові");
} else {
    console.log("Збіжностей немає");
}