const fs = require('fs');
// const sleep = require('sleep');
function sleep (milliseconds) {
  var start = new Date().getTime();
  for (let i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}
function match_data(parent_file, children_file) {
  // Code here
  fs.readFile(parent_file, "utf-8", (err, data) => {
    if (err) throw err;
    let parentData = JSON.parse(data)
    fs.readFile(children_file, "utf-8", (err, data) => {
      if (err) throw err;
      let childrenData = JSON.parse(data);
      for (let i = 0; i <= parentData.length-1; i++) {
        parentData[i]['children'] = [];
        for (let j = 0; j <= childrenData.length-1; j++) {
          if (childrenData[j].family === parentData[i].last_name) {
            parentData[i].children.push(childrenData[j].full_name)
          }
        }
      }
      console.log(parentData)
    })
    sleep(5000);
  });
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");

