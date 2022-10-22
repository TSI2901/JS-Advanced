class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        let output = [];
        for (const footballPlayer of footballPlayers) {
            let [name, age, value] = footballPlayer.split('/');
            let flag = true;
            for (const player of this.invitedPlayers) {
                if (player.name === name) {
                    flag = false;
                    if (player.value < value) {
                        player.value = value;
                    }
                }
            }
            if (flag) {
                this.invitedPlayers.push({name, age, value});
                output.push(name);
            }
        }
        return `You successfully invite ${output.join(', ')}.`;
    }
    signContract(selectedPlayer){
        let [name,playerOfer] = selectedPlayer.split(`/`);
        let flag = true;
        for (const player of this.invitedPlayers) {
            if (player.name === name){
                flag = false;
                if (player.value > playerOfer){

                    throw  new Error(`The manager's offer is not enough to sign a contract with ${name}, ${player.value - playerOfer} million more are needed to sign the contract!`);
                }
                player.value = "Bought";

                return `Congratulations! You sign a contract with ${name} for ${playerOfer} million dollars.`
            }
        }
        if (flag){
            throw new Error(`${name} is not invited to the selection list!`)
        }
    }
    ageLimit(name, age){
        let flag = true;
        for (const player of this.invitedPlayers) {
            if (player.name === name) {

                flag = false;

                if (player.age < age){
                    let difference = age - player.age;
                    if (difference > 5){
                        return  `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`

                    }
                    else if (difference < 5){
                        return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`
                    }
                }
                else{
                    return `${name} is above age limit!`
                }
            }
        }
        if (flag) {
            throw new Error(`${name} is not invited to the selection list!`)
        }
    }
    transferWindowResult(){
        let output = [];
        output.push("Players list:");
        this.invitedPlayers.sort((a,b) => a.name.localeCompare(b.name));
        for (const player of this.invitedPlayers) {
            output.push(`Player ${player.name}-${player.value}`)
        }
        return output.join('\n');
    }
}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
