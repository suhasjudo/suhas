const http= require("http");
const url=require("url");
const qs=require("querystring");
const ser=http.createServer((req,res)=>{
    const convertedurl=url.parse(req.url);
    const access=qs.parse(convertedurl.query);
    const name=(access.fname);
    const phn=(access.phn)
    console.log("the request url is"+req.url);
    console.log("The enterd url is:"+name);
    console.log("The enterd phone is:"+phn);
});
ser.listen(8002,()=>{
    console.log("The server is running");
});