function print(a){
    if(a == null){
        for(let i = 0; i < 5; i++){
            console.log('* '.repeat(5))
        }
    }
    else{
        for(let i = 0; i < a; i++){
            console.log('* '.repeat(a))
        }
    }
}
print(4)