const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file, callback) {
  // Code here
  readFile(parent_file, (err, parents) => {
    // sleep.sleep(5);
    if (err) {
      callback(err, null);
      // console.log(err);
    } else {
      let parents_data = JSON.parse(parents);
      readFile(children_file, (err, childrens) => {
        if (err) {
          callback(err, null);
        } else {
          const childrens_data = JSON.parse(childrens);
          let matchData = [];
          parents_data.forEach( p => {
            p.children = [];
            childrens_data.forEach( c => {
              if (p.last_name === c.family) {
                p.children.push(c.full_name);
              }
            })
            matchData.push(p);
          });
          callback(null, matchData);
        }
      });
    }
  });
 }

 function readFile(file, callback) {
   fs.readFile(file, 'utf8', (err, data) => {
     if (err) {
       callback(err, null);
     } else {
       callback(null, data);
     }
   });
 }
match_data('./parents.json', './children.json', (err, matchData) => {
  if (err) {
    console.log(err);
  } else {
    console.log(matchData);
  }
})
console.log("Notification : Data sedang diproses !");
