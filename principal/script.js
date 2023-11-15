// Função para embaralhar um array (Fisher-Yates shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Lista de contextos do jogo
const contextosDoJogo = [
    { 
        palavras: ["palavra1", "palavra2", "palavra3", "palavra4"], 
        titulo: "Título do Contexto 1",
        descricao: "Descrição do contexto 1" 
    },
    { 
        palavras: ["palavra5", "palavra6", "palavra7", "palavra8"], 
        titulo: "Título do Contexto 2",
        descricao: "Descrição do contexto 2" 
    },
    { 
        palavras: ["palavra9", "palavra10", "palavra11", "palavra12"], 
        titulo: "Título do Contexto 3",
        descricao: "Descrição do contexto 3" 
    },
    { 
        palavras: ["palavra13", "palavra14", "palavra15", "palavra16"], 
        titulo: "Título do Contexto 4",
        descricao: "Descrição do contexto 4" 
    }
];

// Embaralha os contextos
shuffleArray(contextosDoJogo);

// Lista para armazenar as palavras selecionadas
let palavrasSelecionadas = [];

// Função chamada ao clicar em uma palavra disponível
function selecionarPalavra(palavra) {
    const palavraElement = document.getElementById(`btn${palavra}`);

    // Se a palavra já formou um contexto, não faz nada
    if (palavraElement.classList.contains('palavra-btn-contexto')) {
        return;
    }

    // Adiciona a classe de seleção para destacar a palavra
    palavraElement.classList.toggle('palavra-btn-selected');

    // Adiciona ou remove a palavra da lista de palavras selecionadas
    const index = palavrasSelecionadas.indexOf(palavra);
    if (index === -1) {
        palavrasSelecionadas.push(palavra);
    } else {
        palavrasSelecionadas.splice(index, 1);
    }

    // Se já houver 4 palavras selecionadas, verifica o contexto
    if (palavrasSelecionadas.length === 4) {
        // Faz uma cópia das últimas 4 palavras selecionadas
        const ultimasQuatroSelecionadas = palavrasSelecionadas.slice(-4);

        const contextoEncontrado = verificaContexto(ultimasQuatroSelecionadas, contextosDoJogo);

        // Se formou um contexto, cria um card com a descrição e as palavras
        if (contextoEncontrado) {
            const cardContexto = document.createElement('div');
            cardContexto.className = 'card-contexto';
            
            // Adiciona o título específico do contexto
            const tituloElement = document.createElement('h2');
            tituloElement.textContent = contextoEncontrado.titulo;
            cardContexto.appendChild(tituloElement);

            
            // Adiciona a descrição
            const descricaoElement = document.createElement('p');
            descricaoElement.textContent = contextoEncontrado.descricao;
            cardContexto.appendChild(descricaoElement);
            
            // Adiciona as palavras ao card do contexto
            contextoEncontrado.palavras.forEach(palavra => {
                const palavraElement = document.getElementById(`btn${palavra}`);
                palavraElement.classList.add('palavra-btn-contexto');
                cardContexto.appendChild(palavraElement);
            });
            
            // Adiciona o card do contexto ao topo do elemento de contextos
            document.getElementById('contextos').insertBefore(cardContexto, document.getElementById('contextos').firstChild);            
        } else {
            // Se não formou um contexto, faz os últimos 4 botões piscarem em vermelho
            ultimasQuatroSelecionadas.forEach(palavra => {
                const palavraElement = document.getElementById(`btn${palavra}`);
                palavraElement.classList.add('palavra-btn-error');
            });

            // Define um timeout para remover a classe de erro após 500 milissegundos (meio segundo)
            setTimeout(() => {
                ultimasQuatroSelecionadas.forEach(palavra => {
                    const palavraElement = document.getElementById(`btn${palavra}`);
                    palavraElement.classList.remove('palavra-btn-error');
                });
            }, 500);
        }

        // Limpa a lista de palavras selecionadas
        palavrasSelecionadas.forEach(palavra => {
            const palavraElement = document.getElementById(`btn${palavra}`);
            palavraElement.classList.remove('palavra-btn-selected');
        });
        palavrasSelecionadas = [];
    }
}

// Função para verificar se 4 palavras fazem parte do contexto
function verificaContexto(palavrasSelecionadas, contextos) {
    // Verifica se cada conjunto de palavras forma um contexto
    return contextos.find(contexto => palavrasSelecionadas.every(palavra =>         contexto.palavras.includes(palavra)));
}

// Inicializa os botões com as palavras disponíveis
const palavrasDisponiveisElement = document.getElementById('palavrasDisponiveis');
const palavrasTodas = contextosDoJogo.flatMap(contexto => contexto.palavras);
shuffleArray(palavrasTodas);
palavrasTodas.forEach(palavra => {
    const botaoPalavra = document.createElement('button');
    botaoPalavra.textContent = palavra;
    botaoPalavra.id = `btn${palavra}`;
    botaoPalavra.className = 'palavra-btn';
    botaoPalavra.onclick = () => selecionarPalavra(palavra);
    palavrasDisponiveisElement.appendChild(botaoPalavra);
});

// Se formou um contexto, cria um card com a descrição e as palavras
const contextoEncontrado = verificaContexto(palavrasTodas.slice(0, 4), contextosDoJogo);
if (contextoEncontrado) {
    const cardContexto = document.createElement('div');
    cardContexto.className = 'card-contexto';

    // Adiciona o título
    const tituloElement = document.createElement('h2');
    tituloElement.textContent = 'Título do Contexto';
    cardContexto.appendChild(tituloElement);

    // Adiciona as palavras ao card do contexto
    contextoEncontrado.palavras.forEach(palavra => {
        const palavraElement = document.getElementById(`btn${palavra}`);
        palavraElement.classList.add('palavra-btn-contexto');
        cardContexto.appendChild(palavraElement);
    });

    // Adiciona a descrição
    const descricaoElement = document.createElement('p');
    descricaoElement.textContent = contextoEncontrado.descricao;
    cardContexto.appendChild(descricaoElement);

    // Adiciona o card do contexto ao topo do elemento de contextos
    document.getElementById('contextos').insertBefore(cardContexto, document.getElementById('contextos').firstChild);
}

