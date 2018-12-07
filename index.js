const fs = require('fs');
const sleep = require('sleep');

function readFile(file, callback) {
  fs.readFile(file, 'utf8', (err, data) => {
    let datas = JSON.parse(data)
    // console.log('masuk data', datas);
    if (err) {
      callback(err,null)
    } else {
      callback(null, datas)
    }
  })
}

function match_data(parent_file, children_file, callback) {
  // Code here
  readFile(parent_file, function(err, dataParent) {
    if (err) {
      callback(err, null)
    } else {
      let parent_data = dataParent
      readFile(children_file, function(err, data) {
        let children_data = data
        if (err) {
          callback(err, null)
        } else {
          parent_data.forEach(b => {
            b.children = []

            children_data.forEach(a => {
              if (a.family === b.last_name) {
                b.children.push(a.full_name)
              }
            })
          })
          callback(null, parent_data)
        }
      })
    }
  })
}

match_data('./parents.json', './children.json', function(err, data) {
  if (err){
    console.log('Data Error')
  } else {
    console.log(data)
  }
})
console.log("Notification : Data sedang diproses !");
