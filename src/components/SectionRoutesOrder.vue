<template>
    <div>
        <PageTitle title="Order das rotas" />

        <PageContentText>
            <b>Por que é importante?</b>

            <p>Quando criamos rotas dinâmicas, que esperam parâmetros, podemos cair em uma armadilha!</p>

            <p>Essa armadilha envolve o Vue confundir uma rota que não tem parâmetros com uma que tem.</p>

            <p>Exemplo:</p>

            <pre>
const routes = [
  {
    // Essa rota irá impedir que outras sejam encontradas, pois sua estrutura é parecida!
    path: '/users/:id',
    component: userComponent
  },
  {
    path: '/users/change-password',
    component: changeComponent
  },
  {
    path: '/users/login',
    component: loginComponent
  }
]
            </pre>

            <b>Como resolver?</b>

            <p>É importante lembrar: sempre que possível, é melhor que as rotas que possuem parâmetros em sua estrutura fiquem por último no array de rotas.</p>

            <p>Esse pode ser um dos erros mais comuns quando estamos criando rotas.</p>
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