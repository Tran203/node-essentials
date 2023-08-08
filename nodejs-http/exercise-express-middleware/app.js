const express = require("express");//import express
const app = express();
const port = 3000;

//middleware
//authirize user
function isAuthorized(req,res,next){
  const auth = req.headers.authorization;
  if(auth === 'password'){
    next();
  } else{
    res.status(401);
    res.send('Not allowed');
  }
}
//set up route 
app.get("/", (req, res) => res.send("Hello World!"));

//return users
app.get("/users", isAuthorized, (req, res) => {
  res.json([
    {
      id: 1,
      name: "User Userson",
    },
  ]);
});

//return products
app.get("/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "The Bluest Eye",
    },
  ]);
});

//server listens
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
