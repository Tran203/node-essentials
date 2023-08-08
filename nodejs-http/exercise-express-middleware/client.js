const http = require("http");//import http

//request info
http.get(
  //check connection
  {
    port: 3000,
    hostname: "localhost",
    path: "/users",
    headers: {
      //check password
      authorization: 'password'
    },
  },
  (res) => {
    console.log("connected");
    res.on("data", (chunk) => {
      console.log("chunk", "" + chunk);
    });
    res.on("end", () => {
      console.log("No more data");
    });
    res.on("close", () => {
      console.log("Closing connection");
    });
  }
);
