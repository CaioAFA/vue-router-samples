<template>
    <div>
        <PageTitle title="Nomes para as views" subtitle="Arquivo src/components/SectionViewNames.vue" />

        <PageContentText>
            <b>Por que é necessário?</b>

            <p>Em alguns casos, pode ser que precisemos exibir vários componentes na mesma rota e ao mesmo tempo. Podemos ter um problema para exibir todos eles.</p>

            <p>Para nos socorrer dessas situações, o Vue nos dá a opção de dar nomes para as views, relacionando-as com os componentes de maneira mais performática.</p>

            <p>Esse recurso é muito útil quando precisamos de mais de um router-view na mesma página.</p>

            <b>Como criar?</b>

            <p>No HTML podemos dar um nome para a view utilizando a propriedade name no componente &#60;router-view&#62;&#60;/router-view&#62;.</p>

            <p>Depois, no JS, podemos definir quais componentes específicos a rota irá renderizar utilizando a propriedade components ao criar nosso array de rotas, informando o mesmo identificador criado no HTML.</p>

            <p>Exemplo:</p>

            <pre>&#60;router-view name='home'&#62;Link&#60;/router-view&#62;
&#60;router-view name='profile'&#62;Link&#60;/router-view&#62;
&#60;router-view&#62;Link&#60;/router-view&#62; <!-- Irá corresponder ao default -->

const routes = [
  {
    path: '/',
    components: {
      home: homeComponent,
      profile: profileComponent,
      default: errorComponent
    }
  },  
]</pre>

        <p><b>OBS:</b> O router-view sem nenhum "name" exibirá o componente "default"</p>

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