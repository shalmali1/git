//http://community.topcoder.com/stat?c=problem_statement&pm=6635&rd=9995

SRM 315

function rosePetals(arr){
    var sum = 0;
    var lookup = [0,0,0,2,0,4,0];
    for (var i = 0; i < arr.length; i++) {
       sum = sum + lookup[arr[i]]; 
    }
    return sum;
}

rosePetals([1, 5, 3, 2, 5]);



//http://community.topcoder.com/stat?c=round_overview&rd=15851

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



//http://community.topcoder.com/stat?c=problem_statement&pm=12438

SRM 571 

function FoxandGame(words) {
    var count = 0;
   
    for (var i = 0; i < words.length; i++) 
    {
        var word = words[i];
        for (var j = 0; j < word.length; j++) 
        {
            if (word.charAt(j) == 'o') {
                count++;
            }
        }
    }
    return count;
}    

FoxandGame(["ooo","o--"]);



http://community.topcoder.com/stat?c=problem_statement&pm=7263

SRM 330

function getSortness(arr) {
    var sum = 0;
    var countRight = 0;
    var countLeft = 0;
    for (var i = 0; i < arr.length; i++) 
    {
        for (var j = i-1; j >= 0; j--) 
        {
            if (arr[j] > arr[i]) 
            {
                countLeft++;
            }
        }
        for (var k = i+1; k < arr.length; k++) 
        {
            if (arr[k] < arr[i]) 
            {
                countRight++;
            }
        }
    }
    console.log(countLeft);
    console.log(countRight);
    sum = (countLeft + countRight)/arr.length;
    return sum;

}

getSortness([3,2,1]);



//http://community.topcoder.com/stat?c=problem_statement&pm=12297

SRM 560

function typingDistance(str, word) 
{
  var result = 0;
  for (var i = 0; i < word.length-1; i++) 
    {
      var s = str.indexOf(word.charAt(i));
      var m = str.indexOf(word.charAt(i+1));
      result = result + Math.abs(s-m);
    }
   return result; 
}

typingDistance("qwertyuiop","potter");



//http://community.topcoder.com/stat?c=problem_statement&pm=3452

SRM 224

function reverseStr(str) {
    var result = "";
    for (var i = str.length-1; i >= 0; i--) {
        result = result + str.charAt(i);
    }
    return result;
}
function InsideOut(str) {
    
    var len = str.length / 2;
    var left = reverseStr(str.substring(0, len));
    var right = reverseStr(str.substring(len, str.length));
    return left + right;
    
}

InsideOut("RUT OWT SNEH HCNERF EERHTEGDIRTRAP A DNA  SEVODELT");



//http://community.topcoder.com/stat?c=problem_statement&pm=961

SRM 202

function LetterStrings(words) {
    var count = 0;
    for (var i = 0; i < words.length; i++) 
    {
        var word = words[i];
        for (var j = 0; j < word.length; j++) 
        {
            if (word.charAt(j) >= 'a' && word.charAt(j) <= 'z'
           || word.charAt(j) >= 'A' && word.charAt(j) <= 'Z') {
               count = count + 1;
           }
            
        }
    }
    return count;
}

LetterStrings(["-A-B-C-D", "--------EFGHI", "JKLMNOPQR", "---STU-VW-XYZ"]);



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



//http://community.topcoder.com/stat?c=problem_statement&pm=4788

SRM 271

function CheckFunction(str){
    var result = 0;
    var lookup = [6,2,5,5,4,5,6,3,7,6];
    for (var i = 0; i < str.length; i++) {
        result = result + lookup[str[i]];
    }
    return result;
}

CheckFunction("13579");



//http://community.topcoder.com/stat?c=problem_statement&pm=11553

SRM 519

function WhichDay(arr) {
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    console.log(weekdays.sort());
    console.log(arr.sort());

    for (var i = 0; i < weekdays.length; i++) 
    {
        if (weekdays[i] !== arr[i])
        return weekdays[i];
    }      
    return false;
  }


WhichDay(["Monday", "Tuesday","Saturday", "Wednesday", "Thursday", "Friday"]);
//http://community.topcoder.com/stat?c=problem_statement&pm=2268

