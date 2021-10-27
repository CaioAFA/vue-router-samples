<template>
    <div>
        <PageTitle title="Nomes para rotas" subtitle="Arquivo src/components/SectionRouteNames.vue" />

        <PageContentText>
            <p>Algumas rotas são muito acessadas, o que faz com que as chamemos várias vezes no código. Além disso, algumas delas podem ser bem extensas.</p>

            <p>Por isso, pode ser interessante dar um nome, ou identificador, para elas, com o objetivo de deixar o código organizado e simples de entender.</p>

            <b>Como criar?</b>

            <p>Podemos dar um nome para uma rota usando a propriedade name ao criar nosso array de rotas.</p>

            <p>Depois, no HTML, podemos informar seu nome para o <b>router-link</b>, usando a propriedade <b>to</b>. Contudo, iremos informar um objeto para ela, não apenas uma String.</p>

            <p>Observe o exemplo abaixo:</p>

            <pre>const routes = [
  {
    path: '/products/:id',
    component: productComponent,
    name: 'product'
  }
]

&#60;router-link to='{ name: "product" }'&#62;Link&#60;/router-link&#62;
</pre>

        <hr>

        <b>Informando parâmetros para as rotas com nomes</b>

        <p>Observe o exemplo abaixo:</p>

        <pre>const routes = [
  {
    path: '/products/:id',
    component: productComponent,
    name: 'productEdit'
  }
]

&#60;router-link :to='{ name: "productEdit", params: { id: 23 } }'&#62;
  Link
&#60;/router-link&#62;</pre>
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