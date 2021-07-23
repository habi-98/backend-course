<template>
    <div class="products">
        <div class="container">
            <h1>products</h1>
        </div>

    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    export default {
        name: 'Products',
        methods: {
            ...mapActions(['fetchProducts'])
        },
        computed: {
          ...mapState({
              products: state => state.products
          })
        },
        mounted() {
            this.fetchProducts()
        }
    }
</script>