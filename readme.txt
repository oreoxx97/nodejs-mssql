- npm install

- npm install mssql
- npm install express
- npm install body-parser
- npm install dotenv

//Example  Express API with SQL server
ref. https://morioh.com/p/59e87ce2399f

//Set header from Error : Cannot set headers after they are sent to the client
ref. https://nodejs.org/docs/latest/api/http.html#http_request_setheader_name_value
ref. https://stackoverflow.com/questions/7042340/error-cant-set-headers-after-they-are-sent-to-the-client

//Set .env file
ref. https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786


********
Improve config/connectionDB Make it owner

var config = {
  user: process.env.DB_USER, <---------
  password: process.env.DB_PASSWORD, <-------------
  server: 'DESKTOP-E7CM2D5', <------------
  database: "SchoolDB", <------------
  options: {
    instanceName: "SQLEXPRESS",
    encrypt: false,
    enableArithAbort: true,
  },
};
