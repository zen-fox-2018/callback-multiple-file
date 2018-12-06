const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file) {
  fs.readFile(parent_file, 'utf-8', function(err, data) {
    sleep.sleep(5)
    if (err) {
      console.log(err);
    }
    else {
      let dataParent = JSON.parse(data)
      for (let i = 0; i < dataParent.length; i++) {
        dataParent[i].children = []
      }
      fs.readFile(children_file, 'utf-8', function(err, data) {
        if (err) {
          console.log(err);
        }
        else {
          let dataChildren = JSON.parse(data)
          for (let i = 0; i < dataParent.length; i++) {
            for (let j = 0; j < dataChildren.length; j++) {
              if (dataParent[i].last_name === dataChildren[j].family) {
                dataParent[i].children.push(dataChildren[j].full_name)
              }
            }
          }
        }
        console.log(dataParent);
      })
    }
  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
