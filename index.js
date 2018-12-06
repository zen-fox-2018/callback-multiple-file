const fs = require('fs');
// const sleep = require('sleep');

function match_data(parent_file, children_file, callback) {
  fs.readFile(parent_file, function(err, data) {
    if(err) {
      callback(err, null)
    } else {
      let parentData = JSON.parse(data);
      fs.readFile(children_file, function(err, data) {
        if(err) {
          callback(err, null)
        } else {
          
          // console.log(JSON.parse(data))
          // console.log("============================")
          // console.log(parentData)
          
          let childData = JSON.parse(data);
          
          parentData.forEach(element => {
            element.children = [];
            for(let i = 0; i < childData.length; i++) {
              if(element.last_name === childData[i].family) {
                element.children.push(childData[i].full_name)
              }
            }
          });
          callback(null, parentData)
        }
      })
      // sleep.sleep(5)
    }
  })
}

match_data('./parents.json', './children.json', function(err, data) {
  if(err) {
    console.log(err)
  } else {
    console.log(data)
  }
})
console.log("Notification : Data sedang diproses !");
