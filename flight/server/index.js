var config = require('./config.js')
var Sequelize = require('sequelize');
// var sequelize = new Sequelize('dev', 'coe', 'secret', { host:'128.199.76.176',dialect: 'mysql'} );
var sequelize = new Sequelize(config.db_name, 
								config.db_user,
								config.db_password, 
								{ host: config.db_host,
								  dialect: config.db_dialect} );

var express = require('express')
var app = express()

var cors = require('cors')
app.use(cors())

const Flight = sequelize.define('flights', {
//  id: { type: Sequelize.INTEGER, primaryKey: true},
  name: Sequelize.STRING,
  airline: Sequelize.STRING,
//  createdAt: { field: 'created_at', type: Sequelize.DATE},
//  updatedAt: { field: 'updated_at', type: Sequelize.DATE}
  },
  { timestamps: false }
);


app.get('/node/hello', (req,res)  => {
     res.send('Hello world')
})

sequelize.authenticate().then(function() {
  app.get('/node/flights',  function(req,res) {
     Flight.findAll().then( function(result_flights) {
        res.setHeader('Content-Type', 'application/json')
        res.send({
          'flights': result_flights
        })
     })
   })

  app.listen(3000, function() {
     console.log('Server is running at port: 3000')
  })
})
.catch( function(err) {
   console.log('Cannot connect to database: ', err)
})
