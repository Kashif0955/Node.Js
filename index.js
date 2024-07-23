// const fs = require("fs");

// fs.readFile("node.text","utf-8",(err,data)=>{
// if(err){
//     console.log(err);
// }else{
//     console.log(data);
// }

// })

// const fs = require("fs");
// fs.readFile("node.txt","utf-8",(err,data)=>{
//     if(err){
//         throw err;

//     }
//     console.log(data);
// })


//--- file write karny ka liya 


// const fs = require("fs");

// const a = "This is the way to create new file using node js module fs";

// fs.writeFile("malik.txt",a,"utf-8",()=>{
//     console.log("file created successfully");
// });



//                           OS MODULE 

// const os = require("os");

// console.log(os.freemem());
// console.log( os.arch());
// console.log(os.totalmem());
// console.log(os.homedir());
// console.log(os.hostname());


//                          PATH MODULE

// const path = require("path");

// const filePath = 'https://mkashif-portfolio.netlify.app/'

// console.log("Directory : " , path.dirname(filePath));
// console.log("Extension :" , path.extname(filePath));
// console.log("Base name :" , path.basename(filePath));
// console.log("Join paths:" , path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));


//                              URL MODULE

// const url = require('url');

// const myUrl = new URL('https://example.com:8080/pathname/?search=test#hash');
// console.log('Host:', myUrl.host);
// console.log('Pathname:', myUrl.pathname);
// console.log('Search Params:', myUrl.searchParams);






//SAB SA IMPORTANT MODULE HA ("HTTP MODULE")===> WO HAM NEXT FILE MA BNAY GAY 