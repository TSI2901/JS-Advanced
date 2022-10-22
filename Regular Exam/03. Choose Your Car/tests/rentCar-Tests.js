const {  expect } = require('chai');
const { describe } = require('mocha');
const { chooseYourCar } = require('../chooseYourCar');




describe("Tests ...", function() {
    describe("choosingType", function() {
        // Errors
        it("Should throw Error 1", function() {
            expect(function(){
                chooseYourCar.choosingType('Sedan','red',1899)
            }).to.throw('Invalid Year!')
        });
        it("Should throw Error 2", function() {
            expect(function(){
                chooseYourCar.choosingType('Sedan','red',2023)
            }).to.throw('Invalid Year!')
        });
        it("Should throw Error 3", function() {
            expect(function(){
                chooseYourCar.choosingType('Combi','red',2021)
            }).to.throw('This type of car is not what you are looking for.')
        });
        // Outputs
        it("Correct output 1", function() {
            let output = chooseYourCar.choosingType('Sedan','red',2021)
            expect(output).to.be.equal(`This red Sedan meets the requirements, that you have.`)
        })
        it("Correct output 2", function() {
            let output = chooseYourCar.choosingType('Sedan','red',2010)
            expect(output).to.be.equal(`This red Sedan meets the requirements, that you have.`)
        })
        it("Correct output 3", function() {
            let output = chooseYourCar.choosingType('Sedan','red',2009)
            expect(output).to.be.equal(`This Sedan is too old for you, especially with that red color.`)
        })
     });
     describe("brandName", function () {
        //Errors
        it("Should throw Error 1", function(){
            expect(function(){
                chooseYourCar.brandName('not Arr',1)
            }).to.throw("Invalid Information!")
        })
        it("Should throw Error 2", function(){
            expect(function(){
                chooseYourCar.brandName([1,2],1.1)
            }).to.throw("Invalid Information!")
        })
        it("Should throw Error 3", function(){
            expect(function(){
                chooseYourCar.brandName(['a','b'],-1)
            }).to.throw("Invalid Information!")
        })
        it("Should throw Error 4", function(){
            expect(function(){
                chooseYourCar.brandName([1,2,3],3)
            }).to.throw("Invalid Information!")
        })
        it("Should throw Error 5", function(){
            expect(function(){
                chooseYourCar.brandName([1,2,3],4)
            }).to.throw("Invalid Information!")
        })
        //Correct output
        it("Correct output 1", function(){
            let output = chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],2)
            expect(output).to.be.equal("BMW, Toyota");
        })
        it("Correct output 2", function(){
            let output = chooseYourCar.brandName(["BMW", "Toyota", "Peugeot","test"],3)
            expect(output).to.be.equal("BMW, Toyota, Peugeot");
        })
     });
    describe("carFuelConsumption", function(){
        //Errors
        it("Should throw Error 1", function(){
            expect(function(){
                chooseYourCar.carFuelConsumption('str',1)
            }).to.throw("Invalid Information!")
        })
        it("Should throw Error 2", function(){
            expect(function(){
                chooseYourCar.carFuelConsumption(1,'str')
            }).to.throw("Invalid Information!")
        })
        it("Should throw Error 3", function(){
            expect(function(){
                chooseYourCar.carFuelConsumption(0,1)
            }).to.throw("Invalid Information!")
        })
        it("Should throw Error 4", function(){
            expect(function(){
                chooseYourCar.carFuelConsumption(-1,1)
            }).to.throw("Invalid Information!")
        })
        it("Should throw Error 5", function(){
            expect(function(){
                chooseYourCar.carFuelConsumption(1,0)
            }).to.throw("Invalid Information!")
        })
        it("Should throw Error 6", function(){
            expect(function(){
                chooseYourCar.carFuelConsumption(1,-1)
            }).to.throw("Invalid Information!")
        })
        //Correct output
        it("Correct output 1",function () {
            let output = chooseYourCar.carFuelConsumption(100,10)
            expect(output).to.be.equal(`The car burns too much fuel - 10.00 liters!`)
        })
        it("Correct output 2",function () {
            let output = chooseYourCar.carFuelConsumption(100,7)
            expect(output).to.be.equal(`The car is efficient enough, it burns 7.00 liters/100 km.`)
        })
        it("Correct output 3",function () {
            let output = chooseYourCar.carFuelConsumption(100,6)
            expect(output).to.be.equal(`The car is efficient enough, it burns 6.00 liters/100 km.`)
        })
    })

});
