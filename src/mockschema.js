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
 * @private
 * @name _schema
 * @description The structure of schema
 */
  let _schema = {};

  /**
 * @name createDumbArray
 * @description create an Array with determined Length
 */
  function createDumbArray(len) {
    let dumbArray = []
    for (let i = 0; i < len; i++) {
      dumbArray.push(i);
    }
    return dumbArray;
  }

  /**
 * @name createStructure
 * @description function for create the Schema Structure
 */
  function createStructure(obj, times) {
    let mocked = [];
    createDumbArray(times).forEach((name, index) => {
      let _mock = Object.assign({}, obj);
      _mock.id = index;
      mocked.push(_mock)
    });
    return mocked;
  }

  /**
 * @name createSchema
 * @param {Object} schema The Schema model
 * @return void 0
 */
  function createSchema(schema) {
    Object.assign(_schema, schema);
  }

  /**
 * @name mock
 * @description always return an array with the Schema structure
 * @param {Object|String} The Schema Model
 * @param quantity The quantity of objects that will be returned
 * @return {Array}
 */
  function mock(schema, quantity) {
    let _strucuture,
      mockedData = {};

    typeof schema === "string"
      ? _strucuture = _schema[schema]
      : _strucuture = schema;

    for (let key in _strucuture) {
      let value = _strucuture[key];
      Object.assign(mockedData, {[key]: value});
    }
    return createStructure(mockedData, quantity);
  };

  return {mock: mock, createSchema: createSchema}
}(this)));