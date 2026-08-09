async function verificarAtualizacao(modelo, versaoAtual) {

    const endereco =
    "https://raw.githubusercontent.com/fr-pius/BMM/refs/heads/main/BMM.json?t=" + Date.now();

    try {

        const resposta = await fetch(endereco);
        const dados = await resposta.json();

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

        console.log(
            "Não foi possível verificar atualizações da BMM.",
            erro
        );

    }

}
