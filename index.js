const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file) {
  fs.readFile(parent_file, (err, data) => {
    sleep.sleep(5)
    if (err) throw err;
    let inputParent = JSON.parse(data)
    let i = 0
    while( i < inputParent.length){
      inputParent[i].children = []
      i++
    }
    // console.log(output)
    fs.readFile(children_file, (err, data) => {
      if (err) throw err;
      let inputChildern = JSON.parse(data)
      let j = 0
      while(j < inputParent.length){
        for(let i = 0; i < inputChildern.length; i++) {
          if(inputChildern[i].family === inputParent[j].last_name){
            inputParent[j].children.push(inputChildern[i].full_name)
          }
        }
        j++
      } 
      console.log(inputParent)
    });
  });
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
