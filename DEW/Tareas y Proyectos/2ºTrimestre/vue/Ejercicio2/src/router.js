import {createRouter, createWebHistory} from "vue-router"
import Contacto from "./components/Contacto.vue"
import Habilidades from "./components/Habilidades.vue"
import Proyectos from "./components/Proyectos.vue"
import SobreMi from "./components/SobreMi.vue"
import Experiencias from "./components/Experiencias.vue"

const routes =[
    {path: "/", redirect:'/sobremi'},
    {path: "/sobremi", component:SobreMi},
    {path: "/contacto", component:Contacto},
    {path: "/habilidades", component:Habilidades},
    {path: "/proyectos", component:Proyectos},
    {path: "/experiencias", component:Experiencias},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;