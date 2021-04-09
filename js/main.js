console.log("Js file linked")

const manArray=[
    "<p>Jiaxu Liu</p>     <p>1998.11.28</p>     <p>Chinese</p>     <p>Designer & Developer</p>     <p>Study IDP 1 year</p>     <p>Movies & Poems<p>     <p>“My love,</p>    <p>you’re the unsolved wave, </p><p>I’m the naked island.&quot;</p>"
    ,
    "<p>SUPERMAN</p>     <p>1938.06.15<p>     <p>DC </p><p>Hero & Killer<p>    <p>Super Flare<p>      <p>Invulnerability<p>      <p>“People are afraid of <p>    <p>what they don’t <p>     <p>understand.<p>"
]

var btnMe=document.getElementById("btnMe");
var btnSUPER=document.getElementById("btnSUPER");
var showSupperMan=document.getElementById("showSupperMan");
var showMe=document.getElementById("showMe");
btnMe.addEventListener("click" ,function(){
    showMe.innerHTML=manArray[0];
    showMe.style.display="block";
});

btnSUPER.addEventListener("click" ,function(){
    showSupperMan.innerHTML=manArray[1];
    showSupperMan.style.display="block";
});