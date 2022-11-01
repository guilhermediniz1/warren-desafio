<script setup lang="ts">
</script>

<template>
    <form class="search" action="">
        <input class="search__input" type="text" name="search" id="search" placeholder="Pesquisar" autocomplete="off">
        <button class="search__submit" type="submit">
            <font-awesome-icon class="fa-lg" icon="fa-solid fa-magnifying-glass" />
        </button>
    </form>
</template>

<style scoped>

.search {
    position: relative;
    width: fit-content;
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

</style>