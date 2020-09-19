if(process.env.NODE_ENV !== 'prodcution'){ // this loads our env variables
    require('dotenv').config() // load is deprecated
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY // hides from public
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY

const express = require('express')
const app = express()
const fs = require('fs') // allows us to read different files
const stripe = require('stripe')(stripeSecretKey)

app.set('view engine', 'ejs') // allows us to embed server side code into our application
app.use(express.json())
app.use(express.static('public')) // where all the html/css etc are, all are statically availble to the front end

app.get('/store', function(req,res){
    fs.readFile('items.json', function(error,data){ // this links to the json file
        if(error){
            res.status(500).end()
        } else {
            res.render('store.ejs', {
                stripePublicKey: stripePublicKey, // sends the key to be used in store.ejs
                items: JSON.parse(data) // changes our json file to a readable file
            })
        }
    })
})


app.post('/purchase', function(req,res){
    fs.readFile('items.json', function(error,data){ // this links to the json file
        if(error){
            res.status(500).end()
        } else {
            const itemsJson = JSON.parse(data)
            const itemsArray = itemsJson.packages.concat(itemsJson.hardware)
            let total = 0 
            req.body.items.forEach(function(item){
                const itemJson = itemsArray.find(function(i){
                    return i.id == item.id
                })
                total = total + itemJson.price * item.quantity
            })

            stripe.charges.create({
                amount: total,
                source: req.body.stripeTokenId,
                currency: 'usd'
            }).then(function(){
                console.log('Charge Successful')
                res.json({message: 'Successfully purchased items'})
            }).catch(function(){
                console.log('Purchase Failed')
                res.status(500).end()
            })
        }
    })
})

app.listen(3000)