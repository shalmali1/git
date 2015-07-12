//http://community.topcoder.com/stat?c=problem_statement&pm=10940

//SRM 472


function ColorfulTilesEasy(room) {
    var ret = 0;
    var i = 0;
    for (var k = 0; k < room.length-1; k++) {
        if (room[k] == room[k+1]) {
            ret++;
            k++;
        }
    }
    return ret;
}
    
    
ColorfulTilesEasy("BBBYYYYYY");

