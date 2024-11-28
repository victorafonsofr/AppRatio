export function getExercicios() {
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
		},
		{
			id: 11,
			feito: false,
			acertou: "",
			pergunta: "O funcionário A monta 30 cadeiras em 6 horas, enquanto o funcionário B monta 60 cadeiras em 15 horas. Qual deles é menos produtivo?",
			imagem: "",
			tipo: "múltipla escolha",
			nivel_dificuldade: "medio",
			respostas: [
				{ id: "a", texto: "Funcionário A", correta: false },
				{ id: "b", texto: "Funcionário B", correta: true },
				{ id: "c", texto: "Ambos são igualmente produtivos", correta: false },
				{ id: "d", texto: "Não é possível determinar", correta: false },
			],
			explicacao: "A produtividade é calculada pela razão de cadeiras por hora. B é menos produtivo (4 cadeiras/h contra 5 cadeiras/h).",
			feedback: {
				mensagens: {
					acerto: "Parabéns!",
					erro: "Revise os cálculos das produtividades para comparação.",
				},
			},
		},
		{
			id: 12,
			feito: false,
			acertou: "",
			pergunta: "Uma pessoa gasta 30 litros de água para regar o jardim em 15 minutos. Outra pessoa gasta 40 litros de água em 20 minutos. Quem consome mais água por minuto?",
			imagem: "",
			tipo: "múltipla escolha",
			nivel_dificuldade: "medio",
			respostas: [
				{ id: "a", texto: "Primeira pessoa", correta: false },
				{ id: "b", texto: "Segunda pessoa", correta: false },
				{ id: "c", texto: "Ambas consomem a mesma quantidade", correta: true },
				{ id: "d", texto: "Não é possível determinar", correta: false },
			],
			explicacao: "Ambas têm o mesmo consumo de 2 litros por minuto (30/15 e 40/20).",
			feedback: {
				mensagens: {
					acerto: "Muito bem!",
					erro: "Reveja os cálculos de litros por minuto.",
				},
			},
		},
		{
			id: 13,
			feito: false,
			acertou: "",
			pergunta: "Uma pessoa lê 90 páginas em 3 horas, enquanto outra lê 120 páginas em 4 horas. Qual delas lê mais páginas por hora?",
			imagem: "",
			tipo: "múltipla escolha",
			nivel_dificuldade: "medio",
			respostas: [
				{ id: "a", texto: "Primeira pessoa", correta: false },
				{ id: "b", texto: "Segunda pessoa", correta: false },
				{ id: "c", texto: "Ambas leem na mesma velocidade", correta: true },
				{ id: "d", texto: "Não é possível determinar", correta: false },
			],
			explicacao: "Ambas têm a mesma velocidade de leitura (30 páginas por hora).",
			feedback: {
				mensagens: {
					acerto: "Ótimo trabalho!",
					erro: "Reveja os cálculos de páginas lidas por hora.",
				},
			},
		},
		{
			id: 14,
			feito: false,
			acertou: "",
			pergunta: "Um carro percorre 300 km em 5 horas, enquanto outro percorre 400 km em 8 horas. Qual deles é mais rápido?",
			imagem: "",
			tipo: "múltipla escolha",
			nivel_dificuldade: "medio",
			respostas: [
				{ id: "a", texto: "Primeiro carro", correta: true },
				{ id: "b", texto: "Segundo carro", correta: false },
				{ id: "c", texto: "Ambos têm a mesma velocidade", correta: false },
				{ id: "d", texto: "Não é possível determinar", correta: false },
			],
			explicacao: "O primeiro carro tem uma velocidade de 60 km/h, enquanto o segundo tem 50 km/h.",
			feedback: {
				mensagens: {
					acerto: "Parabéns!",
					erro: "Revise os cálculos de velocidade para cada carro.",
				},
			},
		},
		{
			id: 15,
			feito: false,
			acertou: "",
			pergunta: "Uma loja vende 120 itens em 6 dias, enquanto outra loja vende 200 itens em 10 dias. Qual delas tem a maior média de vendas por dia?",
			imagem: "",
			tipo: "múltipla escolha",
			nivel_dificuldade: "medio",
			respostas: [
				{ id: "a", texto: "Primeira loja", correta: true },
				{ id: "b", texto: "Segunda loja", correta: false },
				{ id: "c", texto: "Ambas têm a mesma média", correta: false },
				{ id: "d", texto: "Não é possível determinar", correta: false },
			],
			explicacao: "A primeira loja vende 20 itens por dia, enquanto a segunda vende 20.",
			feedback: {
				mensagens: {
					acerto: "Muito bem!",
					erro: "Reveja os cálculos para confirmar.",
				},
			},
		},
		{
			id: 16,
			feito: false,
			acertou: "",
			pergunta: "Um caminhão transporta 300 kg em 3 viagens, enquanto outro transporta 200 kg em 4 viagens. Qual deles transporta mais carga por viagem?",
			imagem: "",
			tipo: "múltipla escolha",
			nivel_dificuldade: "medio",
			respostas: [
				{ id: "a", texto: "Primeiro caminhão", correta: true },
				{ id: "b", texto: "Segundo caminhão", correta: false },
				{ id: "c", texto: "Ambos transportam a mesma carga por viagem", correta: false },
				{ id: "d", texto: "Não é possível determinar", correta: false },
			],
			explicacao: "O primeiro caminhão transporta 100 kg por viagem (300/3), enquanto o segundo transporta 50 kg.",
			feedback: {
				mensagens: {
					acerto: "Ótimo trabalho!",
					erro: "Revise os cálculos de carga por viagem.",
				},
			},
		},
		
    {
		id: 17,
		feito: false,
		acertou: "",
		pergunta: "Uma fábrica produz 500 unidades em 10 dias, enquanto outra fábrica produz 600 unidades em 12 dias. Qual delas é mais eficiente?",
		imagem: "",
		tipo: "múltipla escolha",
		nivel_dificuldade: "medio",
		respostas: [
			{ id: "a", texto: "Primeira fábrica", correta: true },
			{ id: "b", texto: "Segunda fábrica", correta: false },
			{ id: "c", texto: "Ambas têm a mesma eficiência", correta: false },
			{ id: "d", texto: "Não é possível determinar", correta: false },
		],
		explicacao: "A primeira fábrica produz 50 unidades por dia (500/10), enquanto a segunda fábrica produz 50 também. Ambas têm a mesma eficiência.",
		feedback: {
			mensagens: {
				acerto: "Parabéns!",
				erro: "Revise os cálculos de produção diária.",
			},
		},
	},
	{
		id: 18,
		feito: false,
		acertou: "",
		pergunta: "Um atleta A percorre 10 km em 50 minutos, enquanto o atleta B percorre 15 km em 90 minutos. Qual dos dois é mais lento?",
		imagem: "",
		tipo: "múltipla escolha",
		nivel_dificuldade: "medio",
		respostas: [
			{ id: "a", texto: "Atleta A", correta: false },
			{ id: "b", texto: "Atleta B", correta: true },
			{ id: "c", texto: "Ambos possuem o mesmo ritmo", correta: false },
			{ id: "d", texto: "Não é possível determinar", correta: false },
		],
		explicacao: "O atleta A tem um ritmo de 0,2 km/min, enquanto o atleta B percorre 0,167 km/min, sendo mais lento.",
		feedback: {
			mensagens: {
				acerto: "Muito bem!",
				erro: "Revise os cálculos de ritmo para cada atleta.",
			},
		},
	},
	{
		id: 19,
		feito: false,
		acertou: "",
		pergunta: "Uma máquina A fabrica 120 peças em 8 horas, e uma máquina B fabrica 200 peças em 20 horas. Qual delas é menos eficiente?",
		imagem: "",
		tipo: "múltipla escolha",
		nivel_dificuldade: "medio",
		respostas: [
			{ id: "a", texto: "Máquina A", correta: false },
			{ id: "b", texto: "Máquina B", correta: true },
			{ id: "c", texto: "Ambas são igualmente eficientes", correta: false },
			{ id: "d", texto: "Não é possível determinar", correta: false },
		],
		explicacao: "A máquina A fabrica 15 peças/hora, enquanto a máquina B fabrica 10 peças/hora. A máquina B é menos eficiente.",
		feedback: {
			mensagens: {
				acerto: "Ótimo trabalho!",
				erro: "Revise os cálculos de eficiência por hora.",
			},
		},
	},
	{
		id: 20,
		feito: false,
		acertou: "",
		pergunta: "Uma máquina costura 90 peças em 5 horas, enquanto outra costura 120 peças em 6 horas. Qual delas é menos eficiente?",
		imagem: "",
		tipo: "múltipla escolha",
		nivel_dificuldade: "medio",
		respostas: [
			{ id: "a", texto: "Primeira máquina", correta: true },
			{ id: "b", texto: "Segunda máquina", correta: false },
			{ id: "c", texto: "Ambas são igualmente eficientes", correta: false },
			{ id: "d", texto: "Não é possível determinar", correta: false },
		],
		explicacao: "A primeira máquina costura 18 peças/hora, enquanto a segunda costura 20 peças/hora.",
		feedback: {
			mensagens: {
				acerto: "Parabéns!",
				erro: "Revise os cálculos da eficiência por hora de cada máquina.",
			},
		},
	},
	{
		id: 21,
		feito: false,
		acertou: "",
		pergunta: "Um pedreiro constrói 10 metros de muro em 2 dias. Quantos metros de muro ele conseguirá construir em 6 dias, mantendo o mesmo ritmo?",
		imagem: "",
		tipo: "múltipla escolha",
		nivel_dificuldade: "facil",
		respostas: [
			{ id: "a", texto: "15", correta: false },
			{ id: "b", texto: "20", correta: false },
			{ id: "c", texto: "30", correta: true },
			{ id: "d", texto: "25", correta: false },
		],
		explicacao: "Se em 2 dias ele constrói 10 metros, em 6 dias construirá 30 metros (regra de 3 simples).",
		feedback: {
			mensagens: {
				acerto: "Muito bem!",
				erro: "Revise o cálculo proporcional para a construção.",
			},
		},
	},
	{
		id: 22,
		feito: false,
		acertou: "",
		pergunta: "Uma mãe recorreu à bula para verificar a dosagem de um remédio que precisava dar a seu filho. Na bula, recomendava-se a seguinte dosagem: 5 gotas para cada 2 kg de massa corporal a cada 8 horas. Se a mãe ministrou corretamente 30 gotas do remédio a seu filho a cada 8 horas, então a massa corporal dele é de:",
		imagem: "",
		tipo: "múltipla escolha",
		nivel_dificuldade: "medio",
		respostas: [
			{ id: "a", texto: "12 kg", correta: false },
			{ id: "b", texto: "16 kg", correta: false },
			{ id: "c", texto: "24 kg", correta: true },
			{ id: "d", texto: "36 kg", correta: false },
		],
		explicacao: "Se 5 gotas correspondem a 2 kg, então 30 gotas correspondem a 24 kg (regra de 3 simples).",
		feedback: {
			mensagens: {
				acerto: "Excelente trabalho!",
				erro: "Revise a regra de 3 para calcular corretamente a massa corporal.",
			},
		},
	},
	{
		id: 23,
		feito: false,
		acertou: "",
		pergunta: "Qual dos pares é uma proporção verdadeira?",
		imagem: "",
		tipo: "múltipla escolha",
		nivel_dificuldade: "facil",
		respostas: [
			{ id: "a", texto: "2/3 = 4/6", correta: true },
			{ id: "b", texto: "3/5 = 6/15", correta: false },
			{ id: "c", texto: "1/2 = 2/3", correta: false },
			{ id: "d", texto: "5/10 = 2/3", correta: false },
		],
		explicacao: "2/3 é igual a 4/6 quando simplificado. Os demais pares não são equivalentes.",
		feedback: {
			mensagens: {
				acerto: "Ótimo trabalho!",
				erro: "Revise a equivalência entre frações.",
			},
		},
	},
	{
		id: 24,
		feito: false,
		acertou: "",
		pergunta: "Complete a proporção: 2/3 = 4/x. O valor de x é:",
		imagem: "",
		tipo: "múltipla escolha",
		nivel_dificuldade: "facil",
		respostas: [
			{ id: "a", texto: "5", correta: false },
			{ id: "b", texto: "6", correta: true },
			{ id: "c", texto: "8", correta: false },
			{ id: "d", texto: "12", correta: false },
		],
		explicacao: "Multiplicando cruzado, 2x = 12, e x = 6.",
		feedback: {
			mensagens: {
				acerto: "Muito bem!",
				erro: "Revise a multiplicação cruzada para resolver proporções.",
			},
		},
	},
	{
		id: 25,
		feito: false,
		acertou: "",
		pergunta: "Uma receita usa 2 copos de farinha para cada 3 copos de leite. Se usamos 6 copos de leite, quantos copos de farinha são necessários?",
		imagem: "",
		tipo: "múltipla escolha",
		nivel_dificuldade: "facil",
		respostas: [
			{ id: "a", texto: "2", correta: false },
			{ id: "b", texto: "4", correta: true },
			{ id: "c", texto: "6", correta: false },
			{ id: "d", texto: "8", correta: false },
		],
		explicacao: "Proporção: 2/3 = x/6. Resolvendo, x = 4.",
		feedback: {
			mensagens: {
				acerto: "Ótimo trabalho!",
				erro: "Revise a aplicação da regra de 3 para proporções.",
			},
		},
	},
	{
		id: 26,
		feito: false,
		acertou: "",
		pergunta: "Uma empresa fabrica 15 produtos em 5 horas. Quantos produtos são fabricados em 15 horas, mantendo o ritmo?",
		imagem: "",
		tipo: "múltipla escolha",
		nivel_dificuldade: "facil",
		respostas: [
			{ id: "a", texto: "30", correta: false },
			{ id: "b", texto: "40", correta: false },
			{ id: "c", texto: "45", correta: true },
			{ id: "d", texto: "60", correta: false },
		],
		explicacao: "Se em 5 horas são fabricados 15 produtos, em 15 horas serão fabricados 45 (triplicando o tempo).",
		feedback: {
			mensagens: {
				acerto: "Muito bem!",
				erro: "Revise a multiplicação proporcional do tempo e da produção.",
			},
		},
	},
	{
		id: 27,
		feito: false,
		acertou: "",
		pergunta: "Complete a proporção: 5/8 = 10/x. O valor de x é:",
		imagem: "",
		tipo: "múltipla escolha",
		nivel_dificuldade: "facil",
		respostas: [
			{ id: "a", texto: "12", correta: false },
			{ id: "b", texto: "14", correta: false },
			{ id: "c", texto: "16", correta: true },
			{ id: "d", texto: "18", correta: false },
		],
		explicacao: "Multiplicando cruzado, 5x = 80, e x = 16.",
		feedback: {
			mensagens: {
				acerto: "Parabéns!",
				erro: "Revise a multiplicação cruzada para resolver proporções.",
			},
		},
	},
	{
		id: 28,
		feito: false,
		acertou: "",
		pergunta: "Uma receita exige 3 copos de açúcar para cada 2 copos de leite. Se forem usados 12 copos de açúcar, quantos copos de leite serão necessários?",
		imagem: "",
		tipo: "múltipla escolha",
		nivel_dificuldade: "facil",
		respostas: [
			{ id: "a", texto: "6", correta: false },
			{ id: "b", texto: "8", correta: true },
			{ id: "c", texto: "9", correta: false },
			{ id: "d", texto: "10", correta: false },
		],
		explicacao: "Proporção: 3/2 = 12/x. Resolvendo, x = 8.",
		feedback: {
			mensagens: {
				acerto: "Ótimo trabalho!",
				erro: "Revise a regra de 3 para encontrar a quantidade de leite necessária.",
			},
		},
	},
	{
		id: 29,
		feito: false,
		acertou: "",
		pergunta: "Qual proporção não é verdadeira?",
		imagem: "",
		tipo: "múltipla escolha",
		nivel_dificuldade: "facil",
		respostas: [
			{ id: "a", texto: "2/3 = 4/6", correta: false },
			{ id: "b", texto: "3/5 = 6/10", correta: false },
			{ id: "c", texto: "1/2 = 50/100", correta: false },
			{ id: "d", texto: "1/2 = 2/1", correta: true },
		],
		explicacao: "A proporção 1/2 = 2/1 não é verdadeira, pois 1/2 não é igual a 2/1.",
		feedback: {
			mensagens: {
				acerto: "Muito bem!",
				erro: "Revise as frações para verificar sua equivalência.",
			},
		},
	},
	{
		id: 30,
		feito: false,
		acertou: "",
		pergunta: "Uma pessoa compra 3 maçãs por R$12. Qual será o custo de 9 maçãs, se o preço for proporcional?",
		imagem: "",
		tipo: "múltipla escolha",
		nivel_dificuldade: "facil",
		respostas: [
			{ id: "a", texto: "R$24", correta: false },
			{ id: "b", texto: "R$36", correta: true },
			{ id: "c", texto: "R$40", correta: false },
			{ id: "d", texto: "R$48", correta: false },
		],
		explicacao: "Proporção: 3/12 = 9/x. Resolvendo, x = 36.",
		feedback: {
			mensagens: {
				acerto: "Parabéns!",
				erro: "Revise a proporção para calcular o preço proporcional.",
			},
		},
	}
	];
}