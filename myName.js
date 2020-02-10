'use strict';

function getYearOfBirth(age) {
  if (age < 1) {
    throw new Error('age cannot be negative');
  } else {
    return 2020 - age;
  }
}

function createGreeting(name, age) {
  if (age < 1) {
    throw new Error('age cannot be negative');
  }
  if (name === undefined || age === undefined) {
    throw new Error('age cannot be negative');
  }
  if (typeof age !== 'number') {
    throw new TypeError('Age must be a number');
  }
  const yob = getYearOfBirth(age);
  return `Hi my name is ${name} I was born in ${yob} I am ${age} years old`;
}
try {
  const greeting1 = createGreeting('Ian', 25);
  console.log(greeting1);
} catch(e) {
  console.error(e.message);
}