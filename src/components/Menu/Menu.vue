<template>

    <v-app-bar
      absolute
      color="#303f9f!important"
      dark
      shrink-on-scroll
      :src="figImage"
      scroll-target="#scrolling-techniques"
    >
        <v-row >        
            <v-btn text small  class="button-main-menu">
                <strong>Bem Vindo</strong>
            </v-btn>
            <v-btn text small  class="button-main-menu">
                <strong>Interesses</strong>
            </v-btn>
            <v-btn text small  class="button-main-menu">
                <strong>Currículo</strong>
            </v-btn>    
            <v-btn text small  class="button-main-menu">
                <strong>Contato</strong>
            </v-btn>
        </v-row>
        
        <v-toolbar-title>Jonathan Morris Samara - Desenvolvedor de Sistemas Web</v-toolbar-title>

    </v-app-bar>  
    
</template>

<style lang="sass">
    @import "./Menu.scss"
</style>

<script src="./Menu.js"></script>