import mainFig from "./assets/0.jpeg"
import backFig from "./assets/backgroundimage.jpg"

export default {
    props: {
        content:{
            type:Object ,
            required:true
        }
    },
    data() {
        return {
            generalState:"welcome",
            backFig:backFig,
            mainFig:mainFig
        } 
    }
}