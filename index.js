const fs = require('fs')


data = {
    "data":"djfhuhf"
}

fs.writeFile('./data.json',JSON.stringify(data),'utf-8',(err)=>{
    if(err) throw err
    else console.log("submitted")
})

