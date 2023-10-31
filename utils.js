const COMPLEXITY = 9;

/* Un algoritmo molto complesso */
export function algoritmoSuperComplesso() {
    const array = range(0, COMPLEXITY);
    // scambia il primo e l'ultimo elemento
    [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];

    bogosort(array);

    return 42;
}

// crea un array con b - a + 1 elementi che vanno da 'a' a 'b - 1'
// es: a: 2, b: 5 => risultato: [2,3,4,5] 
// se a == 0, puoi usare in alternativa [...Array(b).keys()];
function range(a, b) {
    const result = [];
    for (let i = a; i <= b; i++) {
        result.push(i);
    }
    return result;
}

/* Un algoritmo di ordinamento molto inefficiente */
function bogosort(array) {
    let sorted = isSorted(array);
    while (!sorted) {
        array = shuffle(array);
        sorted = isSorted(array);
    }
    return array;
}

/* Controllo se un array è ordinato */
function isSorted(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
            return false;
        }
    }
    return true;
}

/* Mischia a random gli elementi di un array */
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
};

/* ASYNC UTILS */

/* Una promise sleep */
export async function sleep(time) {
    return new Promise(resolve =>
        setTimeout(() => resolve('Ok mi sono svegliato!'), time * 1000));
}