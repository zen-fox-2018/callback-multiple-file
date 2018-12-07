const fs = require('fs');
const sleep = require('sleep');

function readFile(file, cb) {
  fs.readFile(file, (err, data) => {
    err ? cb({msg: 'err readFile', err: err}): cb(null, data)
  })
}

function match_data(parent_file, children_file, cb) {
  readFile(parent_file, (err, data) => {
    if (err) {
      cb(err)
    } else {
      let parentData = JSON.parse(data)
      readFile(children_file, (err, data) => {
        if (err) {
          cb(err)
        } else {
          let childrenData = JSON.parse(data)
          sleep.sleep(2)
          parentData.forEach(parent => {
            parent.children = []
            childrenData.forEach(child => {
              child.family === parent.last_name ? parent.children.push(child.full_name): false
            });
          });
          sleep.sleep(2)
          cb(null, parentData)
        }
      })
    }
  })
}

match_data('./parents.json', './children.json', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})
console.log("Notification : Data sedang diproses !");
