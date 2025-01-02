const actor = new Object() ;

actor.name = "Allu Arjun" ;
actor.age = 41 ;
actor.movies = {
    1 : "AVPL" ,
    2 : " Pushpa " ,
    3 : " Pushpa 2 " ,
} ;
actor.sayHi = function(){
    console.log("Hi , This is Allu Arjun !!!") ;
    console.log("Name : ",this.name) ;
    console.log("Age : ",this.age) ;
    console.log("Movies : ",this.movies) ;
}

actor.sayHi() ;