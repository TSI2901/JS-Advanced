function Cmd(arr) {
    let result = [];
    let toPush = 0;
    for (const arrElement of arr) {
        if (arrElement == "add"){
            toPush++;
            result.push(toPush);
        }
        else if (arrElement == "remove"){
            toPush++;
            result.pop()
        }
    }
    if (result.length > 0){
        for (const resultElement of result) {
            console.log(resultElement)
        }
    }
    else{
        console.log('Empty')
    }
}
Cmd(['remove', 'remove', 'remove'])