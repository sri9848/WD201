<<<<<<< HEAD
const http = require("http");
const fs = require("fs");
const argv = require("minimist")(process.argv.slice(2));


let homeContent = "";
let projectContent = "";
let registrationContent ="";
=======
const argv = require("minimist")(process.argv.slice(2));



const http = require("http");
const fs = require("fs");

let homeContent = "";
let projectContent = "";
>>>>>>> 29d6465f66ba75489335b9a87609ae0a18fed890

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});

fs.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err;
  }
  registrationContent = registration;
});

<<<<<<< HEAD
=======

>>>>>>> 29d6465f66ba75489335b9a87609ae0a18fed890
http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
<<<<<<< HEAD
      case "/registration":
=======
       case "/registration":
>>>>>>> 29d6465f66ba75489335b9a87609ae0a18fed890
        response.write(registrationContent);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
<<<<<<< HEAD
  }) 
  .listen(argv.port || 3000,()=>{
    console.log(`running on ${argv.port || 3000}`);
  });
=======
  })
  .listen(argv.port || 3000, () => {
    console.log(`Server is running on port ${argv.port || 3000}`);
  });
  
>>>>>>> 29d6465f66ba75489335b9a87609ae0a18fed890
