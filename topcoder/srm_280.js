//http://community.topcoder.com/stat?c=problem_statement&pm=5988

SRM 280

function UniqueDigits(num) 
{
    var temp = 0;
    var uniqueCount = 0;
    for (var i = 1; i < num; i++) 
    {
        var currNum = i;
        var map = {};
        while (currNum !== 0) 
        {
            var digit = currNum % 10;
            if (!map[digit]) 
            {
                map[digit] = 1;
            } 
            else 
            {
                break;
            }
            currNum = Math.floor(currNum/10);
        }
        if (currNum === 0)
            uniqueCount++;
    }
    return uniqueCount;
}

UniqueDigits(101);
