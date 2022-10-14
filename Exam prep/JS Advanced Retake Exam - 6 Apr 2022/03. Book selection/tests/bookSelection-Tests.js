let expect = require('chai').expect;
let bookSelection = require('../bookSelection').bookSelection;

describe("Tests", function() {
    describe("isGenreSuitable", function() {

        it("Invalid input", function() {
            let output1 = bookSelection.isGenreSuitable('Thriller', 12)
            let output2 = bookSelection.isGenreSuitable('Horror', 11)
            expect(output1).to.be.equal(`Books with Thriller genre are not suitable for kids at 12 age`)
            expect(output2).to.be.equal(`Books with Horror genre are not suitable for kids at 11 age`)
        });
        it("Correct input", function () {
            let output1 = bookSelection.isGenreSuitable('Thriller', 13)
            let output2 = bookSelection.isGenreSuitable('Cartoon', 11)
            expect(output1).to.be.equal(`Those books are suitable`)
            expect(output2).to.be.equal(`Those books are suitable`)
        })
     });
     
    describe("isItAffordable", function() {
        it("Throws errror1", function () {
            expect(function () {
                bookSelection.isItAffordable(10,"string");
            }).to.throw("Invalid input");
        })
        it("Throws errror2", function () {
            expect(function () {
                bookSelection.isItAffordable("string",10);
            }).to.throw("Invalid input");
        })
        it("Throws errror3", function () {
            expect(function () {
                bookSelection.isItAffordable("string","s");
            }).to.throw("Invalid input");
        })

        it("Price bigger than budget", function () {
            let output1 = bookSelection.isItAffordable(11,10);
            expect(output1).to.be.equal("You don't have enough money");
        })
        it("Price equal to budget", function () {
            let output1 = bookSelection.isItAffordable(11,11);
            expect(output1).to.be.equal(`Book bought. You have 0$ left`);
        })
        it("Budget bigger than price", function () {
            let output1 = bookSelection.isItAffordable(10,11);
            expect(output1).to.be.equal(`Book bought. You have 1$ left`);
        })
    });

    describe("suitableTitles", function(){
        it("Throws error1", function () {
            expect(function () {
                bookSelection.suitableTitles(1,"string");
            }).to.throw("Invalid input");
        })
        it("Throws error2", function () {
            expect(function () {
                bookSelection.suitableTitles("string",1);
            }).to.throw("Invalid input");
        })
        it("Throws error3", function () {
            expect(function () {
                bookSelection.suitableTitles(2,1);
            }).to.throw("Invalid input");
        })

        it("Should return empty arr", function () {
            let output1 = bookSelection.suitableTitles([{title: "title1",genre: "Cartoon"},{title: "title2",genre: "Cartoon"}],"Thriller")
            let isTrue = false;
            if(output1.length === 0){
                isTrue = true;
            }
            expect(isTrue).to.be.equal(true);
        })
        it("Should return non-empty arr 1", function () {
            let output1 = bookSelection.suitableTitles([{title: "title1",genre: "Cartoon"},{title: "title2",genre: "Thriller"}],"Cartoon")
            let isTrue = false;
            for (let index = 0; index < output1.length; index++) {
                if(output1[index] === "title1"){
                    isTrue = true;
                }
            }
            expect(isTrue).to.be.equal(true);
        })
        it("Should return non-empty arr 2", function () {
            let arr = [{title: "title1",genre: "Cartoon"},{title: "title2",genre: "Thriller"},{title: "title3",genre: "Cartoon"}]
            let suitableArr = [{title: "title1",genre: "Cartoon"},{title: "title3",genre: "Cartoon"}]
            let output1 = bookSelection.suitableTitles(arr,"Cartoon")
            let isTrue = false;
            for (let index = 0; index < output1.length; index++) {
                if(output1[index] === suitableArr[index].title){
                    isTrue = true;
                }
            }
            expect(isTrue).to.be.equal(true);
        })
    })
});
