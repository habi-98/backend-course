<template>
    <div class="header">
        <h1>shop</h1>
        <nav class="main-nav">
            <li class="main-nav__item">
                <router-link>categories</router-link>
            </li>
            <li class="main-nav__item">products</li>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>