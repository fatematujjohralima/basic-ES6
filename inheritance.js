class Vehical{
    constructor(name, price) {
        this.name = name;
        this.price=price
    }
    move() {
        console.log("ami  cholachol korte pari")
    }
}

class Bus extends Vehical{
    constructor(name, price, seat) {
        super(name, price);
        this.seat = seat;
    }
    route() {
        console.log("dhaka to cox")
    }
}


const greenLine = new Bus("greenLine", "12", 50);
// greenLine.move()







class Truck extends Vehical{
    constructor(name, price, load) {
        super(name, price);
        this.load=load
    };

}