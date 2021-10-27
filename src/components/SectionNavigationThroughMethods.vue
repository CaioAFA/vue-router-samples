<template>
    <div>
        <PageTitle title="Navegando por métodos" />

        <PageContentText>
            <p>Além do router-link, podemos navegar através de métodos:</p>

            <ul>
                <li>
                    <b>this.$router.push('new-route-pushed')</b>: Método que muda a URL atual, adicionando uma nova informação para o histórico do navegador.
                    <br>
                    <button
                        @click="this.$router.push('new-route-pushed')"
                    >Push!</button>
                </li>

                <li>
                    <b>this.$router.replace('new-route-replaced')</b>: Método que muda a URL atual, mas não adiciona uma nova informação para o histórico.
                    <br>
                    <button
                        @click="this.$router.replace('new-route-replaced')"
                    >Replace!</button>
                </li>

                <li>
                    <b>this.$router.go()</b>: Método que volta ou avança uma página já acessada. Se informarmos -1 para ele, voltaremos para a última página. Se informarmos 1, avançaremos para a página seguinte.
                    <br>
                    <button
                        @click="this.$router.go(-1)"
                    >Go -1!</button>

                    <button
                        @click="this.$router.go(1)"
                    >Go +1!</button>
                </li>

            </ul>
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