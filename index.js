const fs = require('fs');
const sleep = require('sleep');


function match_data(parent_file, children_file) {
  // Code here
  fs.readFile(parent_file, 'utf8', (err, parents) => {
    // sleep.sleep(5);
    let parents_data = JSON.parse(parents);
    if (err) throw err;
    fs.readFile(children_file, 'utf8', (err, childrens) => {
      if (err) throw err;
      const childrens_data = JSON.parse(childrens);
      parents_data.forEach( p => {
        p.children = [];
        childrens_data.forEach( c => {
          if (p.last_name === c.family) {
            p.children.push(c.full_name);
          }
        })
      });
      console.log(parents_data);
    });
  });


}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
