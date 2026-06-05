import { PokemonApiResponse, PokemonResumo } from '../models/Pokemon';

// Buscar Pokemon na API (RF04)
export async function buscarPokemon(nomeOuId: string | number): Promise<PokemonResumo | null> {
  
  
  
    // URL da API    
  const url = `https://pokeapi.co/api/v2/pokemon/${nomeOuId}`;

  
  
  //bloco Try/Catch (RF05)
  
  try { 

    const resposta = await fetch(url);
    if (!resposta.ok) {
        console.log(`[ERRO] Pokemon não encontrado: ${nomeOuId}`);
      return null;
    }
    
    const dados = await resposta.json();
    
    //Mapeamento
    return {
      id: dados.id,
      nome: dados.name,
      altura: dados.height,
      peso: dados.weight,
      // Extraindo só nome de cada tipo mapeando o array
      tipos: dados.types.map((item: any) => item.type.name)
    };

    
  } catch (error) {
    console.log("[ERRO] Não foi possível buscar o Pokemon.");
        return null;
  }
}