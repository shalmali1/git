//http://community.topcoder.com/stat?c=problem_statement&pm=6618

//SRM 316


function HiddenMessage(Str) {
    var str = Str.trim();
    var result = "";
    
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == " " && str.charAt(i+1) !== " ") {
            result = result + str.charAt(i+1);
        }
    }
    return str.charAt(0) + result;
}

HiddenMessage("round  elimination during  onsite  contest");