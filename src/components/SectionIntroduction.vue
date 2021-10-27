<template>
    <div>
        <PageTitle title="Introdução - Router View" />

        <PageContentText>
            <b>Funcionamento</b>

            <p>O Vue Router funciona da seguinte forma: temos a tag <b>&#60;router-view&#62;&#60;router-view/&#62;</b> , cujo conteúdo renderizado irá variar de acordo com a rota.</p>
            <p>Algo bem comum é definir um Header/Menu e/ou um Footer para algum site e só trocar o conteúdo "central" de acordo com a rota.</p>
            <p>Nesse site de exemplo, o Menu é fixo e apenas essa parte varia. Confira o arquivo <b>src/components/PageContent.vue</b>.</p>

            <br>

            <b>Configurações</b>
            <p>Todas as rotas são definidas dentro do arquivo src/router/routes.js.</p>
            <p>Não deixe de conferir também o arquivo principal do projeto para ver as configurações necessárias (src/main.js).</p>
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

</style>