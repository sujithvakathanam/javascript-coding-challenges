// International Greetings
// Suppose you have a guest list of students and the country they are from, stored as key-value pairs in an object.
//
//     const GUEST_LIST = {
//     Randy: "Germany",
//     Karla: "France",
//     Wendy: "Japan",
//     Norman: "England",
//     Sam: "Argentina"
// }
// Write a function that takes in a name and returns a name tag, that should read:
//
//     "Hi! I'm [name], and I'm from [country]."
// If the name is not in the object, return:
//
// "Hi! I'm a guest."
// Examples
// greeting("Randy") ➞ "Hi! I'm Randy, and I'm from Germany."
//
// greeting("Sam") ➞ "Hi! I'm Sam, and I'm from Argentina."
//
// greeting("Monti") ➞ "Hi! I'm a guest."
// Notes
// N/A


//Solution1-- You can access the object either with . operator or square brackets

const GUEST_LIST = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
}

function greeting(name) {

    console.log(GUEST_LIST.Randy); // .operator
    console.log(GUEST_LIST["Randy"]); // square bracket
    console.log(GUEST_LIST["Randy1"]);

    if(GUEST_LIST[name] != undefined){
       return `Hi! I am  ${name} and I'm from ${GUEST_LIST[name]}`;
    }
    else{
       return 'Hi! i am a guest'
    }
}


console.log(greeting("Randy"));

/*Solution 2 -Object.keys returns an array of all the properties of object. Then USE the find operator on the array to retrieve it*/

const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
}

function greeting(name) {
    if(Object.keys(GUEST_LIST).find(x=>x === name))
        return `Hi I am ${name} and I am from ${GUEST_LIST[name]}`
    else
        return `Hi I am a guest`
}

console.log(greeting("Karla"));