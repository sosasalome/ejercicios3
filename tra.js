var array=[];
var i=0;
var	mayor;
var a=document.getElementById('entrada');
function fingresa(){
	if(i<5)
	{
		if (i==0){
			mayor=parseInt(a.value);
		}
		else if(a.value>mayor)
		{
			mayor=parseInt(a.value);
		}
		console.log(mayor);
		i+=1;
		array[i]=a.value;
	}
		
}

function fmostrar()
{
	document.getElementById('resultado').value=mayor;
}