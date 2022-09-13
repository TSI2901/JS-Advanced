function Solve(num,cmd1,cmd2,cmd3,cmd4,cmd5){
    let number = Number(num);

    let chop = (number) => number / 2;
    let dice = (number) => Math.sqrt(number);
    let spice = (number) => number + 1;
    let bake = (number) => number * 3;
    let fillet = (number) => number - (0.2*number);
    
    let arr = [cmd1,cmd2,cmd3,cmd4,cmd5];
    for (let index = 0; index < arr.length; index++) {
        let currCmd = arr[index];
        switch (currCmd) {
            case 'chop':
                number = chop(number)
                break;
            case 'dice':
                number = dice(number)
                break;
            case 'spice':
                number = spice(number)
                break;
            case 'bake':
                number = bake(number)
                break;
            case 'fillet':
                number = fillet(number)
                break;
        }
        console.log(number)
    }
}

Solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');