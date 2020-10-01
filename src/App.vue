<template>
  <div id="app">
    <v-card class="overflow-hidden">
      <main-menu 
          :content="content"
      />
      <v-sheet
        id="scrolling-techniques"
        class="overflow-y-auto"
        max-height="650"
      >
      </v-sheet>
      <div class="body-condition">
        <welcome-structure  />    
      </div>
      <div class="footer">
        <footer-component  
          :content="content"
        />
      </div>      
    </v-card>      
  </div>
</template>

<script src="./App.js">
</script>

<style lang="sass">
  @import "./style.scss"
</style>
