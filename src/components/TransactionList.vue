<script setup lang="ts">
import { ref } from 'vue';
import Transaction from './Transaction.vue';
import useTransactionStore from '../stores/transactionStore'
import Modal from './Modal.vue'

// Store
const transactionStore = useTransactionStore()

// Transactions
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
          v-for="transaction in transactionStore.visibleTransactions"
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