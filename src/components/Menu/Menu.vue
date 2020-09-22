<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#303f9f!important"
      dark
      shrink-on-scroll
      prominent
      scroll-target="#scrolling-techniques"
    >
        <v-row>
            <v-btn text small>
                Seja Bem Vindo
            </v-btn>
            <v-btn text small  class="button-main-menu">
                Currículo
            </v-btn>    
            <v-btn text small  class="button-main-menu">
                Contato
            </v-btn>
        </v-row>
        
            <v-toolbar-title>Jonathan Morris Samara - Desenvolvedor de Sistemas Web</v-toolbar-title>

        
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1000px;"></v-container>
    </v-sheet>
  </v-card>
</template>

<style>
    @import "./Menu.scss";
</style>