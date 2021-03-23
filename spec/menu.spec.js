const Bagel = require('../src/bagel');
const Basket = require('../src/basket');
const Menu = require('../src/menu');
const Offer = require('../src/offer');


describe(`Testing the Menu.addItem() function`, function() {
    it('Check that an item has been added', function() {
        bobsMenu = new Menu('bobs bagels');
        bagel = new Bagel();
        result = bobsMenu.addToMenu(bagel);
        expect(result[0]).toBe(bagel);
    })

    it('Cannot add the same type of item twice', function(){
        bobsMenu = new Menu('bobs bagels');
        bagel = new Bagel('BGLO');
        bagel2 = new Bagel('BGLO');
        bobsMenu.addToMenu(bagel);
        expect(bobsMenu.addToMenu(bagel2)).toBe(`Menu already contains bagel type ${bagel.SKU}`);
    })
})

describe('Testing print menu function', function() {
    it('Check that item in the menu is printed', function() {
        bobsMenu = new Menu('bobs bagels');
        bagel = new Bagel('BGLO');
        bobsMenu.addToMenu(bagel);
        expect(bobsMenu.printMenu()).toBe(`BOBS BAGELS MENU\n${bagel.SKU} - ${bagel.name} - ${bagel.price}`);
    })

    it('Check that every item in the menu is printed', function(){
        bobsMenu = new Menu('bobs bagels');
        bagel = new Bagel('BGLO');
        bagel2 = new Bagel('BGLE');
        bagel3 = new Bagel('BGLP');
        bobsMenu.addToMenu(bagel);
        bobsMenu.addToMenu(bagel2);
        bobsMenu.addToMenu(bagel3);
        expect(bobsMenu.printMenu()).toBe(`BOBS BAGELS MENU\n${bagel.SKU} - ${bagel.name} - ${bagel.price}\n${bagel2.SKU} - ${bagel2.name} - ${bagel2.price}\n${bagel3.SKU} - ${bagel3.name} - ${bagel3.price}`);
    })

    it('Doesnt print menu when it is empty', function(){
        bobsMenu = new Menu('bobs bagels');
        expect(bobsMenu.printMenu()).toBe(`Sorry! There are no items on the menu`);
     })
})

describe('Testing menu.removeItem() function', function(){
    it('Removes item from the menu', function(){
        bobsMenu = new Menu('bobs bagels');
        bagel = new Bagel();
        bagel2 = new Bagel('BGLO');
        bagel4 = new Bagel('BGLO');

        bobsMenu.addToMenu(bagel);
        bobsMenu.addToMenu(bagel2);
        expect(bobsMenu.removeFromMenu(bagel4).length).toBe(1);
    })

    it('Cannot remove item.SKU that is not in the menu', function() {
        bobsMenu = new Menu('bobs bagels');
        bagel = new Bagel('BGLP');
        bagel2 = new Bagel('BGLO');
        bobsMenu.addToMenu(bagel);
        expect(bobsMenu.removeFromMenu(bagel2)).toBe(`Cannot remove item that is not on the menu`);
    })
})

describe('Testing offers class, adding and removing', function(){
    it('Check that you can add an offer to menu', function(){
        bobsMenu = new Menu('bobs bagels');
        offer = new Offer('BGLO', 6, 2.49);
        result = bobsMenu.addOffer(offer);
        expect(result[0]).toBe(offer);
    })

    it('Check that you can remove an offer from the menu', function(){
        bobsMenu = new Menu('bobs bagels');
        offer = new Offer('BGLO', 6, 2.49);
        offer1 = new Offer('BGLP', 12, 3.99);
        bobsMenu.addOffer(offer);
        bobsMenu.addOffer(offer1);
        expect(bobsMenu.removeOffer(offer1).length).toBe(1);
    })

    it('Checks displayOffers() function', function(){
        bobsMenu = new Menu('bobs bagels');
        offer = new Offer('BGLO', 6, 2.49);
        bobsMenu.addOffer(offer);
        expect(bobsMenu.displayOffers()).toBe(`SPECIAL OFFERS\n${offer.SKU} - ${offer.quantity} bagels for ${offer.price}`);
    })
})

