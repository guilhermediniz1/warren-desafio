<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import Transaction from './Transaction.vue';
import Modal from './Modal.vue'

interface Transaction {
    amount: number,
    date: string,
    description: string,
    from: string,
    id: string,
    status: string,
    title: string,
    to: string
}

// Transactions
let transactions: Transaction[] = reactive([])

onMounted(() => {
    fetch('https://warren-transactions-api.herokuapp.com/api/transactions')
        .then(res => res.json())
        .then(data => data.forEach((el: Transaction) => transactions.push(el)) )
})

function handleTransactionClick(id: string) {
    toggleModal()
    selectedId.value = id
}

function toggleModal() {
    isModalOpen.value = !isModalOpen.value
}

// Modal
const isModalOpen = ref(false)
const selectedId = ref('')
</script>

<template>
    <div class="container">
        <Transaction
          v-for="transaction in transactions"
          :id="transaction.id"
          :amount="transaction.amount"
          :date="transaction.date"
          :description="transaction.description" 
          :from="transaction.from"
          :to="transaction.to"
          :status="transaction.status"
          :title="transaction.title" 
          @transactionClick="(id) => handleTransactionClick(id)"  
          />
    </div>
    <Modal v-if="isModalOpen" :id="selectedId" @closeModal="toggleModal()"/>
</template>

<style scoped>
.container {
    display: grid;
    gap: 1.5rem;
}
</style>