SRM 181

function KiloMan(arr,str) {
    var hit = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === 'S' && (arr[i] === 1 || arr[i] === 2)) {
            hit++;
        }
        if (str.charAt(i) === 'J' && arr[i] > 2) {
            hit++;
        }
    }
    return hit;
}

KiloMan([1,3,2,3,3,1,2,2,1],'JJSSSJSSJ');



//http://community.topcoder.com/stat?c=problem_statement&pm=6003

SRM 283

function DiagonalDisproportion(arr) {
    var majorSum = 0;
    var numStr;
    for (var i = 0; i < arr.length; i++) {
        numStr = arr[i];
        majorSum += parseInt(numStr.charAt(i));
    }
    var minorSum = 0;
    for (var j = arr.length-1; j >= 0; j--) {
        numStr = arr[j];
        minorSum += parseInt(numStr.charAt(arr.length-j-1));
    }
    return (majorSum - minorSum);
}



http://community.topcoder.com/stat?c=problem_statement&pm=6036

SRM 288

function AccountBalance(num,arr) 
{
    var result = 0;
    for (var i = 0; i < arr.length; i++) 
    {
        var money = arr[i];
        for (var j = 0; j < money.length; j++) 
        {
            if (money.charAt(j) == 'C') 
            {
                num = num + parseInt(money.match(/[0-9]+/g));
            }
            if (money.charAt(j) == 'D') 
            {
                num = num - parseInt(money.match(/[0-9]+/g));
            }
        }
    }
    return num;
}

AccountBalance(53874, ["D 1234", "C 987", "D 2345", "C 654", "D 6789", "D 34567"]);



//http://community.topcoder.com/stat?c=problem_statement&pm=13505

SRM 637

function GreaterGameDiv2(arr1,arr2) {
    var count = 0;
    for (var i = 0; i < arr1.length; i++) 
    {
        if (arr1[i] > arr2[i]) 
        {
            count++;
        }
    }
    return count;
}

GreaterGameDiv2([1,3],[4,2]);


/
/http://community.topcoder.com/stat?c=problem_statement&pm=13195

SRM 624

function CostofDancing(num, arr) {
    var result = 0;
    arr.sort();
    for (var i = 0; i < num; i++) {
        result = result + arr[i];
    }
    return result;
}

CostofDancing(1, [2, 2, 4, 5, 3]);



//http://community.topcoder.com/stat?c=problem_statement&pm=12469

SRM 573

function SkiResortsEasy(altitude) {
    var diff = 0;
    var mincost = 0;
    for (var i = 1; i < altitude.length; i++) {
        if (altitude[i-1] < altitude[i]) {
            diff = altitude[i] - altitude[i-1];
            altitude[i] = altitude[i] - diff;
            mincost = mincost + diff;
        }
    }
   return mincost; 
}

SkiResortsEasy([6, 8, 5, 4, 7, 4, 2, 3, 1]);




http://community.topcoder.com/stat?c=problem_statement&pm=13650

SRM 648

function KitayutaMart2(K,T){
    var price = K;
    var res = 1;
    
    while (price < T) {
        K = K * 2;
        price = price + K;
        res++;
    }
    return res;
}

KitayutaMart2(150,1050);




http://community.topcoder.com/stat?c=problem_statement&pm=13004

SRM 609

function MagicalStringDiv2(str) {
    var count1 = 0;
    var count2 = 0;
    var mid = Math.floor(str.length/2);
    var left = str.substring(0,mid);
    var right = str.substring(mid, str.length);

    for (var i = 0; i < left.length; i++) 
    {
        if (left.charAt(i) !== '>') 
        {
            count1++;
        }
    }
    
    for (var j = 0; j < right.length; j++)
    {
        if (right.charAt(j) !== '<') 
        {
            count2++;
        }
    }
    return count1+count2;
}

MagicalStringDiv2(">><<><");




http://community.topcoder.com/stat?c=problem_statement&pm=12112

SRM 592

