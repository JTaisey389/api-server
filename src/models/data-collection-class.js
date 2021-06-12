'use strict';

<<<<<<< HEAD
class DataCollection {
  constructor(schema) {
    this.model = schema;
  }
  create(record) {
    // eslint-disable-next-line new-cap
    let newRecord = new this.model(record);
    return newRecord.save();
=======
class GenericCollection {
  constructor(schema) {
    this.model = schema;
  }
  create(record) {// create a new record using the mongoose . save() method
  let newRecord = new this.model(record);
  return newRecord.save();
>>>>>>> 004c68e2848c4568a8288d6c3f92b966000df1b3
  }
  read(_id){
    if(_id){
      return this.model.findOne({ _id });
    } else {
      return this.model.find({});
    }
  }
  update(_id, record){
<<<<<<< HEAD
    return this.model.findByIdAndUpdate(_id, record, { new: true });
=======
    return this.model.findByIdAndUpdate(_id, record, { new: true })
>>>>>>> 004c68e2848c4568a8288d6c3f92b966000df1b3
  }
  delete(_id){
    return this.model.findByIdAndDelete(_id);
  }
}
<<<<<<< HEAD
module.exports = DataCollection;
=======

module.exports = GenericCollection
>>>>>>> 004c68e2848c4568a8288d6c3f92b966000df1b3
