const userBornYear = prompt("Який ваш рік народження?");
const userCity = prompt("В якому місті ви живете?");
const userSport = prompt("Який ваш улюблений вид спорту?");

if (userBornYear === null || userCity === null || userSport === null) {
    alert("Шкода, що Ви не захотіли ввести " + (
        userBornYear === null ? "свій рік народження" : 
        userCity === null ? "своє місто" : 
        "свій улюблений вид спорту"));
} else {
    let capitalMessage;
    switch (userCity) {
        case "Київ":
            capitalMessage = "Ти живеш у столиці України";
            break;
        case "Вашингтон":
            capitalMessage = "Ти живеш у столиці США";
            break;
        case "Лондон":
            capitalMessage = "Ти живеш у столиці Британії";і
            break;
        default:
            capitalMessage = "Ти живеш у місті " + userCity;
    }
    
    let favoriteSport;
    switch (userSport) {
        case "Футбол":
            favoriteSport = "Круто! Хочеш стати Мессі?";
            break;
        case "Баскетбол":
            favoriteSport = "Круто! Хочеш стати Лебронем?";
            break;
        case "Плавання":
            favoriteSport = "Круто! Хочеш стати Фелпсем?";
            break;
        default:
            favoriteSport = "";
    }

    alert("Вік: " + userBornYear + "\n" + capitalMessage + "\n" + favoriteSport);
}
