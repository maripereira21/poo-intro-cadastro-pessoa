class pessoa {
    constructor(nome, dataNascimento) {
        this.nome = nome;
        this.dataNascimento = new Date(dataNascimento);
    }
    
    calcularIdade() {
        const hoje = new Date();
        let idade = hoje.getFullYear() - this.dataNascimento.getFullYear();
        const diferencames = hoje.getMonth() - this.dataNascimento.getMonth();
        const aniversarioaindanaochegou = diferencames < 0 || (diferencames === 0 && hoje.getDate() < this.dataNascimento.getDate());
        if (aniversarioaindanaochegou) {
            idade--;
        }
        return idade;
    }
    toJSON() {
        return {
            nome: this.nome,
            dataNascimento: this.dataNascimento.toISOString().split('T')[0],
            idade: this.calcularIdade()
        };
    }
}

module.exports = pessoa;   
