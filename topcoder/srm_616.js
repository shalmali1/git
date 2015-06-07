http://community.topcoder.com/stat?c=problem_statement&pm=13125

SRM 616


function WakingUpEasy(alarms, sleepy) 
{
    var count = 0;
    var k = 0;
    while (sleepy > 0) {
        count++;
        sleepy = sleepy - alarms[k];
        k = (k + 1) % alarms.length;
    }
    return count;
}
WakingUpEasy([5, 2, 4],13);
