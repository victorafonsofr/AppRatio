export function getExercicios3() {
    return [
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
			{ id: "a", texto: "12 kg", correta: true },
			{ id: "b", texto: "16 kg", correta: false },
			{ id: "c", texto: "24 kg", correta: false },
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