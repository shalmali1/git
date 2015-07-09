
//http://community.topcoder.com/stat?c=problem_statement&pm=8620

//SRM 391


function SnowyWinter(start, end) {
    
    start.sort(function(a, b){return a-b});
    end.sort(function(a, b){return a-b});
    
    var res = 0;
    var j = 0;
    var min = start[0];
    var max = end[0];
    for (var i = 0; i < end.length; i++) {
        if (i+1 < end.length && end[i] >= start[i+1]) {
            max = Math.max(start[i+1], end[i]);
        } 
        else 
        {
            max = end[i];
            res += (max - min);
            if (i+1 < end.length)
                min = start[i+1];
        }
    }
    return res;
}

console.log(SnowyWinter([45,100,125,10,15,35,30,9],
                        [46,200,175,20,25,45,40,10]));
                  