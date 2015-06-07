//http://community.topcoder.com/stat?c=problem_statement&pm=10007


SRM 433


function RoyalTreasurer(A,B) {
    var s = 0;
    A.sort(function(a, b){return b-a});
    B.sort(function(a, b){return a-b});
    
    for (var i = 0; i < A.length; i++) {
        s =  s + (A[i] * B[i]);
    }
    return s;
}

RoyalTreasurer([5,15,100,31,39,0,0,3,26],
[11,12,13,2,3,4,5,9,1]);
