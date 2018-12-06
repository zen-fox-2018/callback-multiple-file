const fs = require('fs');
const sleep = require('sleep');
//sleep.sleep(5)
function match_data(parent_file, children_file) {
  fs.readFile(parent_file, (err, data) => {
    if (err) throw err;
    let parentData =  JSON.parse(data);

      fs.readFile(children_file, (err, data) => {
      if (err) throw err;
      let childrenData = JSON.parse(data);
      sleep.sleep(5)
        for(let i = 0; i < parentData.length; i++){
         if(parentData[i].children === undefined){
           parentData[i].children = []
         }
         for(let j = 0; j < childrenData.length; j++){
           if(parentData[i].last_name ===  childrenData[j].family){
             parentData[i].children.push(childrenData[j].full_name)
           }
         }
        }
      console.log(parentData)
     });
  });
 
  // console.log(parentData)
 
}


match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
