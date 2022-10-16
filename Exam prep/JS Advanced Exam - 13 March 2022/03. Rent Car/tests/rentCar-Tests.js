const {  expect } = require('chai');
const { describe } = require('mocha');
const { rentCar } = require('../rentCar');




describe("Tests ...", function() {
    describe("searchCar", function() {
        //Errors
        it("Should throw an Error 1", function() {
            expect(function () {
                rentCar.searchCar([1,2], 2);
            }).to.throw('Invalid input!');
        });
        it("Should throw an Error 2", function() {
            expect(function () {
                rentCar.searchCar(1, 'string');
            }).to.throw('Invalid input!');
        });
        it("Should throw an Error 3", function() {
            expect(function () {
                rentCar.searchCar(2, 2);
            }).to.throw('Invalid input!');
        });
        it("Should throw an Error 4", function() {
            expect(function () {
                rentCar.searchCar([1,2], 'model');
            }).to.throw('There are no such models in the catalog!');
        });
        it("Should throw an Error 5", function() {
            expect(function () {
                rentCar.searchCar([], 'model');
            }).to.throw('There are no such models in the catalog!');
        });

        //Outputs
        it("Should return string 1", function() {
        let output = rentCar.searchCar(['audi','bmw'],'audi');
        expect(output).to.be.equal(`There is 1 car of model audi in the catalog!`)
        })
        it("Should return string 2", function() {
            let output = rentCar.searchCar(['audi','bmw','audi'],'audi');
            expect(output).to.be.equal(`There is 2 car of model audi in the catalog!`)
        })
    });
    
    describe('calculatePriceOfCar', function () {
        //Errors
        it("Should throw an Error 1", function() {
            expect(function () {
                rentCar.calculatePriceOfCar('string', 2.2);
            }).to.throw('Invalid input!');
        });
        it("Should throw an Error 2", function() {
            expect(function () {
                rentCar.calculatePriceOfCar(1, 1);
            }).to.throw('Invalid input!');
        });
        it("Should throw an Error 3", function() {
            expect(function () {
                rentCar.calculatePriceOfCar(2, 2.2);
            }).to.throw('Invalid input!');
        });
        it("Should throw an Error 4", function() {
            expect(function () {
                rentCar.calculatePriceOfCar('lambo', 1);
            }).to.throw('No such model in the catalog!');
        });
        it("Should throw an Error 5", function() {
            expect(function () {
                rentCar.calculatePriceOfCar('audi', 2);
            }).to.throw('No such model in the catalog!');
        });

        //Outputs
        it("Should return string 1", function() {
            let output = rentCar.calculatePriceOfCar('Volkswagen',1);
            expect(output).to.be.equal(`You choose Volkswagen and it will cost $20!`)
        })
        it("Should return string 2", function() {
            let output = rentCar.calculatePriceOfCar('Audi',2);
            expect(output).to.be.equal(`You choose Audi and it will cost $72!`)
        })
    })
    describe("checkBudget", function(){
        //Error
        it("Should throw an Error 1", function() {
            expect(function () {
                rentCar.checkBudget(1.1,1,1);
            }).to.throw('Invalid input!');
        });
        it("Should throw an Error 2", function() {
            expect(function () {
                rentCar.checkBudget(1, 1.1,1);
            }).to.throw('Invalid input!');
        });
        it("Should throw an Error 3", function() {
            expect(function () {
                rentCar.checkBudget(2, 2, 2.2);
            }).to.throw('Invalid input!');
        });
        it("Should throw an Error 4", function() {
            expect(function () {
                rentCar.checkBudget(2.2,3.3,4.4);
            }).to.throw('Invalid input!');
        });
        //Outputs
        it("Should return string 1", function() {
            let output = rentCar.checkBudget(2,3,6);
            expect(output).to.be.equal(`You rent a car!`)
        })
        it("Should return string 2", function() {
            let output = rentCar.checkBudget(2,3,5);
            expect(output).to.be.equal('You need a bigger budget!')
        })
    })
});
