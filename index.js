const fs = require('fs');
const sleep = require('sleep');


function match_data(parent_file, children_file) {;
  var parent_data_unparsed = fs.readFile(parent_file,function(err, data) {
    sleep.sleep(5)
    var parent_data = JSON.parse(data);
    var childrendata = fs.readFile(children_file,function(err, data) {
      var children_data = JSON.parse(data);
      for (var i = 0; i < parent_data.length; i++) {
        var children = [];
        for (var j = 0; j < children_data.length; j++) {
          if (parent_data[i].last_name === children_data[j].family) {
            children.push(children_data[j].full_name);
          }
        }
        parent_data[i].children = children;
      }
      console.log(parent_data);
    })
  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
