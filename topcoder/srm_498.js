//http://community.topcoder.com/stat?c=problem_statement&pm=11317

//SRM 498


function AdditionGame(a,b,c,N) {
    var result = 0;
    for (var i = 0; i < N; i++) 
    {
        if (a >= b && a >= c && a >= 1) 
        {
            result = result + a;
            a--;
        }
        else if (b >= a && b >= c && b >= 1) 
        {
            result = result + b;
            b--;
        }
         else if (c >= a && c >= b && c >= 1)
        {
            result = result + c;
            c--;
        }
    }    
    return result;
}

AdditionGame(3,5,48,40);