// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')


//practice
function mitul(a,b){

    // console.log(a+b);
    
}
mitul(1,2)


console.log(((a,b)=>(a+b))(1,2))

console.log(((a,b)=>(a+b))(7,2));

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')