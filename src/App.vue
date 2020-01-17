<template>
    <div>
        我是app
         <router-link to='/add'>去</router-link>>
        <router-view></router-view>
       
    </div>
</template>

<script>

import {api } from '../assets/api'
export default {
    data() {
        return {
           
        }
    },
    mounted() {
        console.log(api)
    },
}
</script>

<style  scoped>
div{
    background: red
}
</style>