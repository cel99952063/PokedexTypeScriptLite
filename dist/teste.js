import { buscarPokemon } from './services/PokeApiService.js';
async function testarBusca() {
    console.log("--- Iniciando teste da PokeAPI ---");
    // Teste 1: Buscar um Pokémon válido
    const pokemon = await buscarPokemon(33);
    console.log(`Resultado Pokemon: ${pokemon?.nome}`, pokemon);
    // Teste 2: Buscar um Pokémon que não existe (para validar o RF05)
    const erro = await buscarPokemon("pokemon-que-nao-existe");
    console.log("Resultado Erro:", erro);
    console.log("--- Fim do teste ---");
}
testarBusca();
//# sourceMappingURL=teste.js.map