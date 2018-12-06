class Parents {
  constructor(obj) {
    this.first_name = obj.first_name;
    this.last_name = obj.last_name;
    this.age = obj.age;
    this.children = [];
  }

  static listAll(data) {
    const allData = [];
    let dataArr = JSON.parse(data);
    dataArr.forEach( e => {
      allData.push(new Parents(e));
    })
    return allData;
  }

  getChildren(data) {
    data.forEach( e=> {
      if () {
        
      }
    })
  }
}

module.exports = {Parents};
