<template>
    <div class="container">
        <h1>Selecciona tu Campeón</h1>
        <div class="row">
            <div class="col-md-4" v-for="champion in champions" :key="champion.id">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{ champion.name }}</h5>
                        <p class="card-text">Rol: {{ champion.role }}</p>
                        <button class="btn btn-primary" @click="selectChampion(champion)">Seleccionar</button>
                    </div>
                </div>
            </div>
        </div>
        <ChampionDetails v-if="selectedChampion" :champion="selectedChampion" />
    </div>
</template>

<script>
import { ref } from 'vue';
import { useChampionStore } from '@/stores/useChampionStore';
import ChampionDetails from './ChampionDetails.vue';

export default {
    components: { ChampionDetails },
    setup() {
        const championStore = useChampionStore();
        const champions = ref([
            { id: 1, name: 'Garen', role: 'Luchador', stats: { health: 620, damage: 70 } },
            { id: 2, name: 'Lux', role: 'Mago', stats: { health: 500, damage: 60 } },
            { id: 3, name: 'Ashe', role: 'Tirador', stats: { health: 550, damage: 65 } },
        ]);

        const selectChampion = (champion) => {
            championStore.selectChampion(champion);
        };

        return { champions, selectChampion, selectedChampion: championStore.selectedChampion };
    },
};
</script>