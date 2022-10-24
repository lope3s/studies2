// In this example we are creating two classes A and B;
// As you can see class A is dependant on class B because it can't complete its tasks without class B;
// With this we can say that, class A is dependant on class B and class B is a dependancy of class A;

// Why this is bad?
// Here we created two classes that are tightly coupled, this is bad because any change on class B will force class A to change too;
// This makes our application become less maintainable and extensible;
// If we need to change the database or web services in the future we may need to create different classes to this will lead to changes in class A;
// Every class that is dependant on cass B will change if any of these scenarious occur, this means repetitive code creating and maintaining their dependencies;

class A {
    b;

    constructor(B) {
        this.b = new B()
    }

    task1() {
        this.b.someMethod();
    }
}

class B {
    someMethod() {
        console.log('hello world')
    }
}

const a = new A(B);

a.task1()