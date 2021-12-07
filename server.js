const express = require('express')
const path = require('path') //node native module
const { Waiter } = require('./models/Waiter')

const app = express()
const port = 3000

//points toward folder of static files
app.use(express.static(path.join(__dirname, 'public')))

//GET method on /flipcoin route responds with heads or tails
// app.get('./Waiter', (req, res) => {
//     // let coinflip = Math.floor(Math.random()*2)
//     // if (coinflip == 1){
//     //     coinflip = 'Heads'
//     // } else {
//     //     coinflip = 'Tails'
//     // }
//     // res.send(coinflip)
// })

//GET method on /restaurants route returns all restaurants
// app.get('/waiter/:name', async (req,res) => {
//     //find all instances of the Model Restaurant
//     const thiswaiter = await Waiter.findOne({ where:{waiter_name:req.params.name }})
//     console.log(req)
//     //respond with allRestaurants as a json objeect
//     res.json(thiswaiter)
// })
// app.get('/waiter', async (req,res) => {
//     //find all instances of the Model Restaurant
//     const thiswaiters = await Waiter.findAll()
//     console.log(req)
//     //respond with allRestaurants as a json objeect
//     res.json(thiswaiters)
// })

// app.get('/waiters/:id', async (req,res) => {
//     //find all instances of the Model Restaurant
//     const onewaiter = await Waiter.findByPk(req.params.id)
//     console.log(req)
//     //respond with allRestaurants as a json objeect
//     res.json(onewaiter)
// })

app.get('/search', async (req,res) => {
    //find all instances of the Model Restaurant
    let results = []
    if (req.query.name) {
        results = await Waiter.findAll({where: {waiter_name: req.query.name}})
    }
    else if (req.query.salary) {
        results = await Waiter.findAll({where: {waiter_salary: req.query.salary}})
    }
    //respond with allRestaurants as a json objeect
    res.json(results)
})
// run a query in postman: http://localhost:3000/search?name=James




app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})