function LittleElephantAndBooks(arr, number) {
    var lazyPages = 0;
    arr.sort(function sortc(a,b) {return a-b });
    
    for (var i = 0; i < number-1; i++) {
        lazyPages = lazyPages + arr[i];
    }
    lazyPages += arr[number];
    return lazyPages;
}

LittleElephantAndBooks([74, 86, 32, 13, 100, 67, 77],2)



//http://community.topcoder.com/stat?c=problem_statement&pm=13521

SRM 638

function NamingConvention(str) {
    var s = "";
    for (var i = 0; i < str.length-1; i++) {
        if (str.charAt(i) == '_') 
        {
            s = s + str.charAt(i+1).toUpperCase();
            i++;
        }
        else
        {
            s = s + str.charAt(i);
        }
    }
    return s + str.charAt(i);
}

NamingConvention("sum_of_two_numbers");




//http://community.topcoder.com/stat?c=problem_statement&pm=13043

SRM 612

function LeftAndRightHandedDiv2(str) {
    var count = 0;
    
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == 'R' && str.charAt(i+1) == 'L') {
            count++;
        } 
    }
    return count;
}

LeftAndRightHandedDiv2("LRLRRR");



//http://community.topcoder.com/stat?c=problem_statement&pm=1728

SRM 208

function DitherCounter(str, color) {
    var count = 0;
    for (var j = 0; j < color.length; j++) 
    {
        var colorStr = color[j];
        for (var k = 0; k < colorStr.length; k++) 
        {
            for (var i = 0; i < str.length; i++) 
            {
                if (colorStr.charAt(k) === str.charAt(i)) 
                {
                    count++;
                    break;
                }
            }
        }
    }
    return count;
}
DitherCounter("BW",["BBBBBBBB","BBWBWBWB","BWBWBWBB","BBWBWBWB",
 "BWBWBWBB","BBBBBBBB"]);
 
 

//http://community.topcoder.com/stat?c=problem_statement&pm=10616

SRM 448 
 
 function TheBlackJackDivTwo(arr) {
    var count = 0;
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        if (str.charAt(0) >='2' && str.charAt(0) <= '9') {
            sum = sum + parseInt(str.charAt(0));
        } else {
            switch (str.charAt(0)) {
                case 'J':
                case 'K':
                case 'Q':
                case 'T':
                    sum+=10;
                    break;
                case 'A':
                    sum+=11;
                    break;
            }
        }
    }
    return sum;
}

TheBlackJackDivTwo(["3S", "KC", "AS", "7C", "TC", "9C", "4H", "4S", "2S"]);



http://community.topcoder.com/stat?c=problem_statement&pm=11631

SRM 532

function DengklekTryingToSleep(arr) {
   var result = 0;
    arr.sort(function(a, b){return b-a});
    
    for(var i = 0; i < arr.length -1; i++)
    {
        if (arr[i+1] - arr[i] !== 1)
        {
            result = result + arr[i] - arr[i+1] - 1;
        }
    }
    return result;
}
DengklekTryingToSleep([5, 3, 2, 7]);
 
 
 
//http://community.topcoder.com/stat?c=problem_statement&pm=6528

SRM 308
 
 
 function MedianOfNumbers(arr) {
    arr.sort(function(a, b){return b-a});
    var mid = Math.floor(arr.length/2);
    if (arr.length % 2 === 0)
        return -1;
    else
    {
        return arr[mid];
    }
}

MedianOfNumbers([32, 54, 27, 4, 69, 96, 73, 1, 100, 15, 21]);



http://community.topcoder.com/stat?c=problem_statement&pm=4503

SRM 238

function ArrayHash(arr) {
    var hash = 0;
	for (var i = 0; i < arr.length; i++)
	{
        var str = arr[i];
		for (var j = 0; j < str.length; j++)
		{
			hash = hash + (str.charCodeAt(j) - 65) + i + j;
		}
	}
	return hash;
}

ArrayHash(["CBA","DDD"]);




//http://community.topcoder.com/stat?c=problem_statement&pm=12950

SRM 605

