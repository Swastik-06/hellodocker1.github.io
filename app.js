const http=require("http")

const hostname = "0.0.0.0"

const server =http.createServer((req,res)=>
{
    res.end("<h1> Hello, Docker!</h1>")
})

server.listen(3000,hostname ,()=>{console.log("server running")})