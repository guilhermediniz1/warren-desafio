<script setup lang="ts">
import { defineEmits, ref } from 'vue';

const props = defineProps(['amount', 'date', 'description', 'from', 'id', 'status', 'title', 'to'])
const transactionId = ref(props.id)

const emit = defineEmits(['transactionClick'])
</script>

<template>
    <article @click="emit('transactionClick', transactionId)" class="transaction">
        <div class="transaction__content">
            <div class="transaction__info">
                <p class="transaction__title">{{ props.title }}</p>
                <p class="transaction__desc">{{ props.description}}</p>
            </div>
            <div>
                <p class="transaction__date">{{ props.date.split('-').reverse().join("/") }}</p>
                <div class="transaction__from-to">
                    <span class="transaction__account">{{props.from}}</span>
                    <font-awesome-icon icon="fa-solid fa-arrow-right" />
                    <span class="transaction__account">{{props.to}}</span>
                </div>
            </div>
        </div>
        <div>
            <p class="transaction__amount">R$ {{ props.amount }}</p>
        </div>
    </article>
</template>

<style scoped>
.transaction {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem 1.5rem;

    border-radius: .5rem;

    box-shadow: 0 8px 16px rgba(0, 0, 0, .20);

    transition: .2s all ease;

    cursor: pointer;
}

.transaction:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, .12);

}

.transaction__desc,
.transaction__date,
.transaction__account   {
    font-size: 14px;
}

.transaction__desc, .transaction__date {
    opacity: .55; 
    margin-bottom: .5rem;
}


.transaction__from-to {
    display: flex;
    align-items: center;
    gap: 8px;
}

.transaction__amount {
    font-weight: 700;
    color: var(--brand-primary);
}
</style>