<template>
    <div class="layouts">
        <Header/>
        <router-view />
    </div>


</template>


<script>
    import Header from "../components/Header";
    export default {
        components: {Header},
        name: 'MainLayouts'
    }
</script>