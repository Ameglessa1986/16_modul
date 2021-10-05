
let obj = {
    name:"Anton",
    age:36,
    skills:["Javascript","HTML","CSS"],
    salary:80000
};

let str = '{"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}';

let json = JSON.stringify(obj);

if (json === str) console.log (json);