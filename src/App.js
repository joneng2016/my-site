import WelcomeStructure from "./components/WelcomeStructure/WelcomeStructure.vue";
import Footer from "./components/Footer/Footer.vue"
import Menu from "./components/Menu/Menu.vue";

export default {
    data() {
        return {
            generalState:"welcome"
        } 
    },
    components:{
        "main-menu":Menu,
        "welcome-structure":WelcomeStructure,
        "footer-component":Footer
    }
}