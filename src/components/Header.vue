<template>
    <header class="border-bottom border-secondary position-sticky start-0 end-0 top-0 z-3 bg-dark-grey">

        <div class="container">
            <div class="d-flex justify-content-between align-items-center">

                <div class="header-image">
                    <router-link :to="{ name: 'home' }" class="text-decoration-none color-light-grey">
                        <img class="header-logo" src="/src/images/header-logo.png" alt="">
                    </router-link>
                </div>

                <nav>
                    <ul class="d-flex gap-3">

                        <li>
                            <router-link :to="{ name: 'characters.index' }"
                                class="text-decoration-none color-light-grey"><b>Personaggi</b>
                            </router-link>
                        </li>

                    </ul>
                </nav>
            </div>
        </div>

    </header>
</template>

<style lang="scss">
.header-logo {
    width: 150px;
}
</style>
