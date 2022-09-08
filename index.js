let zoons = [],
    zoomAtual = 0,
    mapa = document.getElementById("imgPrincipal")
    
document.body.addEventListener('drop', ()=>{mouse=0})

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

let liberado = 0,
    mouse

const CONTROLE = document.getElementById("mapaContent")

async function mover(evento){
    mapa.style.cursor = "pointer";
    if(!mouse){
        mouse=[evento.offsetX, evento.offsetY];
    }
    else{
        let novoMouse=[evento.offsetX, evento.offsetY],
            posicao=[CONTROLE.scrollLeft, CONTROLE.scrollTop];
        if((novoMouse[0]-mouse[0]>60 || novoMouse[0]-mouse[0]<-60) && (novoMouse[1]-mouse[1]>60 || novoMouse[1]-mouse[1]<-60)){
            mouse=0;
            mapa.style.cursor = "auto";
            return;
        }
        CONTROLE.scroll(posicao[0]-(novoMouse[0]-mouse[0]), posicao[1]-(novoMouse[1]-mouse[1]));
    }
}

function verDados(local){
    for(let i in local){
        if(typeof local[i] != "object" && typeof local[i] != "function") console.log(i+" -> "+local[i])
    }
}

