import { defineStore } from 'pinia';
export const navStore = defineStore({
    id:'nav',
    state: () => ({
        n: 0,
        path:'/'
    }),
    actions: {
        setN(n,path) {
            this.n = n;
            this.path = path
        },
    },
});