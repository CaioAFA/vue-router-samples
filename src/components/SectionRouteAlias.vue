<template>
    <div>
        <PageTitle title="Alias" subtitle="Arquivo src/components/SectionRouteAlias.vue"/>

        <PageContentText>
            <p>Podemos criar um "apelido" para uma rota. Dessa forma, teremos dois nomes: o original e o apelido!</p>

            <p>Para isso, copie o valor do link abaixo e cole no navegador:</p>

            <router-link to="/alias-sample">Clique aqui!</router-link>

            <p>Para criar um alias, observe o exemplo abaixo:</p>

            <pre>
const routes = [
  {
    // Se alguém acessar /administration, verá o componente de /admin e não verá erros na tela
    path: '/admin',
    alias: '/administration',
    component: ...
  }
]
            </pre>
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