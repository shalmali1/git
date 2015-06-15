//http://community.topcoder.com/stat?c=problem_statement&pm=11031

//SRM 479



function TheAirTripDivTwo(flights, fuel) {
    var result =0;
    var count = 0;
    for (var i = 0; i < flights.length; i++) 
    {
        if ((fuel = fuel - flights[i]) < 0) 
        {
            return i;
        }
    }
    return flight.length;
}

TheAirTripDivTwo([1, 2, 3, 4, 5, 6, 7], 10);