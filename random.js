const nomes = ["Larissa", "Julia", "Eduarda", "Marcelina", "Lana", "Lua", "Gabriela"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)