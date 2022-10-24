// Here we are applying the IoC principle (Inversion of Control), who suggests to delefate the control to another class;
// In other words invert the dependency creation control from class A to another class;
// With this now evey change to class B will not require class A to change too;
// But we have only changed the depedancy of class A from class B to class Factory, so we can change the functionality of class B as much as we want and as long as we don't change it's methods names, class A will never have to change;

class A {
    b = Factory.getB();

    task1() {
        this.b.someMethod();
    }
}

class B {
    someMethod() {
        console.log('hello world')
    }
}

class Factory {
    static getB() {
        return new B()
    }
}

const a = new A();

a.task1()