class Movie{
    constructor(name){
        this.name = name ;
    }
    show(){
        console.log("Movie Name : ",this.name);
    }
}

class Genere extends Movie{
    constructor(name,genere){
        super(name) ;
        this.genere = genere ;
    }
    show(){
        console.log("Movie Name : ",this.name);
        console.log("Genere : ",this.genere);
    }
}

console.log("Using Normal Class........")
const mv1 = new Movie("Pushpa 2") ;
mv1.show() ;
console.log() ;

console.log("Using Inherited Class........")
const mv2 = new Genere("Pushpa","Action/Adventure") ;
mv2.show() ;