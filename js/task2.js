console.log('Задание2 :');

let x = '1';

if (typeof(x) === 'boolean' || typeof(x) === 'string' || typeof(x) === 'number') {
    console.log(`${x} - ${typeof(x)}`);
} else {
    console.log(`Тип ${x} не определён`);
}

x = 1;

if (typeof(x) === 'boolean' || typeof(x) === 'string' || typeof(x) === 'number') {
    console.log(`${x} - ${typeof(x)}`);
} else {
    console.log(`Тип ${x} не определён`);
}

x = true;

if (typeof(x) === 'boolean' || typeof(x) === 'string' || typeof(x) === 'number') {
    console.log(`${x} - ${typeof(x)}`);
} else {
    console.log(`Тип ${x} не определён`);
}

x = [1];

if (typeof(x) === 'boolean' || typeof(x) === 'string' || typeof(x) === 'number') {
    console.log(`${x} - ${typeof(x)}`);
} else {
    console.log(`Тип ${x} не определён`);
}