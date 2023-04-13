console.log('Задание6 :');

let rongArray = [1, 1, 1, 1, '1', 1, 1, 1];
let rightArray = [1, 1, 1, 1, 1, 1];
let checked = true;

//пропустим проверку на длину массива и считаем что всегда length > 1
for (let i = 1; i < rongArray.length; i++) {
    if (rongArray[i] !== rongArray[i - 1]) {
        console.log('false');
        checked = false;
        break;
    }
}
if (checked) {
    console.log('true');
}
checked = true;

for (let i = 1; i < rightArray.length; i++) {
    if (rightArray[i] !== rightArray[i - 1]) {
        console.log('false');
        break;
    }
}

if (checked) {
    console.log('true');
}
checked = true;