<template>
    <div>
        <PageTitle title="Classe CSS para links ativos" subtitle="Arquivo src/components/SectionLinkCssActiveClass.vue"/>

        <PageContentText>
            <p>No arquivo de rotas (src/router/routes.js) conseguimos adicionar uma propriedade chamada de <b>linkExactActiveClass</b>.</p>

            <p>Nela, conseguimos definir uma classe CSS a ser aplicada nos links ativos!</p>

            <p>Os links ativos no menu à direita recebem essa classe 'link-active', definida no arquivo acima.</p>
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