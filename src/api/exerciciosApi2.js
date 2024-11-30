export function getExercicios2() {
    return [
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
				{ id: "a", texto: "Primeiro carro", correta: false },
				{ id: "b", texto: "Segundo carro", correta: true },
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
			{ id: "a", texto: "Primeira fábrica", correta: false },
			{ id: "b", texto: "Segunda fábrica", correta: false },
			{ id: "c", texto: "Ambas têm a mesma eficiência", correta: true },
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
	}
	];
}