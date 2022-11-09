<script setup lang="ts">
import { onMounted } from 'vue';
import Search from './components/Search.vue'
import TransactionList from './components/TransactionList.vue';
import Loader from './components/Loader.vue';

import useTransactionStore from './stores/transactionStore';

// Store
const transactionStore = useTransactionStore()

onMounted(() => {
    transactionStore.init()
})

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
        <div class="container">
            <TransactionList v-if="transactionStore.isTransactionLoaded" />
            <Loader v-else />
        </div>
    </main>
</template>
<style scoped>
.header {
    min-height: 4rem;

    padding-inline: 1.5rem;

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
    max-width: 40rem;
    margin: 0 auto;

    padding: 1rem 1.5rem;
}

.container {
    padding-top: 1.5rem;
}

@media only screen and (min-width: 40rem){
    .header {
        padding-inline: 3rem;
    }
    .content {
        padding: 1rem 3rem;
    }
}
</style>