function AlienAndPassword(str) {
   
        var result = 1;
        for(var i = 0; i < str.length-1; i++){
            if(str.charAt(i) != str.charAt(i+1)) 
                result++;
        }
        return result;
    }

 AlienAndPassword("AGAAGAHHHHFTQLLAPUURQQRRRUFJJSBSZVJZZZ");
 
 

//http://community.topcoder.com/stat?c=problem_statement&pm=13048

SRM 614
 
 
 function MicroStrings(a,d) {
    var result = "";
    var n = 1;
    while (a >= (n*d)) {
        result = result + (a-(n*d))
        n++;
    }
    return a + result;
}

MicroStrings(30,6);




//http://community.topcoder.com/stat?c=problem_statement&pm=11012

SRM 487

function BunnyExamAfter(black,gray,white) {
    var result = 0;
    for (var i = 0; i < gray.length; i++) 
    {
      if (black.charAt(i) != gray.charAt(i) 
      && gray.charAt(i) == white.charAt(i)) 
      {
        result += 2;
      } else if (black.charAt(i) !== gray.charAt(i) 
      || black.charAt(i) !== white.charAt(i)) 
      {
        result++;
      }
    }
    return result;
}

BunnyExamAfter("ABC","PQR","XYZ");




//http://community.topcoder.com/stat?c=problem_statement&pm=3100

SRM 218

function AccessLevel(arr, priv) {
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        if (priv > arr[i]) {
            str = str + 'D';
        }
        else
        {
            str = str + 'A';
        }
    }
    return str;
}

AccessLevel([34,78,9,52,11,1],49); 




//http://community.topcoder.com/stat?c=problem_statement&pm=6090

SRM 336


function VowelLatin(str) {
var vow = "";
var nvow = "";
for (var i = 0; i < str.length; i++)
      {
	if (str.charAt(i) == 'a' ||
	    str.charAt(i) == 'i' ||
	    str.charAt(i) == 'u' ||
	    str.charAt(i) == 'e' ||
	    str.charAt(i) == 'o' ||
	    str.charAt(i) == 'A' ||
	    str.charAt(i) == 'I' ||
	    str.charAt(i) == 'U' ||
	    str.charAt(i) == 'E' ||
	    str.charAt(i) == 'O' )
	  vow += str.charAt(i);
	else
	  nvow += str.charAt(i);
      }
    return nvow + vow;
  }
  
VowelLatin("application");




http://community.topcoder.com/stat?c=problem_statement&pm=11399

SRM 505

function xyz(str) {
    var ans = "";
    var firstWord = true;
    
    /* 
     * split the string on spaces such that each element of an array
     * contains one word.
     */
    var arr = str.split(" ");
    
    for (var k = 0; k < arr.length; k++) {
        /* currStr will have one word every time we iterate */
        var currStr = arr[k];
        
        if (firstWord === true) {
            /* We will come here if this is the first word in the sentence */
            currStr =  currStr.substring(0, 1).toUpperCase() + 
                       currStr.substring(1, currStr.length);
        }
        
        if (currStr.charAt(currStr.length-1) === '.') {
            /* the next word is the beginning of a new sentence */
            firstWord = true;
        } else {
            firstWord = false;
        }
        
        /* add the word as it is as it is not a start word. */
        ans = ans + currStr + " ";
    }
    /* remove the last space from the sentence */
    return ans.substring(0, ans.length-1);
}


console.log(xyz("hi meshrut this is x. a. this could. not be any better."));
console.log(xyz ("a. b. c. d. f. g."));




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




http://community.topcoder.com/stat?c=problem_statement&pm=7774

SRM 354

function search(arr, elem) {
    for (var k = 1; k < arr.length; k++) {
        if (arr[k] === elem) {
            return k;
        }
    }    
}
function Thimbles(swap) {
    var arr = [0, 1, 2, 3];
    for (var i = 0; i < swap.length; i++) {
        var s = swap[i];
        var p1 = search(arr, parseInt(s.charAt(0)));
        var p2 = search(arr, parseInt(s.charAt(2)));
        var temp = arr[p1];
        arr[p1] = arr[p2];
        arr[p2] = temp;
    }
    return arr[1];
}

