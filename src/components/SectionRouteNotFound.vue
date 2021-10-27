<template>
    <div>
        <PageTitle title='Implementando "Página não encontrada"' subtitle="Arquivo src/components/SectionRouteNotFound.vue" />

        <PageContentText>
            <p>Para implementar uma página de "Página não encontrada", basta adicionar o seguinte nas configurações da rota:</p>

            <pre>
{
    path: "/:catchAll(.*)",
    component: PageNotFound
}
            </pre>

            <p>Nesse caso, caso nenhuma rota seja encontrada para a requisição, o componente "PageNotFound" será renderizado!</p>

            <router-link to="/send-me-to-not-found-page">Teste aqui!</router-link>
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