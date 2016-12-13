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
export function createStructure (obj, times) {
  let mocked = [];
  createDumbArray(times).forEach((name, index) => {
    let _mock = Object.assign({}, obj);
    _mock.id = index;
    mocked.push(_mock)
  });
  return mocked;
}