Thimbles(["1-2", "3-2", "1-2", "2-1", "2-1", "3-2", "1-3", "3-1", "1-2"]);
Thimbles(["2-3", "1-3", "2-3", "2-1", "3-1"]);




http://community.topcoder.com/stat?c=problem_statement&pm=9822


SRM 408

function TournamentJudging(rawscore,conversionfactor) {
    var adjscore = 0;
        for (var j = 0; j < conversionfactor.length; j++) {
            adjscore = adjscore +Math.round(rawscore[j]/conversionfactor[j]);
        }
    
    return adjscore;
}

 TournamentJudging([0, 1000000, 5000, 1000000],[1, 2, 1000000, 4]);
 
 

 
 http://community.topcoder.com/stat?c=problem_statement&pm=13553
 
SRM 642
 
 function calculateMin(str) {
        var answer = 0;
        var i = 1;
        var a, b, c;
        while (i < str.length) {
            a = parseInt(str.slice(0, i));
            b = parseInt(str.slice(i,str.length));
           
         if (a + b < answer || answer === 0) 
        {
            answer = a + b;
            console.log(answer);
        }
        i++;
        }
        return answer;
}

calculateMin("1289"); 


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



//http://community.topcoder.com/stat?c=problem_statement&pm=11020

SRM 478


function thePouring(capacity, bottles, fromId, toId) {
    
    for(var i = 0; i < fromId.length; i++) {
        var amount = Math.min(bottles[fromId[i]],
                              capacity[toId[i]] - bottles[toId[i]]);
        bottles[fromId[i]] -= amount; 
        bottles[toId[i]] += amount;
    }
    return bottles;
}

thePouring([30, 20, 10],[10, 5, 5],[0, 1, 2],[1, 2, 0]);




//http://community.topcoder.com/stat?c=problem_statement&pm=12459

SRM 577


function EllysNewNickname(str) {
    var count = 0;
    var result =0;
    for(var i = 0; i < str.length; i++) {
        if ((str.charAt(i) == 'a' || str.charAt(i) == 'e'
        || str.charAt(i) == 'i' || str.charAt(i) == 'o'
        || str.charAt(i) == 'u' || str.charAt(i) == 'y') &&
        (str.charAt(i+1) == 'a' || str.charAt(i+1) == 'e'
        || str.charAt(i+1) == 'i' || str.charAt(i+1) == 'o'
        || str.charAt(i+1) == 'u' || str.charAt(i+1) == 'y')) 
        {
            count++;
            result = str.length- count;
        }
    }
    return result;
}

EllysNewNickname("tourist")




//http://community.topcoder.com/stat?c=problem_statement&pm=7503


SRM 340


function CssPropertyConverter(str) {
    var result = str;
    for (var i = 0; i < result.length-2; i++) {
        if (result.charAt(i) == "-") {
            result = result.substring(0,i) + 
                     result.charAt(i+1).toUpperCase() +
                     result.substring(i+2, result.length);
        }
    }
    return result;
}

CssPropertyConverter("top-border-width");




http://community.topcoder.com/stat?c=problem_statement&pm=5988

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



//http://community.topcoder.com/stat?c=problem_statement&pm=818


SRM 205

function Average(math,verb) {
    var sum = 0;
    var avg = 0;
    var count = 0;
    for (var i = 0; i < math.length; i++) {
        sum =  sum + verb[i] + math[i];
    }
    avg = sum / math.length;
     
    for (var j = 0; j < math.length; j++) 
    {
        if (verb[j] + math[j] < avg)
        {
           count++;
        }
    }
    return count;
}

Average([400,400,400,400,400,400,401],
[400,400,400,400,400,400,400]);




http://community.topcoder.com/stat?c=problem_statement&pm=13089

SRM 615

function AmebaDiv2(arr, num) {
    for (var i = 0; i < arr.length; i++) 
    {
        if (num == arr[i]) 
        {
            num = num + arr[i];
        }
    }
    return num;
}

AmebaDiv2([817,832,817,832,126,817,63,63,126,817,832,287,823,817,574], 63);




//http://community.topcoder.com/stat?c=problem_statement&pm=12733

SRM 589


