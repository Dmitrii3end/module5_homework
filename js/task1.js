console.log('Задание1 :');

let experimental = prompt('Кого проверяем?');

experimental = +experimental;

if (typeof(experimental) === 'number') {
    if (isNaN(experimental)) {
        console.log("Упс, кажется, вы ошиблись")
    } else {
        if (experimental % 2) {
            console.log(`Число нечетное`);
        } else {
            console.log(`Число четное`);
        }
    }
}