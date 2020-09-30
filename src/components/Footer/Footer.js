import image from "./assets/linkedinlogo.jpeg";

export default {
    props:{
        content:{
            type:Object ,
            required:true
        }        
    },
    data() {
        return {
            linkedinImage:image
        }
    }
}