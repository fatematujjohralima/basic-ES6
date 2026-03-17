class Person{
    #status;
    constructor(name, age,status) {
        this.name = name;
        this.age = age;
        this.#status = status;
    }

    sleep() {
        console.log(`${this.name} sleep at 10PM`)
    }
    action() {
        console.log(this.#status)
    }
}

const SolimUddin = new Person("solim", 12,"single");

SolimUddin.action()





