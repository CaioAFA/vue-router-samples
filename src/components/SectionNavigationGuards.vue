<template>
    <div>
        <PageTitle title="Navigation Guards" subtitle="Arquivo src/components/SectionNavigationGuards.vue"/>

        <PageContentText>
            <p>Um recurso oferecido pelo Vue para monitorarmos as rotas de nossa aplicação, dando a nós a opção de realizarmos algum tipo de verificação antes ou depois de renderizá-las no navegador.</p>

            <p>São como guardas que protegem nossas rotas. Um conceito muito similar a um middleware.</p>

            <b>Navigation Guards - Global Guards</b>

            <p>O Vue Router nos oferece três métodos globais principais para controlarmos o acesso de cada rota da aplicação:</p>

            <ul>
                <li><b>beforeEach()</b>: Método chamado antes da rota ser acessada</li>
                <li><b>beforeResolve()</b>: Similar ao beforeEach(). Contudo, ele é chamado assim que a navegação é confirmada</li>
                <li><b>afterEach()</b>: Método chamado assim que a navegação é finalizada</li>
            </ul>

            <b>Parâmetros dos métodos</b>

            <ul>
                <li><b>to</b>: Rota para onde a navegação irá</li>
                <li><b>from</b>: Rota de onde a navegação está vindo</li>
                <li><b>next</b>: Função que pode ser usada para cancelar a navegação, realizar um redirecionamento ou exibir um erro (OBS: o método afterEach() não tem acesso a esse recurso)</li>
            </ul>

            <p>Exemplo:</p>

            <pre>
const router = new VueRouter({});

router.beforeEach((to, from, next) => {
  // Se o usuário não está logado, redireciona para a página de login. Senão, vai para a página
  // solicitada.
  if(!user.isLogged()){
    next('/login')
  }
  else {
    next()
  }
})

router.beforeResolve((to, from, next) => {
  console.log('Navegação Confirmada!')
})

router.afterEach((to, from, next) => {
  console.log('Navegação Concluída OK')
})
            </pre>
            
            <hr>

            <b>Navigation Guards - Local Guards</b>

            <p>O Vue Router nos oferece também um método para criar guardas por rotas, de maneira individual.</p>

            <ul>
                <li>beforeEnter(): Método chamado antes de a rota ser acessada. Tem a mesma função do beforeEach(), mas é usado para aplicar a monitoração em apenas uma rota. Ele recebe os mesmos parâmetros dos guardos globais.</li>
            </ul>

            <pre>
const router = new VueRouter({
  routes: [
    {
      path: '/profile',
      beforeEnter: (to, from, next) => {
        if(!user.isLogged()){
          next('/login')
        }
        else{
          next()
        }
      }
    }
  ]
})
            </pre>

            <hr>

            <b>Navigation Guards - Componentes</b>

            <p>É possível criar guardar de navegação até mesmo para os componentes. Para isso, temos à nossa disposição três métodos que podemos usar quando criamos um componente:</p>

            <ul>
                <li><b>beforeRouteEnter()</b>: Método chamado antes de a rota renderizar o componente na aplicação</li>
                <li><b>beforeRouteUpdate()</b>: Método chamado antes de a rota mudar. Usado principalmente quando o componente continua sendo utilizado mesmo que a rota seja alterada</li>
                <li><b>beforeRouteLeave()</b>: Método chamado antes de acessar uma nova rota, que não renderizará o componente</li>
            </ul>

            <p>Exemplo:</p>

            <pre>
const userComponent = {
  template: '&#60;div&#62;User&#60;/div&#62;',
  beforeRouteEnter: (to, from, next) => {
    // O que fazer antes do componente ser renderizado
  },
  beforeRouteUpdate: (to, from, next) => {
    // O que fazer antes de a rota deste componente ser alterada
  },
  beforeRouteLeave: (to, from, next) => {
    // O que fazer antes de acessar uma nova rota
  }
}
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