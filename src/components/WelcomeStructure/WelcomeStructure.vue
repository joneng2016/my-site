<template>
    <div class="welcome">
        <v-parallax class="spefig" dark height="1000" :src="backFig" >
            <div class="contofh1">
                <center>
                    <v-img  class="mainfig" :src="mainFig"></v-img>
                    <h1 class="specific-h1">
                        {{content.welcomeInformation}}
                    </h1>
                </center>
            </div>
        </v-parallax>
    </div>        
</template>

<style lang="sass">
  @import "./WelcomeStructure.scss"
</style>

<script src="./WelcomeStructure.js"></script>