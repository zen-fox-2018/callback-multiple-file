const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file) {
  fs.readFile(parent_file, 'utf-8', (err, parentsData) => {
    let parent_data = JSON.parse(parentsData)
    if (err) throw err;
    sleep.sleep(5)
    fs.readFile(children_file, 'utf-8', (err, childrensData) => {
      if (err) throw err;
      let children_data = JSON.parse(childrensData)
      for (let i = 0; i < parent_data.length; i++) {
        parent_data[i].children = []
        for (let j = 0; j < children_data.length; j++) {
          if (parent_data[i].last_name === children_data[j].family) {
            parent_data[i].children.push(children_data[j].full_name)
          }
        }
      }
      let parentWithChildren = parent_data
      const data = new Uint8Array(Buffer.from('Hello Node.js'));
      fs.writeFile('./family.json', JSON.stringify(parentWithChildren, null, 2), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
      console.log(parentWithChildren)
    });
  });
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
