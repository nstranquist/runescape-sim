const express = require('express')
const app = express()
const fakeFishData = require("./data/fakeFishData")

const PORT = 8081

app.get('/', (req, res) => {
  res.send('<b>My</b> first express http server')
})

// app route for all request types
app.route('/api/resources/fish')
  .get((req, res) => {
    // make database call here to replace mock data
    let exampleFishData=[
      "Mackeral",
      "Tuna",
    ]
    // send response
    res.status(200).send({
      message: 'Got fish resources',
      fishData: exampleFishData
    })
  })
  .post((req, res) => {
    let body = req.body
    console.log('you wanted to add a fish with this data:', body)
    res.send({
      message: `Posted ${body} to /resources/fish`
    })
  })
  .put((req, res) => {
    res.send('you tried updating our fish data lol')
  })
  .delete((req, res) => {
    let fishId = req.body.fishId
    if(fishId) {
      console.log('fishId:', fishId)
      res.status(204).send(`you wanted to delete fish with id ${fishId}`)
    }
    res.status(404).send('fishId not found')
  })

app.get('/api/gameData/randomFish', (req, res) => {
  // access db fish data here
  console.log(fakeFishData)
  let randomFish = Math.floor(Math.random() * fakeFishData.length)
  res.send({
    message: "you found a fish",
    fish: {
      name: fakeFishData[randomFish],
      minLevel: 22,
      probability: 60
    }
  })
})


// 2) Use a wildcard for a route
// answers to : theANYman, thebatman, thesuperman
app.get('/the*man', function(req, res) {
  res.send('the*man');
});

// 3) Use regular expressions in routes
// responds to : batmobile, batwing, batcave, batarang
app.get(/bat/, function(req, res) {
  res.send('/bat/');
});

app.use((req, res, next) => {
  res.status(404).send("sorry, route doesn't exist, have a nice day.")
})

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
})