<template>
    <div>
        <PageTitle title="Parâmetros de rotas" />

        <PageContentText>
            <p>Podemos passar parâmetros para uma URL e recuperá-los em nossa aplicação.</p>

            <p>Um exemplo comum: imagine que na URL passamos o ID de um usuário para acessar a página dele. Dessa forma, passamos o parâmetro pela URL, tornamos a rota dinâmica!</p>

            <p>Para passar parâmetros para as rotas, devemos editar o arquivo que contém as rotas da aplicação. Passamos os parâmetros dentro da propriedade "path". Observe o exemplo abaixo:</p>
            <pre>{
    path: '/cars/<b>:name</b>',
    component: ...
}           </pre>

            <p>Nesse caso, definimos um parâmetro <b>name</b>, o qual podemos recuperar da seguinte forma:</p>

            <p>$route.params.<b>name</b></p>

            <p>Para parâmetros opcionais, confira o exemplo abaixo:</p>

            <pre>{
    path: '/cars/<b>:myCustomParameter?</b>',
    component: ...
}           </pre>

            <p>Basta adicionar "?" para informar que o parâmetro pode ser vazio.</p>

            <hr>

            <b>Propriedades do objeto $route</b>

            <ul>
                <li><b>$route.path</b>: O caminho da rota. Exemplo: "/users"</li>
                <li><b>$route.fullPath</b>: O caminho da rota junto com a URL completa. Exemplo: "https://hcode.com.br/users"</li>
                <li><b>$route.query</b>: Um objeto que contém os valores informados na query string da URL. Exemplo: "/users?name=Joao&age=30"</li>
                <li><b>$route.redirectFrom</b>: Se a rota atual tiver vindo de um redirect, essa propriedade mostrará de qual URL ela veio</li>
                <li><b>$route.name</b>: O nome da rota, se tivermos definido um</li>
                <li><b>$route.hash</b>: O hash da rota</li>
            </ul>
            
            <hr>

            <b>Exemplo de utilização:</b>

            <p>Acesse a seguinte URL e, se quiser, edite o parâmetro passado para ver os resultados: </p>

            <router-link to="/parameters/sample/abc">Abc</router-link>
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