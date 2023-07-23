let info1 = [
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
  
info1.push(infoA)
info1.push(infoB)
info1.push(infoC)

for(let i = 0; i < info1.length; i++) {
  console.log('Name: ' + info1[i].name)
}
