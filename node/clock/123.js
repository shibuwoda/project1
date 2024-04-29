
    const http = require("http")
    const serve = http.createServer()
    serve.on("request",(req,res)=>{
        let url = req.url
        let method = req.method
        let str = `撒打算: ${url}, method: ${method}`
        res.setHeader("Content-Type","text/html; charset=utf-8")
        res.end(str)
        // console.log("request")
    })
    serve.listen(80,()=>{
        console.log("running at http://127.0.0.1")
    })
  