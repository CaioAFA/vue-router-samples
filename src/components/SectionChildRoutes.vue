<template>
    <div>
        <PageTitle title="Rotas filhas" />

        <PageContentText>
            <p>Algumas rotas de aplicações podem se tornar bem repetitivas. Sendo assim, o que podemos fazer é criar rotas filhas.</p>

            <p>Observe as rotas de exemplo abaixo:</p>

            <ul>
                <li>"/products/:id_product/views"</li>
                <li>"/products/:id_product/photos"</li>
                <li>"/products/:id_product/description"</li>
            </ul>

            <p>Elas possuem estrutura muito parecida. Sendo assim, podemos criá-la da seguinte forma:</p>

            <pre>
const routes = [
  {
    <b>path: '/products/:id_product'</b>,
    component: ...,
    children: [
    <b>
      // Essa rota corresponde a "/products/:id_product/views"
      {
        path: 'views',
        component: ...
      },

      // Essa rota corresponde a "/products/:id_product/photos"
      {
        path: 'photos',
        component: ...
      },

      // Essa rota corresponde a "/products/:id_product/description"
      {
        path: 'description',
        component: ...
      },
      </b>
    ]
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