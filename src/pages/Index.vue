<template>
    <section>

        <div class="container py-5 text-center">
            <h1 class="color-red">I nostri personaggi</h1>
        </div>

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-3 p-3" v-for="character in characters" :key="character.id">
                    <div class="card bg-dark-grey border-secondary h-100" style="width: 18rem;">

                        <div class="card-body text-center">
                            <h5 class="card-title color-red">{{ character.name }}</h5>
                            <p class="card-text text-white-50"><i>{{ character.bio }}</i></p>
                        </div>

                        <div class="list-group list-group-flush ">

                            <div v-if="character.type"
                                class="list-group-item d-flex justify-content-center bg-dark-grey text-white">
                                <span class="badge border"><b>{{ character.type.name }}</b></span>
                            </div>
                            <div v-else class="list-group-item d-flex justify-content-center bg-dark-grey text-light">
                                <p class="mb-0"><b>Nessun classe associata</b></p>
                            </div>


                            <div v-if="character.items.length > 0"
                                class="list-group-item d-flex justify-content-center gap-2 flex-wrap bg-dark-grey text-light">
                                <span v-for="item in character.items" class="badge rounded-pill text-bg-dark"><b>{{
                                    item.name }}</b>
                                </span>
                            </div>
                            <div v-else class="list-group-item d-flex justify-content-center bg-dark-grey text-light">
                                <p class="mb-0"><b>Nessun oggetto associato</b></p>
                            </div>
                        </div>
                    </div>
                    <!-- </div> -->
                </div>
            </div>
        </div>

    </section>
</template>

<script>
import axios from 'axios';

export default {

    data() {
        return {
            characters: [],
            base_url: 'http://127.0.0.1:8000/api'
        }
    },

    methods: {
        fetchCharacters() {
            axios.get(`${this.base_url}/characters`).then((res) => {
                console.log(res.data)
                this.characters = res.data.results;
            })
        }
    },

    created() {
        this.fetchCharacters();
    }
}

</script>

<style lang="scss" scoped></style>