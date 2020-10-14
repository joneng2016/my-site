<template>
    <div class="body-interest">
        <h1>{{content.generalTitleOfInterest}}</h1>
        <div class="interest-topic" v-for="element of content.interest" :key="element.title" >
            <article>
                <h2>{{element.title}}</h2>
                <div class="disposition-paragraph">
                    <v-img :src="element.figure" height="200px" width="200px" ></v-img>
                    <p class="body-article">{{element.description}}</p>
                </div>                    
            </article>
        </div>
    </div>
</template>

<script src="./Interest.js"></script>

<style lang="sass">
  @import "./Interest.scss"
</style>
