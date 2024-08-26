class Atleta {

    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.notas = notas
    }

    calculaCategoria(idade) {
        if (idade >= 9 && idade <= 11) {
            return "Infantil"
        } else if (idade >= 12 && idade <= 13) {
            return "Juvenil"
        } else if (idade >= 14 && idade <= 15) {
            return "Intermediário"
        } else if (idade >= 16 && idade <= 30) {
            return "Adulto"
        }

        return "Sem categoria"
    }

    calculaIMC(peso, altura) {
        let imc = peso / (altura * altura)
        return imc.toFixed(2)
    }

    calculaMediaValida(notas) {
        try {
            const somaNotas = notas.reduce(function (acumulador, nota) {
                return acumulador + nota
            }, 0)

            const media = somaNotas / notas.length
            return media.toFixed(2)

        } catch (error) {
            console.log("Erro ao calcular a média válida do atleta!", error)
        }
    }

    obtemNomeAtleta() {
        return `Nome: ${this.nome}`
    }

    obtemIdadeAtleta() {
        return `Idade: ${this.idade}a`
    }

    obtemPesoAtleta() {
        return `Peso: ${this.peso}kg`
    }

    obtemAltura() {
        return `Altura: ${this.altura}m`
    }

    obtemNotasAtleta() {
        return `Notas: ${this.notas.join(", ")}`
    }

    obtemCategoria() {
        return `Categoria: ${this.calculaCategoria(this.peso)}`
    }

    obtemIMC() {
        return `IMC: ${this.calculaIMC(this.peso, this.altura)}`
    }

    obtemMediaValida() {
        return `Média: ${this.calculaMediaValida(this.notas)}`
    }

    apresentaDadosAtleta() {
        console.log(atleta.obtemNomeAtleta());
        console.log(atleta.obtemIdadeAtleta());
        console.log(atleta.obtemPesoAtleta());
        console.log(atleta.obtemAltura());
        console.log(atleta.obtemNotasAtleta());
        console.log(atleta.obtemCategoria());
        console.log(atleta.obtemIMC());
        console.log(atleta.obtemMediaValida());
    }
}

const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
atleta.apresentaDadosAtleta()
