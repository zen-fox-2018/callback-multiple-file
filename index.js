const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file) {
  fs.readFile(parent_file, function(err, data) {
    let parent_data = JSON.parse(data)
    parent_data.forEach(parent => {
      parent.children = []
    });
    fs.readFile(children_file, function(err, data) {
      let children_data = JSON.parse(data)
      sleep.sleep(2)
      parent_data.forEach(parent => {
        children_data.forEach(child => {
          child.family === parent.last_name ? parent.children.push(child.full_name): false
        });
      });
      sleep.sleep(2)
      console.log(parent_data);
    })
  })
   
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
