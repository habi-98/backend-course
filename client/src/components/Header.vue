<template>
    <div class="header">
        <h1>shop</h1>
        <nav class="main-nav">
            <ul class="main-nav__ul">
                <li class="main-nav__item">
                    <router-link to="/">categories</router-link>
                </li>
                <li class="main-nav__item"><router-link to="/">products</router-link></li>
            </ul>

        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>