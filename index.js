const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file) {

  getData(parent_file , function(err, parents) {
    if(!err) {
      sleep.sleep(3)
      getData(children_file, function(err, childrens) {
        if(!err) {
          parents.forEach( parent => {
            if(!parent.children) {
              parent.children = []
              childrens.forEach(child => {
                if (child.family == parent.last_name) {
                  parent.children.push(child.full_name)
                }
              })

              fs.writeFile(parent_file, JSON.stringify(parents, null , 2), function (err) {
                if(err){
                  console.log(`Error in saving data`)
                } else {
                  console.log(`Berhasil menyimpan data ke dalam parent file`)
                }
              })
              
            }
          });
          console.log(parents)
        } else {
          console.log(`Error getting children file`)
        }
      })
    } else {
      console.log(`Error getting parent file`)
    }
  })
}

function getData(path, cb ) {
  fs.readFile(path, function(err, data) {
    let hasil = JSON.parse(data)
    cb(err, hasil)
  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
