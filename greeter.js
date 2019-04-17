
/*
  interface is making the same process as above code and that is possible
  because both key value pair inside the interface are strings.
*/
// classes
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user2 = new Student("Jane", "M", "User");
document.body.innerHTML = greeter(user);
/*
  classes and interfaces work together in letting the program decide the right level of abstraction.
  the use of public automatically creates properties with that name.
*/
