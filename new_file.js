var num=[];
var op=[];
var iu=document.getElementById("jieguo");
function getnum(e){
	console.log(e.id);
	num.push(e.id);
	
	console.log(num);
	iu.value=iu.value+e.id;
}
function getfu(e){
	var one=iu.value;
	num=[];
	num.push(iu.value);
	op.push(e.id)
	
}
function answer(e){
	switch(op[0]){
		case"jia":
		answer=Number(num[0])+Number(num[1]);
		break;
		case"jian":
		answer=num[0]-num[1];
		break;
		break;
		case"cheng":
		answer=num[0]*num[1];
		break;
		break;
		case"chu":
		answer=num[0]/num[1];
		break;
	}
	var jieguo=document.getElementById("jieguo");
	jieguo.value=answer;
}