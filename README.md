# mockschema

[![npm package](https://img.shields.io/badge/npm-v0.0.5-blue.svg)](https://www.npmjs.com/package/mockschema)

> The best way to generate fake data to work with your components.

---

### Why should you use Mock Schema?
 * Very simple API
 * Save time
 * Increase productivity


### How does it work?
When you work with Components, sometimes you don't have an API yet, but you need to populate your components with some data, like an Array of Objects. With Mock Schema, you don't need create a lot of objects manually, you just use the ```mock``` function, and the schema you define will be returned.


#### Install

Npm: `npm install mockschema` </br>
CDN: `https://unpkg.com/mockschema@0.0.5`


#### The Gist:
```javascript
import { mock } from 'mockschema';

createSchema({
  person: { 
    name:'John Doe', 
    age: 25
  }
});

const partys = mock({
  name: 'Cool Party',
  invited: mock('person', 100) // or mock({name:'John Doe', age: 25}, 100);
}, 5);

console.log(party); 
/**
 * [{ 
 *  id: 0, name: 
 *  'Cool Party', 
 *  invited: [
 *   {
 *     id: 0, 
 *     name: 'Jhon Doe', 
 *     age:25
 *   }, 
 *   {
 *    id: 1, 
 *    name: 'Jhon Doe', 
 *    age:25
 *   }... {id: 99, name: 'Jhon Doe', age:25}]
 * }, {...},{...},{...},{...}];
 */

```

#### Real life example:

```javascript
import {h, Component, render} from 'preact';

import Appbar from 'preact-mui/lib/appbar';
import Button from 'preact-mui/lib/button';
import Container from 'preact-mui/lib/container';

import { mock, createSchema } from 'mockschema';

createSchema({
  person: {
    id:0, 
    name:'John Doe', 
    age: 25
  }
});

class Example extends Component {
  render() {
    return (
      <div>
        <Appbar></Appbar>
        <Container fluid={true}>
        {/** 
          * mock will return an Array with 10 objects
          * the id will be auto incremented for you
          */}
          {mock('person', 10).map( person => (
            <div>{person.id} {person.name}</div>
          ))}
          <Button color="primary">button</Button>
        </Container>
      </div>
    );
  }
}

render(<Example />, document.getElementById('example'));
```

---

### API

 Create a Schema
 * Create a Schema that will be used in your application
```javascript
/**
 * @name createSchema
 * @description Create an Schema of your fake data
 * @param {Object} schema The schema
 */
 
// store/index.js
import {createSchema} from 'mockschema';

createSchema({
  posts: {
    id: '1',
    title: 'Foo Bar',
    author: 'John Doe'
  },
  animals: {
    id: 1,
    list: ['Cat', 'Dog', 'Bird']
  }
});
```

Generate your Schema
 * Always return an array with the quantity of objects passed in the function. The ```id``` attribute will be incremented automatically by Mock Schema.

```javascript
/**
  * @name mock
  * @description Generate a schema
  * @param {String | Object} schema The Object Schema
  * @param {Intenger} How many objects you want to render
  * @return {Array} An array with your schema objects
  **/
 
// state/index.js
import { mock } from 'mock-schema';

// If you create a Schema, you can use it like this
mock('posts', 5); // -> [{id:1, title: 'Foo Bar', author: 'Jhon Doe'}, {id:2, title: 'Foo Bar', author: 'Jhon Doe'}, ...]

// Or, you can pass mock an Object instead like this
mock({ name: 'John Doe', type: 'Person'}, 5); // -> [{id:1, name:'John Doe', type: 'Person'}, {id:2, name:'John Doe', type: 'Person'}, ...]

```
