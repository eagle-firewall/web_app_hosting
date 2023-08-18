function add(){
    var no1=Number(document.getElementById('w').value);
    var no2=Number(document.getElementById('x').value);
    document.getElementById('result').innerHTML=no1 + no2;
}
function sub(){
    var no1=Number(document.getElementById('w').value);
    var no2=Number(document.getElementById('x').value);
    document.getElementById('result').innerHTML=no1 - no2;
}
function mul(){
    var no1=Number(document.getElementById('w').value);
    var no2=Number(document.getElementById('x').value);
    document.getElementById('result').innerHTML=no1 * no2;
}
function div(){
    var no1=Number(document.getElementById('w').value);
    var no2=Number(document.getElementById('x').value);
    document.getElementById('result').innerHTML=no1 / no2;
}

