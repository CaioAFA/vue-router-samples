<template>
    <div>
        <PageTitle title="Transições entre rotas" subtitle="Arquivo src/components/SectionRoutesTransition.vue" />

        <PageContentText>

            <p>Quando há uma mudança de rotas, pode ser interessante adicionar algum tipo de transição para que ela fique mais agradável.</p>

            <p>Podemos fazer isso juntando os conceitos dos componentes &#60;transition&#62; e &#60;router-view&#62;.</p>

            <p>Confira como esse efeito é feito nesse projeto no arquivo <b>src/components/PageContent.vue</b> (responsável por renderizar essa parte do site).</p>

            <p>Preste atenção nas Tags utilizadas e no estilo CSS da transição!</p>

            <p><b>OBS:</b> Utilize de preferência a transição com modo "out-in", pois deixa a transição de maneira bem mais suave!</p>
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