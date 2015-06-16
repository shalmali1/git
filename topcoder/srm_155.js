//http://community.topcoder.com/stat?c=problem_statement&pm=1686

//SRM 155


function Quipu(str){
    var countx = 0;
    var str1 = "";
    var i = 1;
    while (i < str.length) {
        if (str[i] == 'X') 
        {
            countx++;
            i++;
        }
        else if (str[i] == '-')
        {
            str1 = str1 + countx;
            countx = 0;
            i++;
            while(i < str.length && str[i] == '-') {
                str1 = str1 + "0";
                i++;
            }
        }
    }
    return str1;
}

Quipu('-XX---X--XXX-');