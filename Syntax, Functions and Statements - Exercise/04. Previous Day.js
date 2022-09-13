function CalculateThePreviousDay(year,month,day){
    let date = new Date(`${year}-${month}-${day}`)
    let previous = new Date(date.setDate(date.getDate()-1));
    console.log(`${previous.getFullYear()}-${previous.getMonth() +1 }-${previous.getDate()}`);
}
CalculateThePreviousDay(2016, 9, 30);
