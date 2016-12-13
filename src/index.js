import { createStructure } from './utils';

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
export function createSchema(schema) {
  Object.assign(_schema, schema);
}

/**
 * @name mock
 * @description always return an array with the schema structure
 */
export function mock(entitie, quantity) {
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