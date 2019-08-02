// This class represents all that is common between Student and Mentor
class Person {
  // moved here b/c it was identical
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.age = '';
  }

  // moved here b/c it was identical
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  };

  missingInfo() {
    if (this.name === undefined) {
      return `"Missing name`;
    } 
    if (this.quirkyFact === undefined) {
      return "Missing quicky fact";
    }
    return "Welcome!"
  };
}

class Student extends Person {
  constructor(name, quirkyFact, cohort) {
    super(name, quirkyFact);
    this.cohort = '';
  }

  // here is a method that is specific to students
  enroll(cohort) {
    this.cohort = cohort;
  }

  bio() {
    return `I'm a student at Lighthouse Labs (aka Labber). ${super.bio()}`;
  }
}

class Mentor extends Person {
  constructor(name, quirkyFact, onShift) {
    super(name, quirkyFact);
    this.onShift = '';
  }

  // specific to mentors
  goOnShift() {
    this.onShift = true;
  };

  // specific to mentors
  goOffShift() {
    this.onShift = false;
  };
}

let luke = new Student("Luke Skywalker", "Named after his creator");
console.log(luke.bio());
luke.enroll("July 2019 Lighthouse Lab bootcamp ");
console.log(luke.missingInfo());

let yoda = new Mentor("Yoda", "Can do Jedi mind tricks");
console.log(yoda.bio());
yoda.goOnShift();
console.log(yoda);
yoda.goOffShift();
yoda.age = 2000;
console.log(yoda);