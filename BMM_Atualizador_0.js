async function verificarAtualizacao(modelo, versaoAtual) {

    alert("O atualizador começou.");

    const endereco =
    "https://raw.githubusercontent.com/fr-pius/BMM/refs/heads/main/BMM.json";

    try {

        alert("Tentando acessar o BMM.json.");

        const resposta = await fetch(endereco);

        alert("O BMM.json foi acessado.");

        const dados = await resposta.json();

        alert("O JSON foi lido. M6 = " + dados.M6);

        const versaoDisponivel = dados[modelo];

        if (!versaoDisponivel) {
            return;
        }

        if (versaoDisponivel !== versaoAtual) {

            alert(
                "Existe uma versão mais recente do " +
                modelo +
                " disponível.\n\n" +
                "Versão atual: " +
                versaoAtual +
                "\n" +
                "Versão disponível: " +
                versaoDisponivel
            );

        }

    } catch (erro) {

        alert(
            "ERRO AO CONSULTAR A BMM:\n\n" +
            erro
        );

    }

}
