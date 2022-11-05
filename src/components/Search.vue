<script setup lang="ts">
import { Ref, ref } from 'vue';
import useTransactionStore from '../stores/transactionStore';

// Store
const transactionStore = useTransactionStore()

// Search
const searchValue:Ref<string> = ref('')
const filterValue:Ref<string> = ref('')

function handleFilter() {
    transactionStore.filterTransactions(searchValue.value, filterValue.value)
}
</script>

<template>
    <form @submit.prevent="handleFilter()" class="search" action="">
        <label class="search-container" for="search">
            <input
              class="search__input"
              type="text"
              name="search"
              id="search"
              placeholder="Pesquisar"
              autocomplete="off"
              v-model.trim="searchValue" 
              @input="handleFilter()"
              >
            <button class="search__submit" type="submit">
                <font-awesome-icon class="fa-lg" icon="fa-solid fa-magnifying-glass" />
            </button>
        </label>
        <select class="filter" name="filter" id="filter" v-model="filterValue" @change="handleFilter()">
            <option class="filter__option" value="" selected disabled>Filtrar por Status</option>
            <option class="filter__option" value="">Todos</option>
            <option class="filter__option" value="created">Solicitada</option>
            <option class="filter__option" value="processing">Processando</option>
            <option class="filter__option" value="processed">Concluída</option>
        </select>
    </form>
</template>

<style scoped>
.search {
    display: flex;
    gap: 1rem;
}
.search-container {
    position: relative;
}

.search__input {
    height: 2rem;
    padding: .5rem 1rem;
    border-radius: .5rem;
    font-family: inherit;
    font-weight: 500;
    border: none;
    outline: none;
    background-color: #ebe8e8;
}

.search__input:focus {
    outline: 2px solid #e02b57;
    outline-offset: 1px;
}

.search__submit {
    position: absolute;

    top: 50%;
    right: .5rem;
    transform: translateY(-50%);

    background-color: transparent;
    
    color: var(--brand-primary);
    
    border: none;
    cursor: pointer;
}

.filter {
    height: 2rem;

    padding: .5rem;

    font-family: inherit;
    font-weight: 700;
    color: white;

    border: none;
    border-radius: .5rem;

    background-color: var(--brand-primary);
}

.filter__option {
    font-weight: 700;
    padding: .5rem;

    border: none;
    border-radius: .5rem;
}

</style>