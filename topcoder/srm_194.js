//http://community.topcoder.com/stat?c=problem_statement&pm=1650

SRM 194

function maxPoints(win,tie) 
{
   var count = 1;
   var maxcount = 0;
   for (var i = 0; i < win.length; i++) 
    {
        count = win[i] * 3 + tie[i] * 1;
        maxcount = Math.max(maxcount, count); 
    }    
    return maxcount;
}
    
maxPoints([1,4,3,0,0],[3,1,5,3,1]);

