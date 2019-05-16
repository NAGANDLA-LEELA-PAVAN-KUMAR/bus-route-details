/*
	Array will define as follows:
	index position 0 : Bus Route Number
	index position 1 : Origin Point
	index position 2 : Destination Point
	index position 3 : Intermediate Stations
*/

window.onload = function(){

	addBusStops();

}

var busstops_available = ['KONDAPALLI', 'IBRAHIMPATNAM', 'SWATHI THEATRE','MILK PROJECT', 'SAIRAM THEATRE', 'CHOLERA HOSPITAL',
							'KABELA', 'SITARA', 'CHITTI NAGAR', 'K.B.N COLLEGE', 'FISH MARKET', 'PANJA CENTRE', 'RAILWAY STATION', 'K.R.MARKET', 'PANDIT NEHRU BUS STAND'
							];


var items = [
  ['5','KABELA','RAILWAY STATION','KABELA, SITARA, CHITTI NAGAR, K.B.N COLLEGE, FISH MARKET, PANJA CENTRE, RAILWAY STATION'],
  ['3','KABELA','PANDIT NEHRU BUS STAND','KABELA, SITARA, CHITTI NAGAR, K.B.N COLLEGE, FISH MARKET, PANJA CENTRE, RAILWAY STATION, K.R.MARKET, PANDIT NEHRU BUS STAND'],
  ['11','MILK PROJECT','K.R.MARKET','MILK PROJECT, SAIRAM THEATRE, CHOLERA HOSPITAL, CHITTI NAGAR, K.B.N COLLEGE, FISH MARKET, PANJA CENTRE, RAILWAY STATION'],
  ['144','KONDAPALLI','PANDIT NEHRU BUS STAND','KONDAPALLI, IBRAHIMPATNAM, SWATHI THEATRE, SITARA, CHITTI NAGAR, K.B.N COLLEGE, FISH MARKET, PANJA CENTRE, RAILWAY STATION, K.R.MARKET, PANDIT NEHRU BUS STAND']
];

function addBusStops(){

	var optionsStr = "<option value='-1'>--SELECT--</option>";

	var i = 0;

	for(i=0;i<busstops_available.length;i++){

		optionsStr += "<option value='"+busstops_available[i]+"'>"+busstops_available[i]+"</option>";

	}

	document.getElementById("startLoc").innerHTML = optionsStr;
	document.getElementById("endLoc").innerHTML = optionsStr;

}

function getBusRoutes(){

	var startLoc = document.getElementById("startLoc").value;
	var endLoc = document.getElementById("endLoc").value;	

	if(startLoc == -1 || endLoc == -1){
		alert("Please Choose both Source and Destination bus stops");
		return;
	}

	if(startLoc === endLoc){
		alert("Source and Destination should not be same");
		return;
	}

	var i = 0;

	for(i=0;i<items.length;i++){

		var busRoute = items[i];

		if(busRoute[3].indexOf(startLoc) > -1 && busRoute[3].indexOf(endLoc) > -1){

			displayRoute(i);	

		}

	}

}

function displayRoute(i){

	var table = document.getElementById("resTable");

	var tblNewRow = "<tr><td>"+items[i][0]+"</td><td>"+items[i][1]+"</td><td>"+items[i][2]+"</td><td>"+items[i][3]+"</td></tr>";

	table.innerHTML = table.innerHTML+tblNewRow; 

}

/*var villages=new Array("1","2","3","4","5","6","7");
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
}*/