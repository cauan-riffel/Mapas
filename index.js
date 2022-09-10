"use strict"

// iniciando controle do zoom
let zoons = [],
    zoomAtual = 0,
    mapa = document.getElementById("imgPrincipal")

for(let i=0; ++i<=20;){
    zoons.push(12.5*i);
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

const MAPAS_CONTENT=[
        "<p>algum texto ai</p>\
        <p>sei lá</p>\
        ", "\
        <p>algum texto vai</p>\
        <p>sei lá tche</p>"
    ];

let divLateral=document.getElementById("divLateral");
    
function mostrarInformacoes(edificio){
    while(divLateral.children.length){
        divLateral.children[0].remove();
    }
    divLateral.innerHTML = MAPAS_CONTENT[edificio];
}