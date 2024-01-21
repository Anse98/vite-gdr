<script >
export default {
    props: {
        character: {
            type: Object,
            required: true
        }
    },
}
</script>

<template>
    <div class="card bg-dark-grey border-secondary" style="width: 18rem;">

        <div class="card-body text-center">
            <h5 class="card-title color-red">{{ character.name }}</h5>
            <p class="card-text text-white-50"><i>{{ character.bio }}</i></p>
        </div>

        <div class="list-group list-group-flush ">

            <div v-if="character.type" class="list-group-item d-flex justify-content-center bg-dark-grey text-white">
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
</template>

<style scoped lang="scss">
.list-group-item {
    border-color: gray;
}
</style>
