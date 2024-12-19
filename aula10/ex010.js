let num = document.getElementById("fnum")   // Referência ao campo de entrada de número
let lista = document.getElementById("flista")  // Referência à lista (select) onde os números serão mostrados
let res = document.getElementById("res")   // Referência ao div onde o resultado será exibido

let valores = []   // Array que armazenará os números adicionados

// Função para verificar se o número está entre 1 e 100
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){   // Verifica se o número é válido (de 1 a 100)
        return true   // Retorna true se o número for válido
    } else {
        return false  // Retorna false caso o número seja inválido
    }
}

// Função para verificar se o número já está na lista
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){   // Verifica se o número já existe no array
        return true   // Retorna true se o número já estiver na lista
    } else {
        return false  // Retorna false se o número não estiver na lista
    }
}

// Função para adicionar um número na lista
function adicionar(){
    // Verifica se o número é válido e ainda não foi adicionado à lista
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        // Adiciona o número à lista de valores
        valores.push(Number(num.value))

        // Cria um novo item (option) para exibir na lista (select)
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado`   // Define o texto do item
        lista.appendChild(item)  // Adiciona o item ao select

        // Limpa o campo de input para o próximo número
        num.value = ""

        // Atualiza os resultados com os dados mais recentes
        atualizarResultado()

    } else {
        // Exibe um alerta caso o valor seja inválido ou já esteja na lista
        window.alert("Valor inválido ou já encontrado na lista")
    }
}

// Função para atualizar e exibir os resultados (total, maior, menor, soma e média)
function atualizarResultado(){
    if(valores.length > 0) {   // Verifica se há valores na lista
        // Calcula o total de valores
        let total = valores.length
        
        // Calcula o maior valor da lista
        let maior = Math.max(...valores)
        
        // Calcula o menor valor da lista
        let menor = Math.min(...valores)
        
        // Calcula a soma de todos os valores na lista
        let soma = valores.reduce((acc, val) => acc + val, 0)
        
        // Calcula a média dos valores
        let media = soma / total

        // Atualiza o conteúdo do div 'res' com os resultados
        res.innerHTML = `
            <p>Total de valores: ${total}</p>   // Exibe o total de valores
            <p>Maior valor: ${maior}</p>         // Exibe o maior valor
            <p>Menor valor: ${menor}</p>         // Exibe o menor valor
            <p>Soma dos valores: ${soma}</p>     // Exibe a soma de todos os valores
            <p>Média dos valores: ${media}</p>   // Exibe a média dos valores
        `
    }
}
