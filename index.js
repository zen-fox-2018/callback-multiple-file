const fs = require('fs');
// const sleep = require('./sleep.js');
//npm install sleep error


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function match_data(parent_file, children_file) {
  // Code here
  fs.readFile(parent_file, 'utf8', (err, data) => {
    if (err) throw err;
    let parent_data = JSON.parse(data)
    
    fs.readFile(children_file, 'utf8', (err, data) => {
      if (err) throw err;
      let children_data = JSON.parse(data)
      
      for(let i = 0; i < parent_data.length; i++){
        for(let j = 0; j < children_data.length; j++){
          if(!parent_data[i]['children']){
            parent_data[i]['children'] = []
          }
          if(children_data[j].family == parent_data[i].last_name){
            parent_data[i]['children'].push(children_data[j].full_name)
          }
        }
      }
      console.log(parent_data)
    });
  });
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
sleep(5000)
