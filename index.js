const fs = require('fs');
// const sleep = require('sleep');

function match_data(parent_file, children_file, callback) {
  fs.readFile(parent_file, "utf8", (err, dataParents) => {
    if (err) {
      callback(err)
    } else {
      let parents = JSON.parse(dataParents)
      fs.readFile(children_file,"utf8", (err, datachildren) => {
          if (err) {
            callback(err)
          } else {
            let childrens = JSON.parse(datachildren)
            parents.forEach(element => {
              element.children = []
              childrens.forEach(child => {
                if (child.family === element.last_name) {
                  element.children.push(child.full_name)
                }
              })
            });
            callback(null,parents)
          }
      })
    }
  })
  // Code here
}

match_data('./parents.json', './children.json', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})
console.log("Notification : Data sedang diproses !");
