<template>
    <div class="body-footer">
        <div class="content-footer">
            <center>
                <h2>{{content.titleFooter}}</h2>

                <div class="information-footer">
                    <p><strong>{{content.function}}</strong></p>
                    <p>{{content.specialistLanguage}}</p>
                    <p>{{content.email}}</p>
                    <p>{{content.cellPhoneOne}}</p>
                    <p>{{content.cellPhoneTwo}}</p>

                    <a href="https://www.linkedin.com/in/jonathan-morris-samara-3a45356a/">
                        <v-img class="linkedin-fig-img" :src="linkedinImage"></v-img>
                    </a>
                </div>
            </center>                
        </div>                    
    </div>    
</template>

<style lang="sass">
    @import "./Footer.scss"
</style>

<script src="./Footer.js"></script>