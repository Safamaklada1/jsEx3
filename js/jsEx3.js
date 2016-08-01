//start of part one
var nums=[2,4,6,8,10,12,14,16,18,20];
document.write(nums+"<br>");
// end of part one 
//start of part two
document.write(nums.length+"<br>");
// end of part two 
//start of part three
document.write(nums[0]+",",nums[2]+",",nums[5]+","+"<br>");
// end of part three 
//start of part four
document.write(nums.indexOf(10)+"<br>");
// end of part four 
//start of part five
nums.splice(8,2);
document.write(nums+"<br>");
// end of part five 
//start of part six
var numsname=[2,"two",4,"four",6,"six",8,"eight"+"<br>"];
document.write(numsname+"<br>");
// end of part six 
//start of part seven

var students=["safa","ali","wafi"];
// var students=[];
students[0]="safa";
students[1]="ali";
students[2]="wafi";

var safa={eyesColor:"green",name:"safa",height:176+'cm'};
var ali={eyesColor:"black",name:"ali",height:180+'cm'};
var wafi={eyesColor:"brown",name:"wafi",height:178+'cm'};
document.write("<br>"+"safa"+"<br>"+"eyesColor: "+safa.eyesColor);
document.write("<br>"+"name: "+safa.name);
document.write("<br>"+"height: "+safa.height);
document.write("<br>"+"<br>"+"ali"+"<br>"+"eyesColor: "+ali.eyesColor);
document.write("<br>"+"name: "+ali.name);
document.write("<br>"+"height: "+ali.height);
document.write("<br>"+"<br>"+"wafi"+"<br>"+"eyesColor: "+wafi.eyesColor);
document.write("<br>"+"name: "+wafi.name);
document.write("<br>"+"height: "+wafi.height);
// end of part seven 
//start of part eight
students.shift();
document.write("<br>"+"<br>"+students);
// end of part eight 
//start of part nine
students.unshift("dotan");
document.write("<br>"+"<br>"+students);
var dotan={eyesColor:"blue",name:"dotan",height:182+'cm'};
document.write("<br>"+"<br>"+"dotan"+"<br>"+"eyesColor: "+dotan.eyesColor);
document.write("<br>"+"name: "+dotan.name);
document.write("<br>"+"height: "+dotan.height);
document.write("<br>"+"<br>"+"ali"+"<br>"+"eyesColor: "+ali.eyesColor);
document.write("<br>"+"name: "+ali.name);
document.write("<br>"+"height: "+ali.height);
document.write("<br>"+"<br>"+"wafi"+"<br>"+"eyesColor: "+wafi.eyesColor);
document.write("<br>"+"name: "+wafi.name);
document.write("<br>"+"height: "+wafi.height);
// end of part nine 
//start of part ten
var dotan={face:"",name:"dotan",height:182+'cm'};
var face={eyesColor:"blue"};
var ali={face:"",name:"ali",height:180+'cm'};
var face={eyesColor:"black"};
var wafi={face:"",name:"wafi",height:178+'cm'};
var face={eyesColor:"brown"};
// end of part ten