<template>
    <div>
        <PageTitle title="Parâmetros de rotas - Exemplo" subtitle="Arquivo src/components/SectionRouteParametersSample.vue"/>

        <PageContentText>
            Parâmetro passado: {{ $route.params.myCustomParameter }}
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