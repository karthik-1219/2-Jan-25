console.log("Object Destructuring.....")
const per = {
    fName : "Rachana" ,
    lName : "Poloju" ,
    age : 20 ,
};

console.log("Before Des...")
console.log("Person : ",per) ;
//console.log("First Name : ",per.fName) ;
//console.log("Last Name : ",per.lName) ;

console.log("After Des...")
let {fName , lName} = per ;
console.log("First Name : ",fName) ;
console.log("Last Name : ",lName) ;
                                        
console.log("Array Destructuring.....")
let ar = [1 , 5 , 11 , 15 , 19] ;
let [a , b , ...rest] = ar ;

console.log("Before Des...")
console.log("Array : ",ar) ;

console.log("After  Des...")
console.log("a : ",a) ;
console.log("b : ",b) ;
console.log("...rest : ",...rest) ;