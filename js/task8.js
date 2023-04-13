console.log('Задание8 :');

let arrayMap = new Map([
    ["огурец", 500],
    [123, 350],
    [true, 50],
    [
        [1, 2], 100
    ]
]);

for (let elem of arrayMap) {
    console.log(`Ключ - ${elem[0]}, значение - ${elem[1]}`);
}