function GooseTattarrattatDiv2(str) {
    
    var map = {};
    var maxKey = "";
    var count = 0;
    for (var i = 0; i < str.length; i++)
    {
        var key = str[i];
        if(!map[key])
        {
         map[key] = 0;
        }
        map[key]++;
        if(maxKey === "" || map[key] > map[maxKey]){
            maxKey = key;
        }
    }
    
    for (var j = 0; j < str.length; j++) 
    {
        if (str.charAt(j) !== maxKey) 
        {
            count++;
        }
     }
     return count;
}

GooseTattarrattatDiv2('geese');



//http://community.topcoder.com/stat?c=problem_statement&pm=12578

SRM 580


function ShoutterDiv2(s,t) 
{
    var pairs =0;
    for (var i = 1; i < s.length; i++) 
    {
	    for (var j = 0; j < i; j++) 
	    {
	        if ( s[j] <= t[i] && s[i] <= t[j] ) 
	        {
	            pairs++;
	        }
	    }
	}
	return pairs;
}

ShoutterDiv2([1, 2, 4],[3, 4, 6]);




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



//http://community.topcoder.com/stat?c=problem_statement&pm=4017


SRM 233


function JustifyText(arr) {

var max = 0;
	for (var i = 0; i < arr.length; i++)
		max = Math.max(arr[i].length, max);
		console.log(max);
		for (var j = 0; j < arr.length; j++)
			while (arr[j].length < max){
				arr[j] = " " + arr[j];
			}
		return arr;
	}

JustifyText(["BOB","TOMMY","JI"]);



//http://community.topcoder.com/stat?c=problem_statement&pm=6442


SRM 320

function StringSegment(str) {
    var count = 1;
    var sum = 0;
    var len = 0;
    for (var i = 0; i < str.length-1; i++) {
        if (str.charAt(i) == str.charAt(i+1)) 
        {
            count++;
        }
        else
        {
            sum = sum + count;
            count = 1;
        }
        if (str.charAt(i) !== str.charAt(i+1)) {
            len++;
        }

    } 
    return (sum +count)/(len+1);
    
}


StringSegment("aabbccdd");



/
/http://community.topcoder.com/stat?c=problem_statement&pm=5982

SRM 290

function SpeedTyper(str, arr) {
    var avg = 0;
    var diff = [];
    var diffSum = arr[0];
    
    diff[0] = arr[0];
    for (var i = 1; i < arr.length; i++) {
        diffSum = diffSum +  arr[i] - arr[i-1];
        diff[i] = arr[i] - arr[i-1];
    }
    
    avg = diffSum / arr.length;
    var result = "";

    for (var k = 0; k < diff.length; k++) {
        if (diff[k] > avg) {
            result = result + str.charAt(k);
        }
    }
    return result;
}

SpeedTyper("keyboard", [100,200,300,500,600,800,900,1200]);




//http://community.topcoder.com/stat?c=problem_statement&pm=7707


SRM 359


function CricketScores(runs) {
    var s = [0, 0];
    var currentBatsman = 0;
    for (var i = 0; i < runs.length; i++) 
    {
        s[currentBatsman] = s[currentBatsman] + runs[i];
        if (runs[i] % 2 !== 0) {
            currentBatsman = (currentBatsman + 1) % 2;
        }
        if ((i+1) % 6 === 0) {
            currentBatsman = (currentBatsman + 1) % 2;
        }
    }
    return s;
}

CricketScores([1, 3, 1, 3, 1, 3, 1, 3]);



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




//http://community.topcoder.com/stat?c=problem_statement&pm=4564

SRM 242


function TeamSplit(strength) {
    var res1 = 0;
    var res2 = 0
    strength.sort(function(a, b){return a-b});
    
    for (var i = 0; i < strength.length; i=i+2) {
        res1 = res1 + strength[i];
    }
    for (var j = 1; j < strength.length; j = j+2) {
        res2 = res2 + strength[j];
    }
    return Math.abs(res1-res2);
}

TeamSplit([9,8,7,6]);




//http://community.topcoder.com/stat?c=problem_statement&pm=2000

SRM 265

