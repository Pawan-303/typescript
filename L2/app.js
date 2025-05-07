//object,arrya,tuple,enum
// console.log("lets learn objects")
// const person={
//     firstName:'patel',
//     age:22
// }
// console.log(person.lastName)
//above code will show error in typescript but in js it will run and give output undefined;
//thats why typescipt is better to prevent error
// const person:{
//     firstName:string;
//     age:number;
//     address:{
//         city:string;
//         country:string;
//     }
// }={
//     firstName:'patel',
//     age:22,
//     address:{
//         city:"indore",
//         country:"India"
//     }
// }
// console.log(person)
//array
// const person:{
//     firstName:string;
//     age:number;
//     skills:string[]
// }={
//     firstName:'patel',
//     age:33,
//     skills:['html','css','js','reactjs','nodejs','mongodb']
// }
// let favlangZ1:string[]
// favlangZ1=["Hindi","English"]
// let favlangZ2:any[]
// favlangZ2=["hindi",'eng',123],true
//tuple
// const person:{
//     name:string;
//     age:number;
//     skills:string[];
//     product:[number,string]  //cant change the order,fixed array of 2 types
// }={
//     name:"patel",
//     age:22,
//     skills:["reactjs","nodejs"],
//     product:[10,'macbook m2']
// }
//person.product[1]=33;  invalid
//enum
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Author"] = 1] = "Author";
    Role[Role["Read_user_only"] = 2] = "Read_user_only";
})(Role || (Role = {}));
var person = {
    name: "patel",
    age: 22,
    skills: ["react", "node"],
    product: [10, 'mackbook m2'],
    role: Role.Admin
};
if (person.role === Role.Author) {
    console.log("Author");
}
else if (person.role === Role.Admin) {
    console.log("Admin");
}
else {
    console.log("Read_user_only");
}
