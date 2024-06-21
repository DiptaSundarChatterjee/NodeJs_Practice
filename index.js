// BUILDING HTTP SERVER IN NODEJS


// const http = require("http");
// const fs = require("fs")

// const myServer= http.createServer((req,res)=>{
//     // console.log("New Req Rec.");
//     // console.log(req.headers);
//     // console.log(req);  // to show the details
//     const log = `${Date.now()}: ${req.url} New Req Received\n`
//     fs.appendFile('log.txt',log , (err,data)=>{
//         switch(req.url){
//             case '/' : res.end("Home Page")
//             break
//             case '/about': res.end("Hello I am Dipta")
//             break
//             default: res.end("404 Not Found ")
//         }
        
//     })
    
// });

// myServer.listen(8000,()=> console.log("Server Started"));









// HANDLING URL's IN NODEJS

// const http = require("http");
// const fs = require("fs")
// const url= require("url")

// const myServer = http.createServer((req,res)=>{
//     if(req.url === "/favicon.ico") return res.end();
//     const log =`${Date.now()}: ${req.url} "New Request Received\n`
//     const myUrl = url.parse(req.url,true);
//     console.log(myUrl);
//     fs.appendFile('log.txt' ,log,(end,data)=>{
//         switch(myUrl.pathname){
//             case '/' :
//                  res.end("HOMEPAGE")
//             break
//             case '/about': 
//             const username = myUrl.query.myname
//             const userId = myUrl.query.userId
//             res.end(`Hello, username:${username}, userId:${userId} `)
//             break
//             default: 
//             res.end("404 Not Found")
//         }
//     })
// })

// myServer.listen(8000,()=> console.log("Server Started"))






// HTTP METHODS

// const http = require("http");
// const fs = require("fs")
// const url= require("url")

// const myServer = http.createServer((req,res)=>{
//     if(req.url === "/favicon.ico") return res.end();
//     const log =`${Date.now()}: ${req.method} ${req.url} "New Request Received\n`
//     const myUrl = url.parse(req.url,true);
//     console.log(myUrl);
//     fs.appendFile('log.txt' ,log,(end,data)=>{
//         switch(myUrl.pathname){
//             case '/' :
//                 if(req.method==='GET'){ 
//                  res.end("HOMEPAGE")
//                 }
//             break
//             case '/about': 
//             const username = myUrl.query.myname
//             const userId = myUrl.query.userId
//             res.end(`Hello, username:${username}, userId:${userId} `)
//             break
//             case "/search": 
//             const search = myUrl.query.search_query;
//             res.end("Here are your results for" + search);
//             break
//             case "/signup":
//                 if(req.method=== "GET") res.end("This is a signUp Form");
//                 else if(req.method==="POST"){
//                     // we need to give the DB Query here , so that the values will be stored here
//                     res.end("Success")
//                 }
//             default: 
//             res.end("404 Not Found")
//         }
//     })
// })

// myServer.listen(8000,()=> console.log("Server Started"))







// EXPRESS JS------------------------------------

// const http = require("http");
const express = require("express");
const app = express();

app.get('/', (req,res)=>{
    return res.send("Hello this is Home Page")
})
app.get('/about', (req,res)=>{
    return res.send("Hello this is About Page "+"Hey "+req.query.myname+" you are:"+req.query.age+" years old")
})
app.get('/signup', (req,res)=>{
    return res.send("Hello SignUp here")
})

// const myServer = http.createServer(app)

// myServer.listen(8000,()=> console.log("Server Started"))
app.listen(8000,()=> console.log("Server Started"))


