<template>
    <div class="pokemon-card">
        <img :src="pokemon.front_default" alt="" :class="{ 'pokemon-img': true, blur: !isDiscovered }">
        <div v-if="isDiscovered">
            {{ pokemon.name }}
        </div>
        <div v-else class="pokemon-card">
            <input type="text" v-model="name" @keyup.Enter="validate()">
            <br>
            <button @click="validate()">Descubrir</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        pokemon: {
            type: Object,
            require: true,
        },
        isDiscovered: {
            type: Boolean,
            require: true
        }
    },
    data() {
        return {
            name: null
        }
    },
    mounted() {
    },
    methods: {
        validate() {
            if (this.name != this.pokemon.name) return alert('Te has equivocado, ¡intenta denuevo!');

            this.$emit('name-success', this.name);
        }
    }
}
</script>

<style scoped>
.pokemon-img {
    width: 150px;
    height: 150px;
    margin: auto;
}

.blur {
    filter: blur(10px) grayscale(100%)
}

.pokemon-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 10px;
}
</style>