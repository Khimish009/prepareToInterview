class Parent {
    foo() {
        console.log('It works')
    }
}

class Example extends Parent { }

function partial(expendableClass, mixin) {
    Object.setPrototypeOf(mixin, Object.getPrototypeOf(expendableClass.prototype))
    Object.defineProperties(expendableClass.prototype, Object.getOwnPropertyDescriptors(mixin))
}

partial(Example, {
    foo() {
        super.foo();
        console.log('Yeaaah');
    },

    get bar() {
        return Math.random();
    }
});

const example = new Example();

example.foo(); // It works! Yeaaah

console.log(example.bar);
console.log(example.bar);
console.log(example.bar);