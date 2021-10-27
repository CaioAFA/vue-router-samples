<template>
    <div>
        <PageTitle title="Redirect" />

        <PageContentText>
            <p>Podemos criar redirecionamentos de rotas no VueJS.</p>

            <p>Por exemplo, acesse o seguinte link e veja o redirecionamento para a página home:</p>

            <router-link to="/redirect-sample">Clique aqui!</router-link>

            <p>Para criar um redirect, observe o exemplo abaixo do arquivo de configurações de rotas:</p>

            <pre>
const routes = [
  {
    // Ao acessar /admin, seremos redirecionados para /home
    path: '/admin',
    redirect: '/home'
  },
  {
    // Podemos redirecionar para uma rota nomeada também
    path: '/admin',
    redirect: { name: 'homepage' }
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