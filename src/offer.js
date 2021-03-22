class Offer {
    constructor(SKU, quantity, price){
        this._SKU = `OFF${SKU}`;
        this._quantity = quantity;
        this._price = price;
    }

    get SKU() {
        return this._SKU;
    }

    get quantity() {
        return this._quantity;
    }

    get price() {
        return this._price;
    }
}

module.exports = Offer;