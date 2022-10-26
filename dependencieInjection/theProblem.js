// Take a look to the previous solution provided by the principle of IoC;
// Here according to the IoC principle, we are removing from class A the reponsability to create an object of class B though the Factory class;
// Even so, wen whe create a class A object, it automatically calls the getB method from Factory class;
// If we try to test this class would be impossible to isolate its behavior because this dependency is called inside class A;
// An example of that is if you try to run the code below, it will throw a ReferenceError when you try to create an object of class A, because class Factory is not defined;
// The thing is, as Factory class is a dependency of class A, you shound't be able to create an object of class A without passing this dependency anyways;

class A {
    b = Factory.getB();

    task1() {
        this.b.someMethod();
    }
}

/*class B {
    someMethod() {
        console.log('hello world')
    }
}

class Factory {
    static getB() {
        return new B()
    }
}*/

const a = new A();

a.task1()