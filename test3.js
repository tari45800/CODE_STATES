const assert = require('assert');

class Person {
  #firstName; // (A)
  constructor(firstName) {
    this.#firstName = firstName; // (B)
  }
  describe() {
    return `Person named ${this.#firstName}`;
  }
  static extractNames(persons) {
    return persons.map(person => person.#firstName);
  } 
}

const tarzan = new Person('Tarzan');
assert.equal(
  tarzan.describe(),
  'Person named Tarzan'
);
assert.deepEqual(
  Person.extractNames([tarzan, new Person('Cheeta')]),
  ['Tarzan', 'Cheeta']
);


