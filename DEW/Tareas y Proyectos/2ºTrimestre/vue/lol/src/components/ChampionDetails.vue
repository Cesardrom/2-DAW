<template>
    <div class="mt-4">
        <h2>Detalles de {{ champion.name }}</h2>
        <p>Rol: {{ champion.role }}</p>
        <p>Vida: {{ champion.stats.health }}</p>
        <p>Daño: {{ champion.stats.damage }}</p>
        <p>Nivel de Poder: {{ powerLevel }}</p>
        <button class="btn btn-success" @click="gainExperience(50)">Ganar Experiencia</button>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useChampionStore } from '@/stores/useChampionStore';

export default {
    props: {
        champion: Object,
    },
    setup(props) {
        const championStore = useChampionStore();

        const powerLevel = computed(() => championStore.powerLevel);
       
        const gainExperience = (amount) => {
            championStore.gainExperience(amount);
        };

        return { powerLevel, gain Experience };
    },
};
</script>