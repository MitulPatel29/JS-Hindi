const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    // console.log(item.languageName);
} )








//practice loops

//for in
let mitul={
mitul:'1',
mitul2:'2',
mitul4:'3',
mitul3:'44'
}
 for (const key in mitul) {
    //console.log(` key is ${key} and its values is ${mitul[key]}`);
    
 }


 //for of
let mitul1=[1,2,3,4,5,6,7,9]
 for (const element of mitul1) {
    // console.log(element);
    
 }


 //for each

 let mitul3= [
    {
        mitul:'1',
        mitul2:'2', 
    },
    {
        mitul:'11',
        mitul2:'22', 
    },
    {
        mitul:'111',
        mitul2:'222', 
    }
 ]

 mitul3.forEach(function(val){
// console.log(val.mitul3);

 })
 mitul3.forEach((val) => {console.log(val.mitul2);
 })