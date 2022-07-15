const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);

//Variáveis de Controle de interface
let seuVotoPara = c('#seuVotoPara span');
let cargoCandidato = c('#cargoCandidato');
let numeros = c('#numeros');
let nomeCandidato = c('#nomeCandidato span');
let partido = c('#partido span');
let aviso = c('.aviso span');
let imagemCandidato = c('#telaTopRight');
let nomeImagemCandidato = c('#telaTopRight span');
let legendaConfirmar = c('#telaBotton');
let noPermitido = c('#noPermitido')


let resultadoNaTela = c('footer div');
//Cadastro de Informações Utilizadas
let cadastroCandidatos = [
    {
        titulo: 'LAVADOR DE LOUÇA',
        qnumeros: 2,
        candidatos: [
            {
                numero: '08',
                nome: 'Adrian Perote',
                partido: 'DasCrianças',
                foto:'adrian.jpg',
                legenda: 'Adrian',
                votado: 0
            },
            {
                numero: '01',
                nome: 'Quilion Oliveira',
                partido: 'DosProgramadores',
                foto: 'quilion.jpg', 
                legenda: 'QuiLindo',
            },
            {
                numero: '19',
                nome: 'Bruna Magalhães',
                partido: 'DasGrávidas',
                foto:'bruna.jpg', 
                legenda: 'Bruna Linda',
            },
            {
                numero: '02',
                nome: 'Richarle Gonçalves',
                partido: 'DosFotógrafos',
                foto: 'richarle.jpg', 
                legenda: 'RQ',
            },
            {
                numero: '15',
                nome: 'Quileana Oliveira',
                partido: 'DasProfessoras',
                foto: 'quileana.jpg', 
                legenda: 'Tia Qui',
            },
            {
                numero: '26',
                nome: 'Quileabe Oliveira',
                partido: 'DosOuvidores',
                foto: 'quileabe.jpg', 
                legenda: 'QuiOuve',
            },
            {
                numero: '03',
                nome: 'Elifelete Alves',
                partido: 'DasGrávidas',
                foto:'elifelete.jpg', 
                legenda: 'Tia Eli',
            },
            {
                numero: '10',
                nome: 'Juscilane',
                partido: 'DosQuiCaminham',
                foto: 'juscilane.jpg', 
                legenda: 'Qui Caminha',
            },
            {
                numero: '12',
                nome: 'Neuma Batista',
                partido: 'DasCostureiras',
                foto: 'neuma.jpg', 
                legenda: 'Vovó Linda',
            },
        ]
    },
    {
        titulo: 'SECADOR DE LOUÇA',
        qnumeros: 4,
        candidatos: [
            {
                numero: '2018',
                nome: 'Adrian Perote',
                partido: 'DasCrianças',
                foto:'adrian.jpg',
                legenda: 'Adrian',
            },
            {
                numero: '1994',
                nome: 'Quilion Oliveira',
                partido: 'DosProgramadores',
                foto: 'quilion.jpg', 
                legenda: 'QuiLindo',
                votado: 0
            },
            {
                numero: '1988',
                nome: 'Bruna Magalhães',
                partido: 'DasGrávidas',
                foto:'bruna.jpg', 
                legenda: 'Bruna Linda',
            },
            {
                numero: '1986',
                nome: 'Richarle Gonçalves',
                partido: 'DosFotógrafos',
                foto: 'richarle.jpg', 
                legenda: 'RQ',
            },
            {
                numero: '1989',
                nome: 'Quileana Oliveira',
                partido: 'DasProfessoras',
                foto: 'quileana.jpg', 
                legenda: 'Tia Qui',
            },
            {
                numero: '1987',
                nome: 'Quileabe Oliveira',
                partido: 'DosOuvidores',
                foto: 'quileabe.jpg', 
                legenda: 'QuiOuve',
            },
            {
                numero: '1990',
                nome: 'Elifelete Alves',
                partido: 'DasGrávidas',
                foto:'elifelete.jpg', 
                legenda: 'Tia Eli',
            },
            {
                numero: '1964',
                nome: 'Juscilane',
                partido: 'DosQuiCaminham',
                foto: 'juscilane.jpg', 
                legenda: 'Qui Caminha',
            },
            {
                numero: '1965',
                nome: 'Neuma Batista',
                partido: 'DasCostureiras',
                foto: 'neuma.jpg', 
                legenda: 'Vovó Linda',
            },
        ]
    }
];

//Variáveis de Ambiente
let etapaAtual = 0;
let numeroclicado = '';
let votoBranco = true;
let votosLavador = [];
let votosSecador = [];

let testecontadorVotosSecador = [
    {voto: '1994'},
    {voto: '1994'},
    {voto: '1989'},
    {voto: 'Branco'},
    {voto: '1234'}
]
let testecontadorVotosLavador = [
    {voto: '08'},
    {voto: '08'},
    {voto: '01'},
    {voto: 'Branco'},
    {voto: '00'}
];

function comecandoEtapas() {
    let etapa = cadastroCandidatos[etapaAtual];
    
    numeroclicado = '';
    votoBranco = false;

    let numerosQueAparecem = '';
    
    for(let i = 0; i < etapa.qnumeros; i++) {
        if(i === 0) {
            numerosQueAparecem += '<span class="piscar"></span>';
        }else {
            numerosQueAparecem += '<span class=""></span>';
        }
    }
    seuVotoPara.style.display = 'none';
    cargoCandidato.innerHTML = etapa.titulo;
    nomeCandidato.innerHTML = '';
    partido.innerHTML = '';
    aviso.innerHTML = '';
    imagemCandidato.style.display = 'none';
    nomeImagemCandidato.innerHTML = '';
    legendaConfirmar.style.display = 'none';
    numeros.innerHTML = numerosQueAparecem;
}   

