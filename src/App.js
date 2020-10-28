import WelcomeStructure from "./components/WelcomeStructure/WelcomeStructure.vue";
import Footer from "./components/Footer/Footer.vue"
import Menu from "./components/Menu/Menu.vue";
import Interest from "./components/Interests/Interest.vue";
import Curriculo from "./components/Curriculo/Curriculo.vue"
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
        "footer-component":Footer,        
        "interest":Interest,
        "curriculo":Curriculo
    }
}