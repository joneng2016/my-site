import image from "./assets/menu_bar.jpg";

export default {
    props: {
        content:{
            type:Object ,
            required:true
        }
    },
    data() {
        return { 
            figImage:image
        }
    },
    methods: {
        changeComponent(typeOfComponent) {
            this.$emit("setGeneralState",typeOfComponent)
        }
    }
}