function atualizandoInterface() {
    let etapa = cadastroCandidatos[etapaAtual];
    let verificandoCandidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numeroclicado) {
            return true;
        }else {
            return false;
        }
    });
    if(verificandoCandidato.length > 0) {
        verificandoCandidato = verificandoCandidato[0];
        seuVotoPara.style.display = 'flex';
        nomeCandidato.innerHTML = `Nome: ${verificandoCandidato.nome}`;
        partido.innerHTML = `Partido: ${verificandoCandidato.partido}`;
        legendaConfirmar.style.display = 'flex';
        imagemCandidato.style.display = 'flex';
        imagemCandidato.innerHTML = `<div id="telaTopRight"><img src="./images/${verificandoCandidato.foto}"><span>${verificandoCandidato.legenda}</span></div>`;
    }else {
        seuVotoPara.style.display = 'flex';
        aviso.innerHTML = 'VOTO NULO';
        aviso.classList.add('piscar');
    }
}

function clicou(n) {
    let clicandoNoNumero = c('.piscar');

    if(clicandoNoNumero !== null) {
        clicandoNoNumero.innerHTML = n;
        numeroclicado = `${numeroclicado}${n}`;
        clicandoNoNumero.classList.remove('piscar');
        if(clicandoNoNumero.nextElementSibling !== null) {
            clicandoNoNumero.nextElementSibling.classList.add('piscar');
        }else {
            atualizandoInterface();
        }
    }
}

function branco() {
    if(numeroclicado === '') {
        votoBranco = true;
        seuVotoPara.style.display = 'flex';
        legendaConfirmar.style.display = 'flex';
        numeros.innerHTML =  '';
        aviso.innerHTML = 'VOTO EM BRANCO';
        aviso.classList.add('piscar');
    }else {
        noPermitido.style.display = 'flex';
    }
}

function fechar() {
    noPermitido.style.display = 'none';
}

function corrige() {
    comecandoEtapas();
}

function confirma() {
    let etapa = cadastroCandidatos[etapaAtual];
    let votoConfirmado = false;

    if(votoBranco === true) {
        if(cadastroCandidatos[etapaAtual].titulo === 'LAVADOR DE LOUÇA') {
            votosLavador.push({voto: 'Branco'});
        } else if(cadastroCandidatos[etapaAtual].titulo === 'SECADOR DE LOUÇA') {
            votosSecador.push({voto: 'Branco'});
        }
        votoConfirmado = true;
        
    }else if(numeroclicado.length === etapa.qnumeros) {
        if(cadastroCandidatos[etapaAtual].titulo === 'LAVADOR DE LOUÇA') {
            votosLavador.push({voto: numeroclicado});
        } else if(cadastroCandidatos[etapaAtual].titulo === 'SECADOR DE LOUÇA') {
            votosSecador.push({voto: numeroclicado});
        }
        votoConfirmado = true;
    }

    if(votoConfirmado) {
        etapaAtual++;
        if(cadastroCandidatos[etapaAtual] !== undefined) {
            comecandoEtapas();
        }else {
            let tela = c('#tela');
            let fim = c('#fim');
            tela.style.display = 'none';
            fim.style.display = 'flex';
        }
    }
}

function novoVoto() {
    etapaAtual = 0;
    tela.style.display = 'flex';
    fim.style.display = 'none';
    comecandoEtapas() 
}

function qntVotos () { 
   //Para saber quantos votos foram feitos
   let qntVotosLav = 0;
   let qntVotosSec = 0;
   votos.map((item)=>{
    if(item.etapa === 'LAVADOR DE LOUÇA') {
        qntVotosLav++;
    }else if(item.etapa === 'SECADOR DE LOUÇA') {
        qntVotosSec++;
    }
   });
   resultadoNaTela.innerHTML = `Etapa: LAVADOR DE LOUÇA <br> Quantidade de Votos: ${qntVotosLav}<br>Etapa: SECADOR DE LOUÇA <br> Quantidade de Votos: ${qntVotosSec}`;
}

function contadorResultado() {
    let contandoVotosLavador = votosLavador.reduce((accumulator, { voto }) => {
        accumulator[voto] = accumulator[voto] + 1 || 1
        return accumulator
    }, {})
    let contandoVotosSecador = votosSecador.reduce((accumulator, { voto }) => {
        accumulator[voto] = accumulator[voto] + 1 || 1
        return accumulator
    }, {})
    console.log(contandoVotosLavador);
    console.log(contandoVotosSecador);
}

function resultado() {
    /*
    Procurando com for
    for(let i in testecontadorVotosLavador) {
        if(testecontadorVotosLavador[i].voto === 'Branco'){
            console.log('deu aqui')
        }
    }
    */
   // Procurando com filter
    testecontadorVotosLavador.filter(item => {
        if(item.voto === 'Branco') {
            console.log('deu bom aqui')
        }
    })
   

    /*cadastroCandidatos.filter(item => {
        item.candidatos.filter(item => {
            console.log(item.numero)
        })
    })*/
    console.log(testecontadorVotosLavador);
    console.log(testecontadorVotosSecador);
}

comecandoEtapas() 