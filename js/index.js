const personagem = document.querySelectorAll('.personagem')
personagem.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        if(window.innerWidth < 450){
            window.scrollTo({top:0, behavior: 'smooth'})
        }
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado');

        const imagemPersonagem = document.querySelector('.personagem-grande')

        const IdPersonagem = personagem.attributes.id.value;
        imagemPersonagem.src = `./imagens/card-${IdPersonagem}.png`

        const NomePersonagem = document.getElementById('nome-personagem')

        NomePersonagem.innerText = personagem.getAttribute('data-name')

        const DescPersonagem = document.getElementById('desc-personagem')
        DescPersonagem.innerText = personagem.getAttribute ('data-description')
    })
})

