// In this example we are applying the Dependendy Injection and IoC principles;
// We've mantained the responsability to create an object of class B (service) within the Factory class (injector);
// Class A (client) still don't know anything about class B creation
// But this time we've removed the factory class from within class A and added as a dependency to its constructor;
// This way, we can't create an Object of class A that don't have the Factory parameter;
// And if we want to test class A, we can isolate its behaviour just by mocking its dependencies;

class A {
    b;

    constructor(B) {
        this.b = B.getB()
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

class Factory {
    static getB() {
        return new B()
    }
}

const a = new A(Factory);

a.task1()