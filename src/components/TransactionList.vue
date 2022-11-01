<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import Transaction from './Transaction.vue';

interface Transaction {
    amount: Number,
    date: String,
    description: String,
    from: String,
    id: String,
    status: String,
    title: String,
    to: String
}

let transactions: Transaction[] = reactive([])

onMounted(() => {
    fetch('https://warren-transactions-api.herokuapp.com/api/transactions')
        .then(res => res.json())
        .then(data => data.forEach((el: Transaction) => transactions.push(el)) )
})
</script>

<template>
    <div class="container">
        <Transaction
          v-for="transaction in transactions"
          key="transaction.id"
          :amount="transaction.amount"
          :date="transaction.date"
          :description="transaction.description" 
          :from="transaction.from"
          :to="transaction.to"
          :status="transaction.status"
          :title="transaction.title" />
    </div>
</template>

<style scoped>
.container {
    display: grid;
    gap: 1.5rem;
}
</style>