function FontSize(str, upper, lower) {
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        if (i > 0)
            sum+=1;
        if (str.charAt(i) >= 'A' && str.charAt(i) <= 'Z')
        {
    		sum = sum + upper[str.charCodeAt(i) - 65];
    	}
    	else if (str.charAt(i) >= 'a' && str.charAt(i) <= 'z')
    	{
    		sum = sum + lower[str.charCodeAt(i) - 97];
    	}
        else if (str.charAt(i) === ' ')
    	{
    		sum = sum + 3;
    	}
    }
	return sum;
}

console.log(FontSize("two  spaces",
                        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
                        [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]));
                        
                        
                        

http://community.topcoder.com/stat?c=problem_statement&pm=10465


SRM 442
                        
                        
function SimpleWordGame(arr,dict) {
    var result = 0;
    var map = {};
    for ( i = 0; i < arr.length; i++)
	{
		for ( j = 0; j < dict.length; j++)
		{
			if (arr[i] == dict[j])
			{
                if (!map[arr[i]]) {
				    map[arr[i]] = 1;
				    result = result + (arr[i].length) * (arr[i].length);
                }
			}
		}
	}
    return result;
}

SimpleWordGame(["orange", "orange"],
               ["strawberry", "orange", "grapefruit", "watermelon"]);
               
               


// http://community.topcoder.com/stat?c=problem_statement&pm=11229


SRM 490
               
               
function LuckyCounter(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) 
    {
        var str = arr[i];
        if (str.charAt(0) == str.charAt(4) && str.charAt(1) == str.charAt(3)) 
        {
            count++;
        }
        else if (str.charAt(0) == str.charAt(3) && str.charAt(1) == str.charAt(4)) 
        {
            count++;
        }
        else if(str.charAt(0) == str.charAt(1) && str.charAt(3) == str.charAt(4))
        {
            count++;
        }
    }
    return count;
}

LuckyCounter(["12:21", "11:10"]);    
               


//http://community.topcoder.com/stat?c=problem_statement&pm=1692


SRM 212


function Yahtzee(arr) {
    var map = {};
    for (var i = 0; i < arr.length; i++) 
    {
        if(!map[arr[i]]) 
        {
            map[arr[i]] = 1;
        }
        else
        {
            map[arr[i]]++;
        }
    }
    var max = 0;
    for (var e in map) 
    {
        if ((e * map[e]) > max) 
        {
            max = e * map[e];    
        }   
    }
    return max;
}

Yahtzee([5, 3, 5, 3, 3]);



//http://community.topcoder.com/stat?c=problem_statement&pm=11813

SRM 561

function FoxAndVacation(total, arr) {
    arr.sort(function(a, b){return a-b});
    console.log(arr);
		var count = 0;
		for (var i = 0; i < arr.length; i++)
		{
			if (arr[i] <= total)
			{
				count++;
				total = total - arr[i];
			}
			else break;
		}
		return count;
	}

FoxAndVacation(10,[7,1,5,6,1,3,4]);



//http://community.topcoder.com/stat?c=problem_statement&pm=12424

SRM 570


function Chopsticks(arr) {
   var map = {};
   var res = 0;
   for (var i = 0; i < arr.length; i++) 
   {
       if (!map[arr[i]]) 
       {
            map[arr[i]] = 1;
       }
       else
       {
            map[arr[i]]++;   
       }
   }   
   
   for (var e in map) {
       if (Math.floor(map[e] % 2) === 0) {
            res = res + (map[e]/2);
            console.log(map[e]);
        }
        else
        {
            res = res + (map[e]-1)/2;
        }
    }
       
    return res;
}

Chopsticks([1,2,3,2,1,2,3,2,1]);



//http://community.topcoder.com/stat?c=problem_statement&pm=5879




function AimToTen(arr) {
    var total = 0;
    var count = 0;
    
    for (var i = 0; i < arr.length; i++) 
    {
        total = total + arr[i];
    }

    while(true) 
    {
        if ((total/(arr.length+count)) >= 9.5)
            break;
        else    
        {
            total = total + 10;
            count++;
        }
    }
    return count;
}

AimToTen([9, 10, 10, 9]);