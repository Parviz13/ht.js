let user ={
    name: "Parviz",
    surname: "Djamshedov",
    age: 20,
    isMaried: "false",
    studied: {
        school: 21,
        college: "Bank-College" 
         }
       } 
     const  passport = {
        serries: "AB",
        number: 2339521,
        data: 18,
    location: {
        country: "Uzbekistan",
        city: "Samarkand",
    },
    interestsTo: ['Football', 'Languages', 'Technologies']
}
Object.assign(user, passport)
console.log(user);
let keys = [
    Object.keys(user)
]
console.log(keys);
let values =[
    Object.values(user)
]
console.log(values);
let arr =[20, 21, 2339521, 18, "Bank-College", "Parviz", "Djamshedov", "AB", "Uzbekistan", "Samarkand", ["Football", "Languages", "Technologies"], false,]
let types = {
    number: [],
    string: [],
    boolean: [],
    object: []
}
arr.filter (item =>{
    if(typeof(item)=== 'number'){
        types.number.push(item)
    }
})
console.log(types.number);
arr.map (item =>{
    if(typeof(item)=== 'string'){
        types.string.push(item)
    }
})
console.log(types.string);
arr.map (item =>{
    if(typeof(item)=== 'boolean'){
        types.boolean.push(item)
    }
})
console.log(types.boolean);
arr.map (item =>{
    if(typeof(item)=== 'object'){
        types.object.push(item)
    }
})
console.log(types.object);


