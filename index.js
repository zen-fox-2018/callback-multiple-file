const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file) {
  // Code here
  fs.readFile(parent_file, 'utf-8', (err, dataParent) => {
    if (err) throw err;
    let convertParent = JSON.parse(dataParent)
    sleep.sleep(5)
    fs.readFile(children_file, 'utf-8', (err, dataChildren) => {
      if (err) throw err;
      let convertChildren = JSON.parse(dataChildren)
      for (let i = 0; i < convertParent.length; i++) {
        convertParent[i].children = []
        for (let j = 0; j < convertChildren.length; j++) {
          if (convertParent[i].last_name == convertChildren[j].family) {
            convertParent[i].children.push(convertChildren[j].full_name)
          }
        }
      }
      console.log(convertParent);
    });
  });

}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
