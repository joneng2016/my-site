<template>
    <div class="body-interest">
        <h1>{{content.generalTitleOfInterest}}</h1>
        <div class="interest-topic" v-for="element of content.interest" :key="element.title" >
            <article>
                <h2 class="style_of_h2">
                    {{element.title}}
                </h2>
                <div class="disposition-paragraph">
                    <div class="box-of-div-fig">
                        <v-img 
                            :src="element.figure" 
                            height="160px" 
                            width="200px"
                            class="style-of-figure" 
                        >
                        </v-img>
                        <div>
                            <center>
                                <a 
                                    class="link-design"
                                    :href="element.linkName"
                                >

                                    <strong>
                                        {{element.nameLink}}
                                    </strong>                                    
                                </a>
                            </center>                                
                        </div>
                    </div> 
                    <p class="body-article">
                        {{element.description}}
                    </p>
                </div>                    
            </article>
        </div>
    </div>
</template>

<script src="./Interest.js"></script>

<style lang="sass">
  @import "./Interest.scss"
</style>
