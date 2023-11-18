// Função para embaralhar um array (Fisher-Yates shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Lista de todos os contextos disponíveis
const todosContextos = [
    { 
        palavras: ["Zumbi dos Palmares", "Martin Luther King", "Nelson Mandela", "Rosa Parks"], 
        titulo: "Líderes da luta pela igualdade racial.",
        descricao: "Este contexto destaca figuras históricas como Zumbi dos Palmares, Martin Luther King, Nelson Mandela e Rosa Parks, que desempenharam papéis fundamentais na luta pela igualdade racial, cada um em seu contexto histórico e geográfico." 
    },
    { 
        palavras: ["Samba", "maracatu", "capoeira", "jongo"], 
        titulo: "Expressões culturais afro-brasileiras.",
        descricao: "Aqui, são exploradas manifestações culturais enraizadas na herança afro-brasileira, como o samba, maracatu, capoeira e jongo, que desempenham um papel crucial na expressão da identidade e cultura afro-brasileira." 
    },
    { 
        palavras: ["Afrodescendente", "escravidão", "discriminação", "resistência"], 
        titulo: "História da população negra.",
        descricao: "Este contexto abrange tópicos como afrodescendência, a história da escravidão, a persistência da discriminação e as diversas formas de resistência ao longo do tempo." 
    },
    { 
        palavras: ["Pelé", "Serena Williams", "Muhammad Ali", "Simone Biles"], 
        titulo: "Figuras negras no esporte.",
        descricao: "Destacando ícones esportivos como Pelé, Serena Williams, Muhammad Ali e Simone Biles, esse contexto enfatiza as contribuições significativas de figuras negras para o mundo do esporte." 
    },
    { 
        palavras: ["Machado de Assis", "Lima Barreto", "Carolina Maria de Jesus", "Conceição Evaristo"], 
        titulo: "Literatura afro-brasileira.",
        descricao: "Exploração de obras e autores significativos da literatura afro-brasileira, como Machado de Assis, Lima Barreto, Carolina Maria de Jesus e Conceição Evaristo." 
    },
    { 
        palavras: ["Candomblé", "umbanda", "batuque", "quimbanda"], 
        titulo: "Religiões afro-brasileiras.",
        descricao: "Foca nas práticas espirituais afro-brasileiras, incluindo o Candomblé, Umbanda, Batuque e Quimbanda, destacando a diversidade e riqueza dessas tradições." 
    },
    { 
        palavras: ["Abolição", "quilombo", "ações afirmativas", "igualdade racial"], 
        titulo: "Movimentos pela justiça racial.",
        descricao: "Abrange eventos históricos como a Abolição, quilombos, ações afirmativas e a busca pela igualdade racial, contextualizando movimentos significativos na luta contra a discriminação racial." 
    },
    { 
        palavras: ["Feijoada", "acarajé", "vatapá", "afoxé"], 
        titulo: "Culinária afro-brasileira.",
        descricao: "Explora pratos típicos da culinária afro-brasileira, como feijoada, acarajé, vatapá e afoxé, destacando a influência da cultura negra na gastronomia brasileira." 
    },
    { 
        palavras: ["Ginga", "malandro", "axé", "berimbau"], 
        titulo: "Elementos da cultura afro-brasileira.",
        descricao: "Destaca elementos culturais como a ginga, malandro, axé e berimbau, que são essenciais para a expressão e preservação da cultura afro-brasileira." 
    },
    { 
        palavras: ["Soweto", "Harare", "Dakar", "Accra"], 
        titulo: "Cidades africanas.",
        descricao: "Explora algumas cidades africanas, como Soweto, Harare, Dakar e Accra, destacando a diversidade e a importância histórica dessas localidades." 
    },
    { 
        palavras: ["Preconceito", "estereótipo", "racismo", "segregação"], 
        titulo: "Desafios enfrentados pela população negra.",
        descricao: "Este contexto aborda temas como preconceito, estereótipos, racismo e segregação, destacando os desafios enfrentados pela população negra em diferentes sociedades." 
    },
    { 
        palavras: ["Angola", "Nigéria", "Senegal", "Gana"], 
        titulo: "Países africanos.",
        descricao: "Explora alguns países africanos, como Angola, Nigéria, Senegal e Gana, ressaltando suas histórias, culturas e contribuições para o cenário global." 
    },
    { 
        palavras: ["RAP", "hip-hop", "soul", "jazz"], 
        titulo: "Contribuições da cultura negra para a música.",
        descricao: "Destaca gêneros musicais como RAP, hip-hop, soul e jazz, evidenciando a rica contribuição da cultura negra para a música mundial." 
    },
    { 
        palavras: ["Alcione", "Gilberto Gil", "Elza Soares", "Milton Nascimento"], 
        titulo: "Artistas negros brasileiros.",
        descricao: "Enfoca artistas negros brasileiros como Alcione, Gilberto Gil, Elza Soares e Milton Nascimento, ressaltando suas contribuições para a música brasileira." 
    },
    { 
        palavras: ["Beleza negra", "empoderamento", "representatividade", "ancestralidade"], 
        titulo: "Aspectos positivos da identidade negra.",
        descricao: "Explora temas como beleza negra, empoderamento, representatividade e ancestralidade, destacando aspectos positivos e construtivos da identidade negra." 
    },
    { 
        palavras: ["Turbante", "trança", "crespo", "black power"], 
        titulo: "Estilos e cuidados com o cabelo afro.",
        descricao: "Este contexto abrange estilos de cabelo afro, como turbante, trança, crespo e black power, ressaltando a importância cultural e a diversidade de estilos." 
    },
    { 
        palavras: ["Palmares", "Quilombo dos Palmares", "Ganga Zumba", "Dandara"], 
        titulo: "Resistência quilombola.",
        descricao: "Foca em locais de resistência, como Palmares, Quilombo dos Palmares, Ganga Zumba e Dandara, destacando a luta contra a escravidão e a preservação da cultura quilombola." 
    },
    { 
        palavras: ["Mandela Day", "Dia da Consciência Negra", "Mês da Consciência Negra", "Marcha Zumbi dos Palmares"], 
        titulo: "Datas e eventos de celebração e conscientização.",
        descricao: "Enfoca datas e eventos como Mandela Day, Dia da Consciência Negra, Mês da Consciência Negra e Marcha Zumbi dos Palmares, ressaltando a importância de celebrar e conscientizar sobre a cultura negra." 
    },
    { 
        palavras: ["Iemanjá", "Oxum", "Ogum", "Exu"], 
        titulo: "Orixás e divindades das religiões afro-brasileiras.",
        descricao: "Explora divindades das religiões afro-brasileiras, como Iemanjá, Oxum, Ogum e Exu, destacando a espiritualidade e a diversidade dessas crenças." 
    },
    { 
        palavras: ["Educação inclusiva", "igualdade de oportunidades", "diversidade", "pluralidade"], 
        titulo: "Desafios e soluções para a promoção da igualdade racial.",
        descricao: "Aborda questões como educação inclusiva, igualdade de oportunidades, diversidade e pluralidade, destacando desafios e possíveis soluções para promover a igualdade racial." 
    },
    { 
        palavras: ["Apartheid", "segregação racial", "Jim Crow", "Lei de Discriminação Racial"], 
        titulo: "Marcas históricas da discriminação racial.",
        descricao: "Explora eventos marcantes como o apartheid, segregação racial, Jim Crow e Lei de Discriminação Racial, ressaltando marcas históricas da discriminação racial em diferentes contextos." 
    },
    { 
        palavras: ["Mãe Menininha do Gantois", "Mestre Pastinha", "Mestre Bimba", "Abdias Nascimento"], 
        titulo: "Contribuições de líderes culturais negros para a sociedade.",
        descricao: "Foca em líderes culturais negros como Mãe Menininha do Gantois, Mestre Pastinha, Mestre Bimba e Abdias Nascimento, destacando suas contribuições para a sociedade." 
    },
    { 
        palavras: ["Jurema", "Acotirene", "Mãe Stella de Oxóssi", "Pai Benedito de Aruanda"], 
        titulo: "Líderes religiosos afro-brasileiros.",
        descricao: "Explora líderes religiosos afro-brasileiros como Jurema, Acotirene, Mãe Stella de Oxóssi e Pai Benedito de Aruanda, ressaltando a importância espiritual dessas lideranças." 
    },
    { 
        palavras: ["Sankofa", "Ubuntu", "Axé", "Ase"], 
        titulo: "Conceitos filosóficos africanos e afro-brasileiros.",
        descricao: "Este contexto abrange conceitos filosóficos como Sankofa, Ubuntu, Axé e Ase, destacando a riqueza e a profundidade da filosofia africana e afro-brasileira." 
    },
    { 
        palavras: ["Harlem Renaissance", "Negritude", "Movimento Black is Beautiful", "Movimento Pan-Africano"], 
        titulo: "Movimentos culturais e sociais que valorizam a identidade negra.",
        descricao: "Destaca movimentos como Harlem Renaissance, Negritude, Movimento Black is Beautiful e Movimento Pan-Africano, ressaltando iniciativas que promovem e valorizam a identidade negra." 
    }
];

// Embaralha todos os contextos e seleciona os primeiros 4
const contextosDoJogo = shuffleArray(todosContextos).slice(0, 4);

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
    return contextos.find(contexto => palavrasSelecionadas.every(palavra => contexto.palavras.includes(palavra)));
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
