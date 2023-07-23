let info3 = [
  {
      "name" : "Marky",
      "type" : "Dog",
      "color" : "Black",
      "owner" : "JJ"
  },
  {
     "name" : "Pinky",
     "type" : "Cat",
     "color" : "White",
     "owner" : "Jam"
  }
  ]
  let infoA = {
    
      "name" : "Cloudy",
      "type" : "Dog",
      "color" : "Brown",
      "owner" : "Jane"
  }
  let infoB = {
    
    "name" : "Bobby",
    "type" : "Dog",
    "color" : "White",
    "owner" : "Shark"
  }
  let infoC = {
    
   "name" : "Sandy",
   "type" : "Cat",
   "color" : "Brown",
   "owner" : "Jay"
}
  
info3.push(infoA)
info3.push(infoB)
info3.push(infoC)

delete info3.splice(3,1)

for(let i = 0; i < info3.length; i++) {
  console.log('Name: ' + info3[i].name)
}



