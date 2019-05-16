var villages=new Array("1","2","3","4","5","6","7");
                   villages[0]=Array("Vijayawada","Narsaraopet","Kurnool","Ananthapur","1");
                   villages[1]=Array("Vijayawada","Eluru","Rajamandry","Kakinada","2");
	villages[2]=Array("Vijayawada","Guntur","","","3");
	villages[3]=Array("Vijayawada","Vallurupalem","Doolipudipalem","Srikakulam","4");
	villages[4]=Array("Vijayawada","Ganavaram","Hanuman Junction","Eluru","5");
	villages[5]=Array("Vijayawada","Guntur","Narasaraopet","Kurnool","6");
	villages[6]=Array("Vijayawada","Eluru","Rajamundry","Visakhapatnam","7");
function change(){
	document.getElementById("tb").style.visibility = "visible";
   	var slt=document.getElementById("slt");
                    var str=slt.options[slt.selectedIndex].value-1;
                  	//alert(villages[str]);
                    document.getElementById("val1").innerHTML=villages[str][0];
	document.getElementById("val2").innerHTML=villages[str][1];
	document.getElementById("val3").innerHTML=villages[str][2];
	document.getElementById("val4").innerHTML=villages[str][3];
	document.getElementById("pltno").innerHTML=villages[str][4];
}