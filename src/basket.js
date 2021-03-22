let Bagel = require('./bagel.js')

class Basket {
    constructor(){
        this._contents = [];
        this.capacity = 5;
        this.isFull = false;
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
            return 'This item is already in your basket'
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
            return 'This item is not in your basket';
        }
    }

    isBasketFull(){
        if(this._contents.length === this.capacity){
            this.isFull = true;
            return this.isFull;
        } else {
            return this.isFull;
        }
    }

    increaseCapacity(){
        return this.capacity += 5;
    }

};

module.exports = Basket;