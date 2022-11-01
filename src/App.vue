<script setup lang="ts">
import Search from './components/Search.vue'
</script>

<template>
    <header class="header">
        <div class="header__wrapper">
            <img class="header__logo" src="./assets/images/logo.png" alt="">
        </div>
    </header>
    <main class="content">
        <div>
            <Search />
        </div>
        <div class="container"></div>
    </main>
</template>
<style scoped>
.header {
    min-height: 4rem;

    padding-inline: 3rem;

    display: flex;
    align-items: center;
}

.header__wrapper {
    width: 100%;
    max-width: 1280px;

    margin: 0 auto;
}

.header__logo {
    width: 3rem;
}

.content {
    padding: 1rem 3rem;
}
</style>
