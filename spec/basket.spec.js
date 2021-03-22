const Basket = require('../src/basket.js');
const Bagel = require('../src/bagel.js');

describe('Checking add and remove methods', function(){
    it('Checks if bagel is added to basket', function(){
        let basket = new Basket();
        let bagel = new Bagel('BGLO');
        basket.addToBasket(bagel);
        expect(basket.contents.length).toBe(1);
    })

    it('Checks that you cant add an item which is already in the basket', function(){
        basket = new Basket();
        bagel = new Bagel('BGLO');
        basket.addToBasket(bagel);
        expect(basket.addToBasket(bagel)).toBe(`${bagel.SKU} is already in your basket`);
    })

    it('Checks if bagel is removed from basket.', function(){
        basket = new Basket();
        bagel = new Bagel('BGLO');
        basket.addToBasket(bagel);
        basket.removeFromBasket(bagel);
        expect(basket.contents.length).toBe(0);
    })

    it('Checks that you cant remove an item which doesnt exist', function(){
        basket = new Basket();
        bagel = new Bagel('BGLO');
        expect(basket.removeFromBasket(bagel)).toBe(`${bagel.SKU} is not in your basket`)
    })
})

describe('Checking the capacity of the basket', function(){
    it('Checks if basket is full.', function(){
        basket = new Basket();
        bagel = new Bagel('BGLO');
        bagel2 = new Bagel('BGLE');
        bagel3 = new Bagel('BGLP');
        basket.addToBasket(bagel);
        basket.addToBasket(bagel2);
        basket.addToBasket(bagel3);
        expect(basket.isBasketFull()).toBe(true);
    })

    it('Checks that you cant add items when basket is full', function(){
        basket = new Basket();
        bagel = new Bagel('BGLO');
        bagel2 = new Bagel('BGLE');
        bagel3 = new Bagel('BGLP');
        basket.addToBasket(bagel);
        basket.addToBasket(bagel2);
        expect(basket.addToBasket(bagel3)).toBe(`Cannot add ${bagel3.name}, basket is full`);
    })

    it('Checks if capacity has been increased.', function(){
        basket = new Basket()
        
        expect(basket.increaseCapacity()).toBe(7);
    })
})


describe('Checks prices of bagels', function(){
    it('Check the price of bagel before adding to basket', function(){
        basket = new Basket();
        bagel = new Bagel('BGLO');
        expect(basket.addToBasket(bagel)).toBe(`Bagel ${bagel.name} - ${bagel.price}, has been added to your basket`);

    })
    it('Checks the total sum of the bagels in my basket', function(){
        basket = new Basket()
        bagel = new Bagel('BGLO');
        bagel2 = new Bagel('BGLE')
        basket.addToBasket(bagel);
        basket.addToBasket(bagel2);
        expect(basket.subtotal).toBe(0.98);

    })
})
