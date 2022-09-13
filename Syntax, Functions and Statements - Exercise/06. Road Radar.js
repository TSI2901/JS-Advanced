function SpeedRadar(speed, zone){
    let speedLimit;
    let outputMessage;
    let status;
    switch (zone) {
        case 'motorway': 
            speedLimit = 130;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'city':
            speedLimit = 50;
                break;
        case 'residential':
            speedLimit = 20;
            break;                
        default:
            break;
    }
    if (speed <= speedLimit) {
        outputMessage = `Driving ${speed} km/h in a ${speedLimit} zone`;
    }
    else{
        let diff = speed - speedLimit;
        if (diff <= 20) {
            status = 'speeding'
        }
        else if (diff <= 40) {
            status = 'excessive speeding'
        }
        else{
            status = 'reckless driving'
        }
        outputMessage = `The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`
    }
    console.log(outputMessage);
}

SpeedRadar(21, 'residential')
SpeedRadar(120, 'interstate')