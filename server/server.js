//PHLY HAM DEKHY GAY SIMPLE SA SERVER BNANA, K AKHIR SERVER BNANY KA SYNTAX KIA HOTA HA.

// const http = require("http");

// const PORT = 3000;
// const hostName = "localhost";

//  const server = http.createServer((req,res)=>{
//     res.end("<h1>Hellow World</h1>")        ----------------->res.end ka matlab hota ha msg print karwana.
// })

// server.listen(PORT,hostName,()=>{         ---------------> server bnany ka bad listen karny sa hi server run hoga otherwise nh chly ga server .
//     console.log( `server is working  on this ${PORT} `);
// })


//============================================================================================================



// const http = require("http");

// const PORT = 5000;
// const hostName = "localhost";

// const server = http.createServer((req, res) => {
//   //ab ham yha par "request"  ka apny methods use karky apny server ko acha bnay gay,

//   if (req.url === "/") {
//     return res.end("<h1>Home Page</h1>");
//   }
//   if(req.url === "/services"){
//     return res.end("<h1>Services Page</h1>");
//   }
//   if(req.url === "/contact"){
//     return res.end("<h1>Contact us page</h1>");
//   }
//   if(req.url === "/about"){
//     return res.end("<h1>About us page</h1>");
//   }
// });


// server.listen(PORT,hostName,()=>{
//     console.log(`Server is working on this port : ${PORT}`);
// })


//==========================================================================================================================================


//ab yah hamny simple req.url ka use karky paths define kiay hain ab ma cahta hoky,
//home ka alag page ho,services ka page par jab koi jay to services khuly, mean seperate ho uper wala bh its good but neechy dekkho ab.


const http = require("http");
const fs = require("fs");

const PORT = 2000;
const hostName = "localhost";
const home = fs.readFileSync("home.html","utf-8")
const contact = fs.readFileSync("contact.html","utf-8")
const about = fs.readFileSync("about.html","utf-8")
const services = fs.readFileSync("services.html","utf-8")

const server = http.createServer((req, res) => {
  //ab ham yha par "request"  ka apny methods use karky apny server ko acha bnay gay,

  if (req.url === "/") {
    return res.end(home);
  }
  if(req.url === "/services"){
    return res.end(services);
  }
  if(req.url === "/contact"){
    return res.end(contact);
  }
  if(req.url === "/about"){
    return res.end(about);
  }
});


server.listen(PORT,hostName,()=>{
    console.log(`Server is working on this port : ${hostName} ${PORT} `);
})

