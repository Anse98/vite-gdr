<template >
    <section class="flex-grow-1 d-flex align-items-center justify-content-center">
        <div class="bg-image p-3 rounded d-flex flex-column align-items-center">
            <p class="text-white-50">E' una semplice pagina di personaggi cazzuti
            </p>
            <div class="home-btn d-flex justify-content-center">
                <router-link :to="{ name: 'characters.index' }">
                    <span class="btn btn-sm main-btn-background text-light">Personaggi</span>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
</script>

<style lang="scss" scoped>
.bg-image {
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.0)), url('../images/background.png');
    background-repeat: no-repeat;
    background-position: left;
    position: relative;
    background-size: contain;
}

.home-btn {
    width: 200px;
    border-right: solid 2px;
    border-left: solid 2px;
}
</style>