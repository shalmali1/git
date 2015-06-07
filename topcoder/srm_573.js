//http://community.topcoder.com/stat?c=problem_statement&pm=12469

SRM 573

function SkiResortsEasy(altitude) {
    var diff = 0;
    var mincost = 0;
    for (var i = 1; i < altitude.length; i++) {
        if (altitude[i-1] < altitude[i]) {
            diff = altitude[i] - altitude[i-1];
            altitude[i] = altitude[i] - diff;
            mincost = mincost + diff;
        }
    }
   return mincost; 
}

SkiResortsEasy([6, 8, 5, 4, 7, 4, 2, 3, 1]);

