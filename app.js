const http=require("http");
const fs=require("fs");
const url=require("url");
const replaceHtml = require("./replaceHtml");
const contact=fs.readFileSync("./project/contact.html", "utf-8");
const dCont=fs.readFileSync("./project/dCont.html", "utf-8");
const page_=fs.readFileSync("./project/404.html", "utf-8");
const home=fs.readFileSync("./project/home.html", "utf-8");
const gallery=fs.readFileSync("./project/gallery.html", "utf-8");
const about=fs.readFileSync("./project/about.html", "utf-8");
const dBase=JSON.parse(fs.readFileSync("database/database.json", "utf-8"));
const server=http.createServer();
server.on("request", (req, res)=>{
    let {query, pathname: path}=url.parse(req.url, true);
    if("/home" === path.toLocaleLowerCase() || "/" === path.toLocaleLowerCase()){
        res.end(home, "utf-8");
    }
    else if("/gallery" === path.toLocaleLowerCase()){
        res.end(gallery.replace("%gallery page%", ))
    }
    else if("/contact" === path.toLocaleLowerCase()){
        res.end(contact);
    }
    else if("/about" === path.toLocaleLowerCase()){
        res.end(about);
    }
    else if(req.url!=home || req.url!=gallery || req.url!=about || req.url!=contact){
        res.end(page_)
    }
})
server.listen(1000, "127.0.0.1", ()=>{
    console.log("Connected!")
})