<template>
    <div class="body-curriculo">
      <template>
        <v-container>
          <v-row >
            <v-card >

              <v-img
                height="200px"
                :src="curriculo"
              >
                <v-app-bar
                  flat
                  color="rgba(0, 0, 0, 0)"
                >
                  <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

                
                  <v-spacer></v-spacer>

                  <v-btn
                    color="white"
                    icon
                  >
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </v-app-bar>
              </v-img>

              <v-card-text>

                <div class="font-weight-bold ml-8 mb-2">
                  <h3>
                    {{content.curriculo.academy.title}}
                  </h3>                    
                </div>

                <div class="list">                  
                  <ul>
                    <li class="sublist" v-for ="element in content.curriculo.academy.body" :key="element.course">
                      <ul>
                        <li>
                          {{element.institution}}
                        </li> 
                        <li>
                          {{element.course}}
                        </li> 
                        <li>
                          {{element.period}}
                        </li> 
                        <li>
                          {{element.finalDocumentName}}
                        </li> 
                      </ul>                                        
                    </li>                    
                  </ul>
                </div>
                  
              </v-card-text>

            </v-card>

          </v-row>
        </v-container>
      </template>    
    </div>
</template>

<script src="./Curriculo.js"></script>

<style lang="sass">
  @import "./Curriculo.scss"
</style>
