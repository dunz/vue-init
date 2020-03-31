<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <!--            <router-link to="/about" @click.native="clickAbout">About</router-link>-->
<!--                        <router-link :to="{name:'About'}" @click.native="clickAbout">About</router-link>-->
<!--            <if-router-link :to="{name:'About'}" @condition="clickAbout">About</if-router-link>-->
            <router-link :to="{name:'About'}">asdf</router-link>
<!--            <a href="/about">A Link</a>-->
        </div>
        <router-view/>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import IfRouterLink from './IfRouterLink';

// Vue.use(IfRouterLink);

@Component({
    components: {
        IfRouterLink
    }
})
export default class App extends Vue {
    public clickAbout() {
        return true;
    }
}
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
