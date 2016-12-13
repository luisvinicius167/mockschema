;
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports === "object") {
    module.exports = {
      createSchema: factory.createSchema,
      mock: factory.mock
    }
  } else {
    root.MockSchema = factory;
  }
}(this, function (global) {

/**
 * @name createDumbArray
 * @description create an Array with determined Length
 */ 
function createDumbArray(len) {
  let dumbArray = []
  for (let i=0; i<len; i++) {
    dumbArray.push(i);
  }
  return dumbArray;
}

/**
 * @name createSchema
 * @description function to create the mock structure
 * @example
 * createSchema({person: {id, name, age});
 */ 
function createStructure (obj, times) {
  let mocked = [];
  createDumbArray(times).forEach((name, index) => {
    let _mock = Object.assign({}, obj);
    _mock.id = index;
    mocked.push(_mock)
  });
  return mocked;
}

/**
 * @private
 * @name _schema
 * @description The structure of schema
 */ 
let _schema = {};

/**
 * @name createSchema
 * @param {Object} schema The schema
 * @return void 0
 */ 
function createSchema(schema) {
  Object.assign(_schema, schema);
}

/**
 * @name mock
 * @description always return an array with the schema structure
 */
 function mock(entitie, quantity) {
  let _strucuture , mockedData = {};
  
  typeof entitie === "string" 
   ? _strucuture = _schema[entitie]
   : _strucuture = entitie
  ;
  
  for (let key in _strucuture) {
    let value = _strucuture[key];
    Object.assign(mockedData, {[key]:value});
  }
  return createStructure(mockedData, quantity);
};

return {
  mock:mock,
  createSchema:createSchema
}
}(this)));