import Menu from "./components/Menu/Menu.vue";
import WelcomeStructure from "./components/WelcomeStructure/WelcomeStructure.vue";

export default {
    data() {
        return {
            generalState:"welcome"
        } 
    },
    components:{
        "main-menu":Menu,
        "welcome-structure":WelcomeStructure
    }
}