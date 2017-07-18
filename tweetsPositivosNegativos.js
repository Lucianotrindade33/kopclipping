var tweetsPositivos = [
		/ótimo desempenho/,
		/otimo desempenho/,
		/salvador/,
		/voto nele/,
		/votarei nele/,
		/honesto/,
		/salve/,
		/gente boa/,
		/ótimo/,
		/otimo/,
		/ótima/,
		/otima/,
		/excelente/,
		/exelente/,
		/bom/,
		/grande ajuda/,
		/bom político/,
		/bom politico/
	];

var tweetsNegativos = [
		/nazista/,
		/homofóbico/,
		/homofobico/,
		/monstro/,
		/ditador/,
		/filha da puta/,
		/viado/,
		/bosta/,
		/merda/,
		/desempenho horrível/,
		/desempenho horrivel/,
		/retardado/,
		/loco/,
		/louco/,
		/chuva/,
		/ridiculo/,
		/ridículo/,
		/doido/

	];
	

var countTweetsPositivo = db.posts.find({owner:"user1", mensagem:{$in: tweetsPositivos}}).count();

var countTweetsNegativo= db.posts.find({owner:"user1", mensagem:{$in: tweetsNegativos}}).count();

print("Positivos: "+countTweetsPositivo +
	"\nNegativos: "+countTweetsNegativo);