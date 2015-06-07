//http://community.topcoder.com/stat?c=problem_statement&pm=11553

SRM 519

function WhichDay(arr) {
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    console.log(weekdays.sort());
    console.log(arr.sort());

    for (var i = 0; i < weekdays.length; i++) 
    {
        if (weekdays[i] !== arr[i])
        return weekdays[i];
    }      
    return false;
  }


WhichDay(["Monday", "Tuesday","Saturday", "Wednesday", "Thursday", "Friday"]);
