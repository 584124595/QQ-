var ulLi = document.getElementById("ul").getElementsByTagName("li");
var olLi=document.getElementById("ol").getElementsByTagName("li")
var index = 0;
var timer = setInterval(fun,4000);
function fun() {
	ulLi[index].style.display = "none";
	olLi[index].setAttribute("id","");
	index++;
	if(index == 3) {
		index = 0;
	}
	ulLi[index].style.display = "block";
	olLi[index].setAttribute("id","active");
}
var a;
for(var i=0;i<olLi.length;i++){
	olLi[i].index=i;
	olLi[i].onmouseover=function(e){
		clearInterval(timer);
		a=this.index;
		console.log(a);
		for(var j=0;j<olLi.length;j++){
			olLi[j].setAttribute("id","");
		}
		for(var k=0;k<ulLi.length;k++){
			ulLi[k].style.display="none";
			olLi[a].setAttribute("id","active");
			ulLi[a].style.display="block";
		}
	}
}
