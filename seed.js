const {sequelize} = require('./db')
//const {Restaurant, Menu, Item} = require('./models/index') //Q: WHY import these models from index vs. from each separate model file?
const {Waiter} = require('./models/Waiter')

//Q: Why do you think each object inside of the arrays are structured the way that they are?
//Q: What do you think will happen when we 'seed' this file?
const seedWaiter = [
  {
    waiter_name: 'James',
    waiter_salary: '700',
  },
  {
    waiter_name: 'Cathy',
    waiter_salary: '1000',
  },
  {
    waiter_name: 'Jimmy',
    waiter_salary: '800',
  },
  {
    waiter_name: 'James',
    waiter_salary: '700',
  },
]

// const seedItem = [
//   {
//     title: 'Breakfast',
//     RestaurantId : 1,
//   },
//   {
//     title: 'Lunch',
//     RestaurantId : 2,
//   },
//   {
//     title: 'Dinner',
//     RestaurantId : 3,
//   },
// ]

// const seedItem = [
//   {
//     name: 'bhindi masala',
//     image: 'someimage.jpg',
//     price: 9.50,
//     vegetarian: true,
//     MenuId : 3,
//   },
//   {
//     name: 'egusi soup',
//     image: 'someimage.jpg',
//     price: 10.50,
//     vegetarian: false,
//     MenuId : 2,
//   },
//   {
//     name: 'hamburger',
//     image: 'someimage.jpg',
//     price: 6.50,
//     vegetarian: false,
//     MenuId : 1,
//   }
// ]

//Q: Try to decifer the following function.
//Q: Why are we using async and await?
const seed = async () => {
  try {
    await sequelize.sync({force: true})
    await Waiter.bulkCreate(seedWaiter, {validate: true})
    // await Menu.bulkCreate(seedMenu, {validate: true})
    // await Item.bulkCreate(seedItem, {validate: true})
    console.log('Seeding success!')
    sequelize.close()
  } catch (error) {
    console.log('SOMETHING WENT WRONG WITH THE SEEDING: ', error)
  }
}

//Q: What is seed() returning?
seed()
    .then(() => {
      console.log('Seeding success!')
    })
    .catch(err => {
      console.error('Oh noes! Something went wrong!')
      console.error(err)
    })
    