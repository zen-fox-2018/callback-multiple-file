const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file) {
  let result = null
  let parentArr = null
  let childrenArr = null
  fs.readFile(parent_file, `utf8`, function (err, dataParent) {
    sleep.sleep(1)
    err ?
      console.log(err) :
      fs.readFile(children_file, `utf8`, function (err, dataChildren) {
        sleep.sleep(5)
        if (err) {
          console.log(err);
        } else {
          parentArr = JSON.parse(dataParent)
          childrenArr = JSON.parse(dataChildren)
          for (let i = 0; i < parentArr.length; i++) {
            let arr = []
            for (let j = 0; j < childrenArr.length; j++) {
              if (childrenArr[j].family == parentArr[i].last_name) {
                arr.push(childrenArr[j].full_name)
              }
            }
            parentArr[i].children = arr
          }
          console.log(parentArr);
        }
      })
  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
