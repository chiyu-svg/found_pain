const http = require("http");
const operateData = require("./dao");

http
  .createServer(function (req, res) {
    if (req.method === 'GET') {
      res.writeHead(200, { "content-type": "application/json" });
      Promise.all([
        operateData.getDataFromTxt(1),
        operateData.getDataFromTxt(2),
        operateData.getDataFromTxt(3),
        operateData.getDataFromTxt(4),
        operateData.getDataFromTxt(5),
      ])
        .then((result) => {
          const baseResult = result.map((item, index) => {
            return {
              key: index+1,
              process: item,
            };
          });
          res.end(
            JSON.stringify({
              code: 200,
              message: baseResult,
            })
          );
        })
        .catch((err) => {
          res.end({
            code: 500,
            message: err,
          });
        });
    }
    if(req.method === 'POST') {
        let data = '';
        req.on('data', function(chunk){
            data += chunk;
        })
        req.on('end', function(){
            const reqData = JSON.parse(data);
            operateData.writeDataToTxt(reqData.key, reqData.process);
            res.writeHead(200, {'content-type': 'text/plain'});
            res.end('success');
        })
    }
  })
  .listen(3001, function () {
    console.log("serve has been start");
  });
