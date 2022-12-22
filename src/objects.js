const createPerson = (name, age) => {
return {
  name: name,
  age: age,
}
};

const getName = object => object.name


const getProperty = (property, object) => (object[property])
  // return {
  //   property.age,
  //   property.name,


const hasProperty = (property, object) =>
  object.hasOwnProperty(property);


const isOver65 = person => person.age > 65;
  // your code here

const getAges = people => people.map(person => person.age);
  // your code here


const findByName = (name, people) => people.find(element => element.name === name);
  // your code here


const findHondas = cars => cars.filter(object => object.manufacturer === 'Honda');
  //I used find instead of filter which did not work. And called object 'element'!!?


const averageAge = people => {
  const totalAge = people.reduce((prevAgeAccumulator, currentValuePerson) => {
    return prevAgeAccumulator + currentValuePerson.age;
  }, 0);
    return totalAge / people.length;
};
  //JavaScript Array Reduce - Programming with Mosh, www.youtube.com/watch?v=g1C40tDP0Bk


const createTalkingPerson = (alias, number) => {
  return {
    name: alias,
    age: number,
    introduce: strangersName => {
      return `Hi ${strangersName}, my name is ${alias} and I am ${number}!`;
    }
  };
};
// Use of Template literals (Template strings)

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
