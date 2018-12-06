const fs = require('fs');
// const sleep = require('sleep');

function match_data(parent_file, children_file) {
  fs.readFile(parent_file, (err, data) => {
    if (err) throw err;
    let parentsFile = JSON.parse(data);
    
    fs.readFile(children_file, (err, data) => {
      if (err) throw err;
      let childrensFile = JSON.parse(data);
      
      for (let i = 0; i < parentsFile.length; i++) {
        parentsFile[i].children = [];
        for (let j = 0; j < childrensFile.length; j++) {
          if(parentsFile[i].last_name === childrensFile[j].family) {
            parentsFile[i].children.push(childrensFile[j].full_name);
          }
        }
      }
      sleep(5000);
      console.log(parentsFile);
    });
  });
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
