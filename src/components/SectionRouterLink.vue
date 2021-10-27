<template>
    <div>
        <PageTitle title="Router Link" />

        <PageContentText>
            <p>Temos uma Tag específica para nos ajudar a trocar de rota em nossa aplicação: <b>&#60;router-link&#62;</b></p>

            <ul>
                <li>
                    <b>&#60;router-link to="/profile" replace&#62;</b>
                     - Navegação não irá criar um histórico
                </li>

                <li>
                    <b>&#60;router-link to="/profile" append&#62;</b>
                     - O link atual será mesclado com o novo link ("/link_atual/profile")
                </li>

                <li>
                    <b>&#60;router-link to="/profile" tag="p"&#62;</b>
                     - Podemos mudar a tag de link que será renderizada no HTML. Por padrão é a tag &#60;a&#62;
                </li>

                <li>
                    <b>&#60;router-link to="/profile" active-class="minha-classe"&#62;</b>
                     - Podemos adicionar uma classe personalizada para quando o link estiver aberto na página
                </li>

                <li>
                    <b>&#60;router-link to="/profile" event="dblclick"&#62;</b>
                     - Podemos definir qual evento pode ser usado para acionar a mudança de link. Essa propriedade também aceita um array de eventos
                </li>

            </ul>

            <br>

            <b>Exemplos de Utilização</b>

            <p>Todos os links do menu à esquerda foram feitos utilizando router-links. Dê uma olhada no arquivo <b>src/components/PageMenu.vue</b>!</p>
        </PageContentText>
    </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue'
import PageContentText from '../components/PageContentText.vue'

export default {
    components: {
        PageTitle,
        PageContentText
    }
}
</script>

<style scoped>
ul li {
    margin-top: 15px;
}
</style>