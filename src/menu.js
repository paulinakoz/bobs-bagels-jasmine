const Bagel = require('./bagel');

class Menu {
    constructor(name) {
        this._name = name
        this._menuItems = [];
        this._offers = [];
    }

    addToMenu(item) {
        let includeCheck = this.checkInMenu(item);
        if(includeCheck) return `Menu already contains bagel type ${item.SKU}`;
        this._menuItems.push(item);
        return this._menuItems;
    }

    removeFromMenu(item) {
        let includeCheck = this.checkInMenu(item);
        if(includeCheck) {
            this._menuItems.splice(this._menuItems.indexOf(item), 1);
            return this._menuItems;
        }
        return `Cannot remove item that is not on the menu`;
    }

    checkInMenu(item) {
        let includeCheck = 0;
        for(let i = 0; i < this._menuItems.length; i++) {
            if(this._menuItems[i].SKU === item.SKU) includeCheck ++;
        }
        return includeCheck;
    }

    printMenu() {
        if(this._menuItems.length === 0){
            return `Sorry! There are no items on the menu`;
        }

        let output = `${this._name.toUpperCase()} MENU`;
        this._menuItems.forEach(item => {
            output += `\n${item.SKU} - ${item.name} - ${item.price}`;
        })
        return output;
    }

    checkOffers(offer) {
        let includeCheck = 0;
        for(let i = 0; i < this._offers.length; i++) {
            if(this._offers[i].SKU === offer.SKU) includeCheck ++;
        }
        return includeCheck;
    }

    addOffer(offer) {
        let includeCheck = this.checkOffers(offer);
        if(includeCheck) {
            return `This offer already exists`;
        }
        this._offers.push(offer);
        return this._offers;
    }

    removeOffer(offer) {
        let includeCheck = this.checkOffers(offer);
        if(includeCheck) {
            this._offers.splice(this._offers.indexOf(offer), 1);
            return this._offers;
        }
        return `Cannot remove offer that is not on the menu`;
    }

    displayOffers(){
        if(this._offers.length === 0){
            return 'Sorry! There are no special offers';
        } else {
            let output = `SPECIAL OFFERS`;
            this._offers.forEach(offer => {
                output += `\n${offer.SKU} - ${offer.quantity} bagels for ${offer.price}`;
            })
        return output;
        }
    }
}

module.exports = Menu;