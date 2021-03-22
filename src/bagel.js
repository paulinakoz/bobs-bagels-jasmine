class Bagel {
    constructor(SKU){
        if(SKU === 'BGLO'){
            this._SKU = SKU;
            this._name = 'Onion';
            this._price = 0.49;
        }

        if(SKU === 'BGLP'){
            this._SKU = SKU;
            this._name = 'Plain';
            this._price = 0.39;
        }

        if(SKU === 'BGLE'){
            this._SKU = SKU;
            this._name = 'Everything';
            this._price = 0.49;
        }
    }

    get SKU(){
        return this._SKU;
    }
    
    get name(){
        return this._name;
    }

    get price(){
        return this._price;
    }
};

module.exports = Bagel;