// CODE here for your Lambda Classes
class Person {
  constructor(personAttr) {
    this.name = personAttr.name;
    this.age = personAttr.age;
    this.location = personAttr.location;
    this.gender = personAttr.gender;
  }
  introduction() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}
class Instructor extends Person {
  constructor(instructorAttr) {
    super(instructorAttr);
    this.specialty = instructorAttr.specialty;
    this.favLanguage = instructorAttr.favLanguage;
    this.catchPhrase = instructorAttr.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(Student, subject) {
    return `${Student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(studentAttr) {
    super(studentAttr);
    this.previousBackground = studentAttr.previousBackground;
    this.className = studentAttr.className;
    this.favSubjects = studentAttr.favSubjects;
  }

  listsSubjects(favSubjects = []) {
    favSubjects.forEach((value) => {
      console.log(value);
    })
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(PMAttr) {
    super(PMAttr);
    this.gradClassName = PMAttr.gradClassName;
    this.favInstructor = PMAttr.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
  }
  debugsCode(Student, subject) {
    return `${this.name} debugs ${Student.name}'s code on ${subject}`;
  }
}

//------ Objects ------\\

//------ Instructors
const Cam = new Instructor({
  name: 'Cam Pope',
  location: 'West Coast',
  age: 30,
  gender: 'Male',
  specialty: 'Drinking water',
  favLanguage: 'Javascript',
  catchPhrase: `Why isn't this working?`,
});
// console.log(Cam);
// console.log(Cam.introduction());
// console.log(Cam.demo('JavaScript'));

//------ Students
const Carlos = new Student({
  name: 'Carlos Sanchez',
  location: 'Florida',
  age: 21,
  gender: 'Male',
  previousBackground: `Went to a vocational school for programming`,
  className: 'WebPT5',
  favSubjects: ['Math', 'Gym', 'Lunch']
});
// console.log(Carlos);
// console.log(Carlos.introduction());
// console.log(Carlos.listsSubjects(Carlos.favSubjects));
// console.log(Carlos.PRAssignment('JavaScript'));
// console.log(Carlos.sprintChallenge('JavaScript'));
// console.log(Cam.grade(Carlos, 'Nothing'));

//------ PMs
const Joseph = new ProjectManager({
  name: 'Joseph Stanfield',
  location: 'Not sure',
  age: 30,
  gender: 'Male',
  specialty: 'Drawing',
  favLanguage: 'Python',
  catchPhrase: 'It works on my machine.',
  gradClassName: 'WEBPT5',
  favInstructor: 'Cam Pope'
});

// console.log(Joseph);
// console.log(Joseph.introduction());
// console.log(Joseph.demo('Python'));
// console.log(Joseph.grade(Carlos, 'Python'));
// console.log(Joseph.standUp('webpt5'));
// console.log(Joseph.debugsCode(Carlos, 'Python'));