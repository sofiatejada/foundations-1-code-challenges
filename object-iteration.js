// user Object.values and Object.key to solve these problems!

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/

/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/

export function makeMoreScreamingKeys(someObject) {

    // let keys = Object.keys(someObject);
    let loudKeys = {};
    //put the keys from the object you're passing in into variable keys. it's an array!!
    let keys = Object.keys(someObject);
    console.log(keys);
    //["name", "age", "type"]
    keys.forEach((stuff) => {
        //put the uppercase keys into a variable called newStuff
        let newStuff = stuff.toUpperCase();
        console.log(newStuff);
        // NAME AGE TYPE, it just returns the keys in uppercase, not in an object or in an array

        //here, we're saying in object loudKeys, we want a new key that's gonna be whatever is in newStuff, and a value of our original someObject's key:value. someObject[stuff] returns the value of that stuff
        loudKeys[newStuff] = someObject[stuff]
    })
    


    console.log(loudKeys);

    return loudKeys;
}

/*
Output:
`8truckvroom`
or
`truckvroom8`
or
`truck8vroom`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject) {
    return '';
}


/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/

export function makeTuples(someObject) {
    return [];
}
