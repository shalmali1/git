//http://community.topcoder.com/stat?c=problem_statement&pm=11127


SRM 483


function DigitHoles(number) {
    var sum = 0;
    var lookup  = [1, 0, 0, 0, 1, 0, 1, 0, 2, 1];
    while (number > 0)
    {
        sum = sum + lookup[Math.floor(number % 10)];
        number = Math.floor(number /10);
    }
    return sum;
}
DigitHoles(68);

