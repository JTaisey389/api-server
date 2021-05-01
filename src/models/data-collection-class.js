'use strict';

class GenericCollection {
  constructor(schema) {
    this.model = schema;
  }
  create(record) {// create a new record using the mongoose . save() method
  let newRecord = new this.model(record);
  return newRecord.save();
  }
  read(_id){
    if(_id){
      return this.model.findOne({ _id });
    } else {
      return this.model.find({});
    }
  }
  update(_id, record){
    return this.model.findByIdAndUpdate(_id, record, { new: true })
  }
  delete(_id){
    return this.model.findByIdAndDelete(_id);
  }
}

module.exports = GenericCollection