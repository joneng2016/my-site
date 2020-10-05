<template>

    <v-app-bar
      absolute
      color="#303f9f!important"
      dark
      shrink-on-scroll
      :src="figImage"
      scroll-target="#scrolling-techniques"
    >
        <v-row class="specific-width-menu">        
            <v-btn text small  class="button-main-menu" v-on:click="changeComponent('welcome')" >
                <strong>{{content.buttonOne}}</strong>
            </v-btn>
            <v-btn text small  class="button-main-menu" v-on:click="changeComponent('whatilike')">
                <strong>{{content.buttonTwo}}</strong>
            </v-btn>
            <v-btn text small  class="button-main-menu" v-on:click="changeComponent('curriculum')" >
                <strong>{{content.buttonThree}}</strong>
            </v-btn>    
            <v-btn text small  class="button-main-menu" v-on:click="changeComponent('contact')">
                <strong>{{content.buttonFor}}</strong>
            </v-btn>         
        </v-row>
        
        <v-toolbar-title>{{content.mainTitle}}</v-toolbar-title>

    </v-app-bar>  
    
</template>

<style lang="sass">
    @import "./Menu.scss"
</style>

<script src="./Menu.js"></script>