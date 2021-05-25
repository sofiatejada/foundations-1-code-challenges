// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Input:
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]
*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {

    const petNames = [];

    arr.forEach((pet) => {
        petNames.push(pet.name);
    })

    return petNames;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const newArray = arr.slice()
    const reversePetType = [];
    newArray.reverse().forEach((pet) => {
        reversePetType.push(pet.type);
    })
    return reversePetType;
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {

    const spanishArray = [];

    // pets = [
    //     {
    //         tipo: 'cat',
    //         nombre: 'coco'
    //     }
    // ]
    
    arr.forEach((pet) => {
        spanishArray.push({ nombre: pet.name, tipo: pet.type });
    })
    
    return spanishArray;
}

