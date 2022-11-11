let weekday=prompt("Day name");

switch(weekday){
    case "saturday" :
        console.log(`saturday,today is closed`);
        break;
    case "sunday" :
        console.log(`sunday,today is normal day`);
        break;
    case "monday" :
        console.log(`monday,today is normal day`);
        break;
     case "tuesday" :
        console.log(`tuesday,today is normal day`);
        break;
    case "wednesday" :
        console.log(`wednesday,today is normal day`);
        break;
    case "thursday" :
        console.log(`thursday,today is normal day`);
        break;
    case "friday" :
        console.log(`friday,today is closed`);
        break;
    default :
    console.log(`Not a day`);
}