class Garden {
    constructor(spaceAvailable) {
        this.spaveAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired < this.spaveAvailable) {
            this.plants.push(
                {
                    plantName: plantName,
                    spaceRequired: spaceRequired,
                    ripe: false,
                    quantity: 0
                });
            this.spaveAvailable -= spaceRequired;
            return `The ${plantName} has been successfully planted in the garden.`
        } else {
            throw new Error("Not enough space in the garden.");
        }
    }

    ripenPlant(plantName, quantity) {
        let flag = false;
        let index = 0;
        for (let i = 0; i < this.plants.length; i++) {
            if (this.plants[i].plantName === plantName) {
                flag = true;
                index = i;
                break;
            }
        }
        if (flag) {
            if (this.plants[index].ripe) {
                throw new Error(`The ${plantName} is already ripe."`)
            } else {
                if (quantity <= 0) {
                    throw new Error("The quantity cannot be zero or negative.");
                } else {
                    this.plants[index].ripe = true;
                    this.plants[index].quantity += quantity;
                    let output;
                    this.plants[index].quantity === 1 ? output = `${quantity} ${plantName} has successfully ripened.` : output = `${quantity} ${plantName}s have successfully ripened.`;
                    return output;
                }
            }
        } else {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
    }
    harvestPlant(plantName){
        let flag = false;
        let index = 0;
        for (let i = 0; i < this.plants.length; i++) {
            if (this.plants[i].plantName === plantName) {
                flag = true;
                index = i;
                break;
            }
        }
        if (flag){
            if (this.plants[index].ripe){
                this.storage.push(this.plants[index]);
                this.spaveAvailable += this.plants[index].spaceRequired;
                this.plants.splice(index,1);
                return `The ${plantName} has been successfully harvested.`
            }
            else {
                throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
            }
        }
        else{
            throw new Error(`There is no ${plantName} in the garden.`)
        }
    }
    generateReport(){
        let sb = [];
        sb.push(`The garden has ${this.spaveAvailable} free space left.`)
        let names = [];
        for (let index = 0; index < this.plants.length; index++) {
            names.push(this.plants[index].plantName);
        }
        let sorted = names.sort((a,b) => a.localeCompare(b));
        sb.push(`Plants in the garden: ` + sorted.join(', '));
        if (this.storage.length > 0){

            let arr = [];
            for (let i = 0; i < this.storage.length; i++) {
                arr.push(`${this.storage[i].plantName} (${this.storage[i].quantity})`)
            }
            sb.push(`Plants in storage: ` + arr.join(', '));
        }
        else {
            sb.push('Plants in storage: The storage is empty.')
        }
        return sb.join('\n')
    }
}
let myGarden = new Garden(250)
try {
    console.log(myGarden.addPlant('apple', 20));
    console.log(myGarden.addPlant('orange', 200));
    console.log(myGarden.addPlant('raspberry', 10));
    console.log(myGarden.ripenPlant('apple', 10));
    console.log(myGarden.ripenPlant('orange', 1));
    console.log(myGarden.harvestPlant('orange'));
    console.log(myGarden.generateReport());
}
catch (Error){
    console.log(Error.message)
}


