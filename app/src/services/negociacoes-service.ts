import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
    public obterNegociacoesDoDia(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados') // Requisição para a API
            .then(res => { // Resposta da API
                return res.json() // Converte a resposta para objeto JavaScript JSON
            })
            .then((dados: NegociacoesDoDia[]) => { // Dados é do tipo NegociacoesDoDia, que é uma interface importada.
                return dados.map(dadoDeHoje => { // Array mapeando os dados
                    return new Negociacao(new Date(), dadoDeHoje.vezes, dadoDeHoje.montante) // Converte para uma instância de Negociacao / Ao importar uma interface os atributos estão facilmente disponíveis
                });
            });
    }
}