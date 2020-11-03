<template>
    <div class="body-curriculo">
      <template>
        <v-container>
          <v-row >
            <v-card >
              <v-img
                height="200px"
                src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
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
                  Today
                </div>

                <v-timeline
                  align-top
                  dense
                >
                  <v-timeline-item
                    v-for="message in messages"
                    :key="message.time"
                    :color="message.color"
                    small
                  >
                    <div>
                      <div class="font-weight-normal">
                        <strong>{{ message.from }}</strong> @{{ message.time }}
                      </div>
                      <div>{{ message.message }}</div>
                    </div>
                  </v-timeline-item>
                </v-timeline>
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
