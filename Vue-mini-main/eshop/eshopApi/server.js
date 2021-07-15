const express = require('express')
const app = express()
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json());

app.get('/database/catalog.json', (req, res) => {
    fs.readFile('./database/catalog.json', 'utf8', (err, data) => {
        res.send(data)
    })
})
app.post('/addToCart', (req, res) => {
    fs.readFile('./database/cart.json', 'utf8', (err, data) => {
      if (err) {
        res.send('{ "result": 0 }')
      } else {
        const cart = JSON.parse(data);
        const item = req.body;
  
        cart.push(item);
  
        fs.writeFile('./database/cart.json', JSON.stringify(cart), (err) => {
          if (err) {
            res.send('{"result": 0}');
          } else {
            res.send('{"result": 1}');
          }
        })
      }
    })
  })

  app.post('/deleteFromCart', (req, res) => {
    fs.readFile('./database/cart.json', 'utf8', (err, data) => {
      if (err) {
        res.send('{ "result": 0 }')
      } else {
        let cart = JSON.parse(data);
        const item = req.body;
  
        cart = cart.filter((cartItem) => cartItem.id !== item.id)
  
        fs.writeFile('./database/cart.json', JSON.stringify(cart), (err) => {
          if (err) {
            res.send('{"result": 0}');
          } else {
            res.send('{"result": 1}');
          }
        })
      }
    })
  })

  app.get('/cartData', (req, res) => {
    fs.readFile('./database/cart.json', 'utf8', (err, data) => {
      res.send(data)
    })
  })

app.listen(3000, () => {
    console.log('server started')
})