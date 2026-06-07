import type { PokemonResumo } from './models/Pokemon.js';

export class CatalogoPokemon {

    // Array privado que armazena os Pokemons.
  private pokemons: PokemonResumo[] = []; //inicia vazaio

  // Para adicionar novo Pokemon ao catálogo
  adicionar(pokemon: PokemonResumo): void {
    
    const jaExiste = this.pokemons.some((item) => item.id === pokemon.id);
    
    if (jaExiste) {
      console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`);
      return;
    }

    // Se não existe insere o novo objeto Pokemon no array
    this.pokemons.push(pokemon);
    console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`);
  }

  // Listar todos os Pokemons salvos
  listar(): void {
    // se lista vazia, avisa e interrompe
    if (this.pokemons.length === 0) {
      console.log("[AVISO] Catálogo vazio.");
      return;
    }

    // forEach() 
    this.pokemons.forEach((pokemon) => {
      
      console.log(
        `#${pokemon.id} - ${pokemon.nome} | Tipos: ${pokemon.tipos.join(", ")} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`
      );
    });
  }

  // Remover Pokemon do catálogo pelo ID
  remover(id: number): void {
    // verifica seestá na lista
    const existe = this.pokemons.some((pokemon) => pokemon.id === id);
    
    if (!existe) {
      console.log("[AVISO] Nenhum Pokémon encontrado com esse ID.");
      return;
    }

    // filter() para criar uma lista    
    this.pokemons = this.pokemons.filter((pokemon) => pokemon.id !== id);
    console.log("[OK] Pokémon removido do catálogo.");
  }
}