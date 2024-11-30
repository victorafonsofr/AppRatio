export function getExercicios1() {
    return [
		{
            id: 1,
            feito: false,
            acertou: "",
            pergunta: "O desempenho de um técnico de futebol é de 15 vitórias em 25 jogos. Então, a razão entre o número de partidas perdidas e o número de partidas disputadas é:",
            imagem: "",
            tipo: "múltipla escolha",
            nivel_dificuldade: "facil",
            respostas: [
                { id: "a", texto: "2/5", correta: true },
                { id: "b", texto: "3/5", correta: false },
                { id: "c", texto: "4/5", correta: false },
                { id: "d", texto: "5/3", correta: false },
            ],
            explicacao: "O número de partidas perdidas é 10 (25 - 15). A razão é 10/25, que simplificada dá 4/5.",
            feedback: {
                mensagens: {
                    acerto: "Parabéns, você acertou!",
                    erro: "Reveja a definição de razão e como simplificar frações.",
                },
            },
        },
        {
            id: 2,
            feito: false,
            acertou: "",
            pergunta: "Em uma sala de aula há 35 alunos, e 20 são meninas. A razão entre a quantidade de meninos e a quantidade de meninas é:",
            imagem: "",
            tipo: "múltipla escolha",
            nivel_dificuldade: "facil",
            respostas: [
                { id: "a", texto: "4/7", correta: false },
                { id: "b", texto: "3/7", correta: false },
                { id: "c", texto: "1/2", correta: false },
                { id: "d", texto: "3/4", correta: true },
            ],
            explicacao: "Há 15 meninos (35 - 20). A razão é 15/20, que simplificada dá 3/7.",
            feedback: {
                mensagens: {
                    acerto: "Muito bem!",
                    erro: "Lembre-se de simplificar a fração após calcular a razão.",
                },
            },
        },
        {
            id: 3,
            feito: false,
            acertou: "",
            pergunta: "A razão entre 45 e 15 pode ser escrita como:",
            imagem: "",
            tipo: "múltipla escolha",
            nivel_dificuldade: "facil",
            respostas: [
                { id: "a", texto: "3/1", correta: true },
                { id: "b", texto: "1/3", correta: false },
                { id: "c", texto: "1/2", correta: false },
                { id: "d", texto: "2/1", correta: false },
            ],
            explicacao: "Dividindo 45 por 15, a razão é 3/1.",
            feedback: {
                mensagens: {
                    acerto: "Ótimo trabalho!",
                    erro: "Verifique a divisão dos números para encontrar a razão.",
                },
            },
        },
        {
            id: 4,
            feito: false,
            acertou: "",
            pergunta: "Se um carro percorreu 150 km em 3 horas, qual é a razão entre a distância e o tempo?",
            imagem: "",
            tipo: "múltipla escolha",
            nivel_dificuldade: "facil",
            respostas: [
                { id: "a", texto: "20 km/h", correta: false },
                { id: "b", texto: "30 km/h", correta: false },
                { id: "c", texto: "40 km/h", correta: false },
                { id: "d", texto: "50 km/h", correta: true },
            ],
            explicacao: "A razão é 150 km dividido por 3 horas, o que resulta em 30 km/h.",
            feedback: {
                mensagens: {
                    acerto: "Boa, você acertou!",
                    erro: "Revise o cálculo da razão dividindo a distância pelo tempo.",
                },
            },
        },
        {
            id: 5,
            feito: false,
            acertou: "",
            pergunta: "Uma turma tem 20 meninos e 25 meninas. Qual é a razão entre o número de meninos e o total de alunos?",
            imagem: "",
            tipo: "múltipla escolha",
            nivel_dificuldade: "facil",
            respostas: [
                { id: "a", texto: "4/9", correta: true },
                { id: "b", texto: "3/5", correta: false },
                { id: "c", texto: "2/5", correta: false },
                { id: "d", texto: "4/5", correta: false },
            ],
            explicacao: "O total de alunos é 45. A razão entre meninos e o total é 20/45, que simplificada é 4/9.",
            feedback: {
                mensagens: {
                    acerto: "Muito bem!",
                    erro: "Revise a simplificação da razão calculada.",
                },
            },
        },
        {
            id: 6,
            feito: false,
            acertou: "",
            pergunta: "A razão entre 20 e 4 é:",
            imagem: "",
            tipo: "múltipla escolha",
            nivel_dificuldade: "facil",
            respostas: [
                { id: "a", texto: "4", correta: false },
                { id: "b", texto: "5", correta: true },
                { id: "c", texto: "6", correta: false },
                { id: "d", texto: "7", correta: false },
            ],
            explicacao: "20 dividido por 4 é igual a 5.",
            feedback: {
                mensagens: {
                    acerto: "Excelente!",
                    erro: "Revise a operação de divisão para encontrar a razão.",
                },
            },
        },
		{
			id: 7,
			feito: false,
			acertou: "",
			pergunta: "Qual é a razão entre 50 e 10?",
			imagem: "",
			tipo: "múltipla escolha",
			nivel_dificuldade: "facil",
			respostas: [
				{ id: "a", texto: "1", correta: false },
				{ id: "b", texto: "4", correta: false },
				{ id: "c", texto: "5", correta: true },
				{ id: "d", texto: "10", correta: false },
			],
			explicacao: "50 dividido por 10 é igual a 5.",
			feedback: {
				mensagens: {
					acerto: "Bom trabalho!",
					erro: "Revise a operação de divisão para encontrar a razão.",
				},
			},
		},
		{
			id: 8,
			feito: false,
			acertou: "",
			pergunta: "A razão entre o número de peras e maçãs em uma fruteira é 5/3. Se há 25 peras, quantas maçãs há?",
			imagem: "",
			tipo: "múltipla escolha",
			nivel_dificuldade: "facil",
			respostas: [
				{ id: "a", texto: "10", correta: false },
				{ id: "b", texto: "15", correta: true },
				{ id: "c", texto: "20", correta: false },
				{ id: "d", texto: "30", correta: false },
			],
			explicacao: "A proporção é 5x = 25, resultando em x = 15.",
			feedback: {
				mensagens: {
					acerto: "Muito bem!",
					erro: "Revise o cálculo da proporção para encontrar o número de maçãs.",
				},
			},
		},
		{
			id: 9,
			feito: false,
			acertou: "",
			pergunta: "Uma empresa fabrica 30 cadeiras e 45 mesas em um mês. Qual é a razão entre o número de cadeiras e o número total de móveis fabricados?",
			imagem: "",
			tipo: "múltipla escolha",
			nivel_dificuldade: "facil",
			respostas: [
				{ id: "a", texto: "2/3", correta: true },
				{ id: "b", texto: "1/2", correta: false },
				{ id: "c", texto: "2/5", correta: false },
				{ id: "d", texto: "1/3", correta: false },
			],
			explicacao: "O total é 75. A razão é 30/75, simplificada para 2/3.",
			feedback: {
				mensagens: {
					acerto: "Parabéns!",
					erro: "Revise a divisão e simplificação da fração.",
				},
			},
		},
		{
			id: 10,
			feito: false,
			acertou: "",
			pergunta: "Uma receita pede 150 g de açúcar e 200 g de farinha. Qual é a razão entre a quantidade de açúcar e a quantidade total de ingredientes?",
			imagem: "",
			tipo: "múltipla escolha",
			nivel_dificuldade: "facil",
			respostas: [
				{ id: "a", texto: "3/7", correta: true },
				{ id: "b", texto: "5/7", correta: false },
				{ id: "c", texto: "3/5", correta: false },
				{ id: "d", texto: "1/4", correta: false },
			],
			explicacao: "A soma dos ingredientes é 350 g. A razão é 150/350, simplificada para 3/7.",
			feedback: {
				mensagens: {
					acerto: "Ótimo trabalho!",
					erro: "Revise o cálculo da soma e simplificação da razão.",
				},
			},
		}
	]		
}