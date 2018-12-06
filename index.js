const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file) {
  // Code here
  fs.readFile(parent_file, "utf8", (err,data) => {
    if(err) throw err
    sleep.sleep(5)
    parentData = JSON.parse(data)
   
    fs.readFile(children_file, "utf8", (err,data) => {
      if(err) throw err

      childrenData = JSON.parse(data)
    
      // console.log(parentData);
      // console.log(childrenData);
      let result=[]
      for(let i = 0 ; i < parentData.length ; i++){
        parentData[i].children = []
        for(let j = 0 ; j < childrenData.length; j++){
          if(childrenData[j].family == parentData[i].last_name){
            parentData[i].children.push(childrenData[j])
          }
        }
        result.push(parentData[i])
      }
      result.forEach( e =>{
        console.log(e)
      })
    
    })

  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
