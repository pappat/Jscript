balTomb=["matematika", "fizika", "foldrajz", "irodalom", "fenykepeszet","irodalom"];
jobbTomb=["sieles", "bringazas", "kerteszkedes", "turazas", "uszas"];

window.addEventListener("load", init);

function init(){
    listAktualizalas("balLista", balTomb); //ballista aktualizásása a bal tömbből kerül bele
    listAktualizalas("jobbLista", jobbTomb);
    document.addEventListener("click",attesz);
}
 
function listAktualizalas(listaId, tomb){
    tomb.sort();
    document.getElementById(listaId).innerHTML=tomb.reduce((s,e)=> s+`<option>${e}</option>` ,"")
    document.getElementById(listaId).size=tomb.length;
}


function attesz(e) {
    console.log(e.target);
    console.log(e.target.tagName)
    if(e.target.tagName=="INPUT"){
        if(e.target.id=="balraGomb" && (index=document.getElementById("jobbLista").selectedIndex)>-1){
                let kivalosztottOpcio=document.getElementById("jobbLista")[index].text;
                console.log("kiválasztott: "+kivalosztottOpcio);
                balTomb.push(kivalosztottOpcio);
                jobbTomb=jobbTomb.filter(e=>e!=kivalosztottOpcio);
            }
        if(e.target.id=="jobbraGomb" && (index=document.getElementById("balLista").selectedIndex)>-1){
                let kivalosztottOpcio=document.getElementById("balLista")[index].text;
                console.log("kiválasztott: "+kivalosztottOpcio);
                jobbTomb.push(kivalosztottOpcio);
                balTomb=balTomb.filter(e=>e!=kivalosztottOpcio);
            }
            listAktualizalas("balLista", balTomb); 
            listAktualizalas("jobbLista", jobbTomb);
    }
}