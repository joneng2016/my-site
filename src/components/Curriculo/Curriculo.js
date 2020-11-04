import curriculo from "../../assets/curriculo.jpg"

export default {
    props: {
        content:{
            type:Object ,
            required:true
        }
    },
    data: () => ({        
        curriculo:curriculo
    }),
    mounted: function()  {
      console.log(this.content.curriculo)
    }    
}