window.addEventListener('DOMContentLoaded', (event) => {
    let audio = document.getElementById('background-audio');
    let botaoGerar = document.getElementsByClassName('botao-gerar')[0];
    let botaoReset = document.getElementsByClassName('botao-reset')[0];
    let fraseGerada = document.getElementById('frase-gerada');

    let frases = ['O certo é se dizer: Se cria vergonha na sua cara ! se toma um decumento ! Se cria vergonha na sua cara e vai se procurar trabalhar !',
    'O ser humano pode virar adoçante. Quer dizer, você está lá comendo um chocolate e tem um feto humano lá dentro. A Pepsi-Cola está usando células de fetos abortados como adoçante nos refrigerantes.',
    'Hei, moço, já matou uma velhinha hoje? Dessas que atravancam O meu, o seu, o nosso caminho. Hei, moço, já matou uma velhinha hoje? O pensamento lateja Na minha, na sua, na nossa cabeça. Hei, moço, já matou uma velhinha hoje?',
    'Entao eu fui, peguei e botei uma placa: A MINHA VIDA ESTA NA MAO DE DEUS, MAS A MORTE ESTA NA CAÇAMBA DO MOTORZINHO. Pior coisa que eu fiz foi ter vendido o revólver do meu marido senao eu tinha largado uma bala na cara dele[...] mas eu nao tenho raiva dele nao.',
    'Peca pepeca pepeca, até o Papa peca. Ei, Papa, levante o seu vestido. Quem sabe aí embaixo nao está o Amarildo. Feminista! Rainha do tanque...',
    'O peixe é um bicho inteligente. Quando ele vê uma manta de óleo ali, capitao, ele foge, ele tem medo. Entao, obviamente que você pode consumir seu peixinho sem problema nenhum. Lagosta, camarao, tudo perfeitamente sano.',
    'A deslegitimaçao dela em relaçao a shippada entre você e Bil: pra mim, isso é muito grave!',
    'Se esse mundo existe, graças a Deus, por que existe? Porque graças a Deus, nós, fizemos o mundo, graças a Deus. Nao, desculpe falar é, se existe nós nesse mundo, graças a Deus, é porque Deus fez o mundo. Mas eu falei uma palavra certa, se nós nao existiavavumm... mos, se nao existi... amus nós, o que que ia acontecer?',
    'Acorda, cara! 📷 Acorda, gente! 📷 Acorda! 📷 Já tamo na porra da ditadura já! 🇻🇪 📷 Já começou! Caralho! 📷 Caralho! 📷 O que... que... que... que tem que acontecer? 📷 📷 📷 Tem que sua mae 📷 ser presa 📷 📷 pra você acordar? 📷 Porra! Acorda caralho! 📷 📷 ACORDA! 📷',
    'Meu nome é Nati Natini Natili Lohane Savic De Albuquerque Pampic de La Tustuane de Bolda. Mais conhecida como Danusa Daisy Medly Leona Meiry Cibele de Bolda de Gasparri. A mulher jamais falada. A menina jamais igualada. Conhecidíssima como a noite de Paris. Poderosíssima como a espada de um samurai. Eu sou apertada como uma bacia. Eu sou enxuta como uma melancia. Tenho dois filhozinho. Um zolhudinho e o outro barrigudinho. Casei com o dono da Parmalat. Virei mamífera. Só mamo. Pertenço à família imperial brasileira Orleans e Bragança.'];


    // Adiciona evento de clique ao botão "Gerar frase" para tocar o áudio
    botaoGerar.addEventListener('click', function () {
        let numerim = Math.floor(Math.random() * 10);
        fraseGerada.innerHTML = frases[numerim];

        // Toca o áudio ao clicar no botão, garantindo a interação do usuário
        audio.play().catch((e) => {
            console.log("Erro ao tentar tocar o áudio: " + e);
        });
    });

    botaoReset.addEventListener('click', function () {
        fraseGerada.innerHTML = '';
    });
});



