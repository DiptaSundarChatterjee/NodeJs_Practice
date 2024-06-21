//  the fs module is a built-in module in the nodejs
//  using this fs module we can make the module to interact with files


const { log } = require("console")
const fs = require("fs")

// the asynchronous always ask for  a call back 


// WRITE FILE
// this is a synchronous call
// fs.writeFileSync('./test.txt', 'Hello Dipta'); // we can change the inner text by overriding the text normally

// this is a  Asynchronous call
// fs.writeFile('./test.txt', 'Hello Sir', (err)=>{})

// READ FILE
// this is a synchronous call

// const result = fs.readFileSync("./constacts.txt","utf-8") // if we remove the Sync then we will get an error cause it stores the value in a variable
// console.log(result);
// the synchronous returns the value


// this is Asynchronous

// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     }
//     else{
//         console.log(result);
//     }
// })


// Append
//  it appends the data and not override it 
// fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());
// fs.appendFileSync("./test.txt",`${Date.now()} Hey there\n`)


// To Copy a file
// fs.cpSync('./test.txt', './copy.txt')

// To Delete a file we use unlinkSync
// fs.unlinkSync('./copy.txt')


// To get the statistics  and   'isFile()' is used to check if it is a file or not
// console.log(fs.statSync('./test.txt').isFile());


// we can create a folder also
// fs.mkdirSync('my-docss')
// fs.mkdirSync('my-docs/a/b',{recursive: true})


// BLOCKING OPERATION AND NON-BLOCKING OPERATION

// BLOCKING OPERATION
// console.log("16");
// const result = fs.readFileSync("contacts.txt", "utf-8")   // Blocking Operation is not a good practice
// console.log(result);
// console.log("17");
// console.log("18");
// console.log("19");

// NON-BLOCKING OPERATION
// console.log("16");
// fs.readFile("contacts.txt", "utf-8" , (err, result)=>{
//     console.log(result);
// })   // Non-Blocking Operation is a good practice

// console.log("17");
// console.log("18");
// console.log("19");


// TO KNOW THE CPU LENGTH

// const os = require("os")
// console.log(os.cpus().length);


