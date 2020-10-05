import WelcomeStructure from "./components/WelcomeStructure/WelcomeStructure.vue";
import Footer from "./components/Footer/Footer.vue"
import Menu from "./components/Menu/Menu.vue";
import generalInformation from "./artefacts/generalInformation";

export default {
    data() {
        return {
            generalState:"welcome",
            content:{}
        } 
    },
    created( ){
        this.content = generalInformation()
    },
    methods: {
        setGeneralState(generalState) {
            this.generalState = generalState
        }
    },
    components:{
        "main-menu":Menu,
        "welcome-structure":WelcomeStructure,
        "footer-component":Footer
    }
}