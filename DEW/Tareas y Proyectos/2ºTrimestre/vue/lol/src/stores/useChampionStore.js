import { defineStore } from "pinia";

export const useChampionStore = defineStore('champion', {
    state: () => ({
        selectedChampion: null,
        experience: 0,
    }),
    actions: {
        selectedChampion(champion) {
            this.selectedChampion = champion;
        },
        gainExperience(amount) {
            this.experience = amount
        },
    },
    getters: {
        powerLevel: (state) => {
            return Math.floor(state.experience / 100);
        },
    },
});