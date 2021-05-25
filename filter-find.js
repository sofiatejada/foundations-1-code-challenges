// Use the filter or find array methods to solve these problems

/* 
Input:
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]

Output: 
[
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]
*/

export function getAllDairy(arr) {

    const dairy = [];
    arr.filter((food) => {
        if (food.category === 'dairy') {
            dairy.push(food);
        }
    })


    return dairy;
}

/*
Output: 
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    }
]
*/

export function getAllFruitsThatCostMoreThanTwo(arr) {

    const expensiveFruits = [];
    arr.filter((food) => {
        if (food.category === 'fruit' && food.price > 2)
        expensiveFruits.push(food);
    })


    return expensiveFruits;
}


/*
Output: 
    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
*/

export function findTheCheese(arr) {

    // return arr.find(({ id }) => id ==='cheese');
    return arr.find((food) => food.id ==='cheese');
}


/*
Output: 
['apple', 'banana']
*/

export function listNamesOfAllFruits(arr) {
    return [];
}