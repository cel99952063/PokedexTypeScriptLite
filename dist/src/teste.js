import { buscarPokemon } from './services/PokeApiService';
async function testarBusca() {
    console.log("--- Iniciando teste da PokeAPI ---");
    // Teste 1: Buscar um Pokémon válido
    const pikachu = await buscarPokemon("pikachu");
    console.log("Resultado Pikachu:", pikachu);
    // Teste 2: Buscar um Pokémon que não existe (para validar o RF05)
    const erro = await buscarPokemon("pokemon-que-nao-existe");
    console.log("Resultado Erro:", erro);
    console.log("--- Fim do teste ---");
}
testarBusca();
//# sourceMappingURL=teste.js.map