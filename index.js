"use strict"

// iniciando controle do zoom
let zoons = [],
    zoomAtual = 2,
    mapa = document.getElementById("imgPrincipal")

for(let i=2; ++i<=28;){
    zoons.push(4*i);
}

function alterarZoom(tipo){
    if(tipo){
        if(zoomAtual<12) zoomAtual++;
        mapa.style.zoom = zoons[zoomAtual]+"%";
    }else{
        if(zoomAtual>0) zoomAtual--;
        mapa.style.zoom = zoons[zoomAtual]+"%";
    }
}

// terminando o controle do zoom


// iniciando "scroll" usando apenas o mouse

let liberado = 0,
    mouse;

const CONTROLE = document.getElementById("mapaContent");

function mover(evento){
    if(!mouse){
        mouse=[evento.offsetX, evento.offsetY];
    }else{
        let novoMouse=[evento.offsetX, evento.offsetY],
            posicao=[CONTROLE.scrollLeft, CONTROLE.scrollTop];
        if((novoMouse[0]-mouse[0]>30 || novoMouse[0]-mouse[0]<-30) && (novoMouse[1]-mouse[1]>60 || novoMouse[1]-mouse[1]<-60)){
            mouse=0;
            return;
        }
        CONTROLE.scroll(posicao[0]-(novoMouse[0]-mouse[0]), posicao[1]-(novoMouse[1]-mouse[1]));
    }
}

// terminadno "scroll" usando apenas o mouse

// função temporária
function verDados(local){
    for(let i in local){
        if(typeof local[i] != "object" && typeof local[i] != "function") console.log(i+" -> "+local[i]);
    }
}


// iniciando display de conteudo
let divLateral=document.getElementById("divLateral");
    
function mostrarInformacoes(edificio){
    while(divLateral.children.length){
        divLateral.children[0].remove();
    }
    divLateral.innerHTML = MAPAS_CONTENT[edificio];
}

// fim do displáy de conteudo

function mostrar(qual){
    const contents = [
        `<h2 id='mostrar1' onclick="swithTo(this)">construção</h2>
        <div id='content1' style="display: none">
            <p>testetestetestetestetestetestetestetestetestetestetestetestetesteteste</p>
            <img src="img\\exemplos\\1.jpg">
        </div>`
    ],
        id = document.getElementById('divLateral');
    id.innerHTML = contents[qual]
    if(id.className=='fixar mostrarContent'){
        id.className = 'puxarInvertido';
        setTimeout(() => {
            id.className = '';
            id.innerHTML = '';
        }, 990);
    } else {
        id.className = 'puxarNormal';
        setTimeout(() => {
            id.className = 'fixar animarContent';
        }, 990);
        setTimeout(() => {
            id.className = 'fixar mostrarContent';
        }, 1990);
    }
}

let qual = 1

function trocarMapa(){
    if(qual){
        qual--;
        mapa.src = "img/mapaPrincipal.png";
    }else{
        qual++;
        mapa.src = "img/mapaPrincipal.webp";
    }
}


function swithTo(clique){
    let quais = ['content1'],
        h = {"mostrar1":0},
        elemento = document.getElementById(quais[h[clique.id]]);
    elemento.style.display = (elemento.style.display==='inline')?'none':'inline';
}