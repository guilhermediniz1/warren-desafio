<script setup lang="ts">
import { ref, reactive, onBeforeMount } from 'vue';
import ProgressBar from './ProgressBar.vue'
import { onClickOutside } from '@vueuse/core'

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

enum Status {
    created = '7%',
    processing = '52%',
    processed = '100%'
}

const props = defineProps(['id'])
const emit = defineEmits(['closeModal'])

const modalRef = ref(null)
const modalData: Transaction = reactive({
    amount: 0,
    date: '',
    description: '',
    from: '',
    id: '',
    status: '',
    title: '',
    to: '',
})

onBeforeMount(() => {
    fetch(`https://warren-transactions-api.herokuapp.com/api/transactions/${props.id}`)
        .then(res => res.json())
        .then((data: Transaction) => {
            modalData.id = data.id,
                modalData.title = data.title
                modalData.description = data.description,
                modalData.status = data.status,
                modalData.amount = data.amount,
                modalData.date = data.date,
                modalData.from = data.from,
                modalData.to = data.to
        })
})

onClickOutside(modalRef, () => emit('closeModal'))
</script>

<template>
    <div class="container">
        <div ref="modalRef" class="modal">
            <button @click="emit('closeModal')" type="button" class="modal__close-button">
                <font-awesome-icon class="modal__close-icon fa-2xl" icon="fa-solid fa-circle-xmark" />
            </button>
            <h2 class="modal__title">{{ modalData.title }}</h2>
            <div class="progress-bar">
                <div class="progress-bar__bar">
                    <div class="progress-bar__progress" :style="`width: ${modalData.status === 'created' ? Status.created : modalData.status === 'processing' ? Status.processing : Status.processed};`">
                        <div class="progress-bar__bullet"></div>
                    </div>
                </div>
                <div class="progress-bar__status">
                    <p>Solicitada</p>
                    <p>Processando</p>
                    <p>Concluída</p>
                </div>
            </div>
            <div class="modal__info-container">
                <div class="modal__from">
                    <h3 class="modal__strong-text">Transferindo de</h3>
                    <div class="modal__account-info">
                        <p>{{ modalData.from }}</p>
                        <p class="modal__amount"> - R$ {{ modalData.amount }}</p>
                    </div>
                </div>
                <div class="modal__to">
                    <h3 class="modal__strong-text">Para</h3>
                    <div class="modal__account-info">
                        <p>{{ modalData.to }}</p>
                        <p class="modal__amount"> + R$ {{ modalData.amount }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    display: grid;
    place-content: center;

    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    background: rgba(255, 255, 255, 0.23);
}

.modal {
    position: relative;

    width: 90vw;
    max-width: 40rem;

    padding: 1rem 1.5rem 4rem;

    border-radius: 1rem;
    border: 1px solid var(--brand-primary);

    box-shadow: 0 8px 16px rgba(0, 0, 0, .20);
    background-color: white;
}

.modal__close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;

    background: transparent;
    border: none;

    cursor: pointer;
}

.modal__close-icon {
    color: var(--brand-primary);
}

.modal__title {
    text-align: center;

    margin-bottom: 2rem;
}

.modal__info-container {
    padding-top: 1.5rem;
}

.modal__from,
.modal__to {
    padding: 1rem 0;
}

.modal__divider {
    background-color: var(--brand-primary);
}

.modal__strong-text {
    padding-right: 2rem;

    font-size: 1.5rem;

    text-decoration: underline;
    text-decoration-color: var(--brand-primary);
    text-underline-offset: 2px;
}

.modal__account-info {
    margin-top: .5rem;

    display: flex;
    justify-content: space-between;
}

.modal__amount {
    font-weight: 700;
    color: var(--brand-primary);
}

.progress-bar {
    width: 100%;
    margin: 0 auto;
}
.progress-bar__bar {
    position: relative;

    width: 90%;
    height: 1.5rem;

    margin: 0 auto;

    border-radius: 1rem;

    background-color: #ebe8e8;
}

.progress-bar__progress {
    position: absolute;
    top: 0;
    left: 0;

    width: 7%;
    height: 100%;
    padding-right: .2rem;
    border-radius: 1rem;

    display: flex;
    align-items: center;
    justify-content: end;

    background-color: var(--brand-primary);

    transition: .4s all ease;
}

.progress-bar__bullet {
    width: 1rem;
    height: 1rem;
    border-radius: 1.5rem;

    background-color: white;
}

.progress-bar__status {
    padding-top: .5rem;

    display: flex;
    justify-content: space-between;
}
</style>