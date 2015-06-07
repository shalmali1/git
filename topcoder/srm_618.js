/http://community.topcoder.com/stat?c=round_overview&rd=15851

SRM 618

function writingWords(str) {
    var result = 0;
    for (var i = 0; i < str.length; i++) {
            var code = str.charCodeAt(i);
            var aCode = "A".charCodeAt(0);
            result = result +  code - aCode + 1;
    }
    return result;
}
    
writingWords('VAMOSGIMNASIA');

