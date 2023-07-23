let info2 = [
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
  
info2.push(infoA)
info2.push(infoB)
info2.push(infoC)

// delete info2.splice(3,1)

let infoSelect = info2.splice(3,3)

for(let i = 0; i < info2.length; i++) {
  console.log('Name: ' + info2[i].name)
}

console.log('--------------')

for(let i = 0; i < infoSelect.length; i++) {
  console.log('Name: ' + infoSelect[i].name)
}




