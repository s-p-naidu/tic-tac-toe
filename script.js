var c=0;
let win=false;
var a=['0','0','0','0','0','0','0','0','0'];
var h=document.getElementById("head");//for heading it is in span tag
function changetoxoro(ele,t){
    ele.innerText=t.toUpperCase();ele.className=t+'style';
}
c%2==0?changetoxoro(h,'x'):changetoxoro(h,'o');
function getIndex(ele){
    if(ele.innerText==''){
        ele.style.cursor='grabbing';
        setTimeout(function(){ele.style.cursor='grab'; },100);//for grabbing and ungrabbing
    c%2==0?changetoxoro(ele,'x'):changetoxoro(ele,'o');c++;
    a[ele.id.charAt(0)]=ele.innerText;
    console.log(a.toString());
    c%2==0?changetoxoro(h,'x'):changetoxoro(h,'o');
    checkWin();
    }
}
function checkWin(){

    for(let i=0;i<9;i=i+3)if(a[i]!='0' & a[i]==a[i+1] & a[i+1]==a[i+2]){winingalert(a[i]);return;}
    for(let i=0;i<3;i++)if(a[i]!='0' & a[i]==a[i+3] & a[i+3]==a[i+6]){winingalert(a[i]);return;}
    if((a[4]!='0') & ((a[0]==a[4] & a[4]==a[8])|(a[2]==a[4] & a[4]==a[6]))){winingalert(a[4]);return;}
    if((c==9) & (win==false)) {alert("it is a draw\nstarting new game");window.location="index.html";}
}
function winingalert(ch){
    win=true;alert(ch+" won the game\nstarting new game");window.location="index.html";
}
function buttfun(){
    var bool=confirm("Are you sure to restart the game....");
    if(bool)window.location.reload();// or window.location="index.html";
}
