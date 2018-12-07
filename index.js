const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file) {
  // Code here
  readFile(parent_file, (err, parents) => {
    // sleep.sleep(5);
    if (err) {
      console.log(err);
    } else {
      let parents_data = JSON.parse(parents);
      readFile(children_file, (err, childrens) => {
        if (err) {
          console.log(err);
        } else {
          const childrens_data = JSON.parse(childrens);
          parents_data.forEach( p => {
            p.children = [];
            childrens_data.forEach( c => {
              if (p.last_name === c.family) {
                p.children.push(c.full_name);
              }
            })
          });
        }
        console.log(parents_data);
      });
    }
  });
 }

 function readFile(file, callback) {
   fs.readFile(file, 'utf8', (err, data) => {
     if (err) {
       callback(err);
     } else {
       callback(data);
     }
   });
 }
match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
