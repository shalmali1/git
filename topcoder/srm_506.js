//http://community.topcoder.com/stat?c=problem_statement&pm=11279

//SRM 506

function SlimeXSlimeRancher2(arr) {
    var result = 0;
    arr.sort(function(a, b){return b-a});
    
    for (var i = 0; i < arr.length; i++) 
    {
        result = result + arr[0]-arr[i];
    }
    return result;
}

SlimeXSlimeRancher2([900,500,100]);