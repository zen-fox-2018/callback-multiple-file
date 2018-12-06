const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file) {
  // Code here

  fs.readFile('./parents.json', 'utf8', (err, data) => {
    if (err) throw err;
    sleep.sleep(5);

    let parent_data = JSON.parse(data);

    fs.readFile('./children.json', 'utf8', (err, data) => {
      if (err) throw err;
      sleep.sleep(5);
      let children = JSON.parse(data)

      for (let i = 0; i < parent_data.length; i++) {
        parent_data[i].children = [];
        for (let j = 0; j < children.length; j++) {
          if (parent_data[i].last_name === children[j].family) {
            parent_data[i].children.push(children[j].full_name)
          }
        }
      }
      console.log(parent_data)
    });
  });
}



match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
