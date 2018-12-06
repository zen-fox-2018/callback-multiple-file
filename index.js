const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file) {
  // Code here
  fs.readFile(parent_file, 'utf8', function(err, dataParents) {
    sleep.sleep(2)
    if(err) {
      let obj = {
        message: 'error read file parent',
        data : err
      }
      console.log(obj)
    } else {
      fs.readFile(children_file, 'utf8', function(err, dataChildren) {
        if(err) {
          let obj = {
            message: 'error read file children',
            data: err
          }
          console.log(obj)
        } else {
          parentsData = JSON.parse(dataParents)
          childrenData = JSON.parse(dataChildren)
          for(let i = 0; i < parentsData.length; i++) {
            let children = []
            for(let j = 0; j < childrenData.length; j++) {
              if(childrenData[j].family === parentsData[i].last_name) {
                children.push(childrenData[j].full_name)
              }
            }
            parentsData[i].children = children
          }
        }
        console.log(parentsData)
      })
    }
  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");