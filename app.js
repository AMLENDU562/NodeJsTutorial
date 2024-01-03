const http=require('http');

const server=http.createServer((req,res)=>
{
if(req.url==='/')
res.end('<h1>This is homepage</h1>');

else if(req.url==='/about')
res.end('<h1>This is about page</h1>');

else
res.end('<h1>This is default page</h1>');

}
)

server.listen(5000);