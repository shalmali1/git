//http://community.topcoder.com/stat?c=problem_statement&pm=12524

SRM 579

function PrimalUnlicensedCreatures(l, grezPower) 
{
    var count = 0;
    grezPower.sort(function comp(a,b) { return a - b; });
    for (var i = 0; i < grezPower.length; i++) 
    {
        if (grezPower[i] < l) {
            count++;
            l = l + Math.floor(grezPower[i]/2);
        }
    }
    return count;
}

PrimalUnlicensedCreatures(20,[3, 3, 3, 3, 3, 1, 25]);
