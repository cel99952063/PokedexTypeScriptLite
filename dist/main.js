import { buscarPokemon } from './services/PokeApiService.js';
import { CatalogoPokemon } from './CatalogoPokemon.js';
async function main() {
    const catalogo = new CatalogoPokemon();
    // Busca e adiciona Pikachu
    const pikachu = await buscarPokemon("pikachu");
    if (pikachu !== null) {
        catalogo.adicionar(pikachu);
    }
    // Busca e adiciona Charmander
    const charmander = await buscarPokemon("charmander");
    if (charmander !== null) {
        catalogo.adicionar(charmander);
    }
    // Testa bloqueio de duplicidade
    const pikachuDuplicado = await buscarPokemon("pikachu");
    if (pikachuDuplicado !== null) {
        catalogo.adicionar(pikachuDuplicado);
    }
    // Testa tratamento de erro de Pokemon inexistente
    await buscarPokemon("pokemon-inexistente");
    // Lista o catálogo
    catalogo.listar(); // deve aparecer Pikachu e Charmander)
    //Remove o ID 25 (Pikachu)
    catalogo.remover(25);
    //Lista novamente (deve aparecer Charmander)
    catalogo.listar();
    //Remove o ID 4 (Charmander)
    catalogo.remover(4);
    //Lista novamente (deve aparecer AVISO VAZIO)
    catalogo.listar();
}
main();
//# sourceMappingURL=main.js.map