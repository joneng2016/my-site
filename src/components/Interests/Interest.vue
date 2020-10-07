<template>
    <div class="body-interest">
        <h1>{{content.generalTitleOfInterest}}</h1>
        <div class="interest-topic" v-for="element of content.interest" :key="element.title" >
            <article>
                <h2>{{element.title}}</h2>
                <p class="body-article">{{element.description}}</p>
            </article>
        </div>
    </div>
</template>

<script src="./Interest.js"></script>

<style lang="sass">
  @import "./Interest.scss"
</style>
