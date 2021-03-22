let Bagel = require('./bagel.js')

class Basket {
    constructor(){
        this._contents = [];
        this.capacity = 2;
        this._subtotal = 0;
    }

    get contents() {
        return this._contents;
    }

    get subtotal(){
        return this._subtotal;
    }

    addToBasket(bagel){
        if(this._contents.includes(bagel)){
            return `${bagel.SKU} is already in your basket`;
        } else {
            this._contents.push(bagel);
            this._subtotal += bagel.price;
            return `Bagel ${bagel.name} - ${bagel.price}, has been added to your basket`;
        }
    }

    removeFromBasket(bagel){
        if(this._contents.includes(bagel)){
            this._contents.pop(bagel);
            this._subtotal -= bagel.price;
            return this._contents;
        } else {
            return `${bagel.SKU} is not in your basket`;
        }
    }

    isBasketFull(){
        return this._contents.length >= this.capacity
    }

    increaseCapacity(){
        return this.capacity += 5;
    }

};

module.exports = Basket;