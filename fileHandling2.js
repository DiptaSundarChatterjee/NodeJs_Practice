const fs = require("fs")

// Write File
fs.writeFile("colors.txt","Black,Blue,Green",(err)=>{})

// Read File
fs.readFile("colors.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error: ",err);
    }
    else{
        console.log(result);
    }
})


// Append File
fs.appendFile("./colors.txt","\n updated",(err)=>{
    if(err){
        console.log("Error",err);
    }
})


// Copy a file
fs.cp("colors.txt","colors2.txt",(err)=>{
    if(err){
        console.log("Err",err);
    }
})


// Delete File
fs.unlink("colors2.txt",(err)=> "Err")


// To get the stats and also to check if it is a file or not
console.log(fs.statSync("colors.txt"));
console.log(fs.statSync("colors.txt").isFile());


// /To create a folder
fs.mkdir("mkdirr.docs",(err)=>"Error")


// Blocking and Non-Blocking Operations

// Blocking Operations
console.log("20");
const result= fs.readFileSync("colors.txt","utf-8")
console.log(result);
console.log("40");
console.log("50");
console.log("60");

// Non-Blocking Operations
console.log("19");
fs.readFile("colors.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error",err);
    }
    else{
        console.log(result);
    }
})
console.log("40");
console.log("50");
console.log("60");

