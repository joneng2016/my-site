<template>
    <div class="body-interest">
        <h1>element</h1>
        <div class="interest-topic" v-for="element of content.interest" :key="{{element.key}}" >
            <article>
                <h2>{{element.title}}</h2>
                <p>{{element.description}}</p>
            </article>
        </div>
    </div>
</template>

<script src="Interest.js"></script>