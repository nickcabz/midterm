var disp = document.getElementById("disp");


function ud(n){
	disp.innerHTML += n;
}

function ans(){
	c=eval(disp.innerHTML);
	disp.innerhtml=c;
}

function clc(){
disp.innerHTML='';
}

document.getElementsById('1').addEventListener("click", function() { ud(1); });
document.getElementsById('2').addEventListener("click", function() { ud(2); });
document.getElementsById('3').addEventListener("click", function() { ud(3); });
document.getElementsById('4').addEventListener("click", function() { ud(4); });
document.getElementsById('5').addEventListener("click", function() { ud(5); });
document.getElementsById('6').addEventListener("click", function() { ud(6); });
document.getElementsById('7').addEventListener("click", function() { ud(7); });
document.getElementsById('8').addEventListener("click", function() { ud(8); });
document.getElementsById('9').addEventListener("click", function() { ud(9); });
document.getElementsById('0').addEventListener("click", function() { ud(0); });

document.getElementsById('dec').addEventListener("click", function() { ud('.');});

document.getElementsById('add').addEventListener("click", function() { ud('+');});
document.getElementsById('subt').addEventListener("click", function() { ud('-');});
document.getElementsById('multi').addEventListener("click", function() { ud('*');});
document.getElementsById('div').addEventListener("click", function() { ud('/');});

document.getElementsById('clear').addEventListener("click", function() { clc();});
document.getElementsById('ans').addEventListener("click", function() { ans();});



