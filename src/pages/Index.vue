<template>
    <section>
        <div class="container py-5" v-if="characters.length > 0">
            <div class="d-flex justify-content-center text-center">
                <h1 class="color-red title w-50"><i>I nostri personaggi</i></h1>
            </div>

            <div class="py-5">
                <div class="row justify-content-center gap-5">
                    <CharacterCard v-for="character in characters" :key="character.id" :character="character"
                        class="col-3 p-3" />
                </div>
            </div>
        </div>

        <div class="container spinner-container pt-5" v-else>
            <div class="spinner"></div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import CharacterCard from '../components/CharacterCard.vue';

export default {

    data() {
        return {
            characters: [],
            base_url: 'http://127.0.0.1:8000/api'
        }
    },

    components: {
        CharacterCard
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