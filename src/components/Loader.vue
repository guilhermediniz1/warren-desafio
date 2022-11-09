<script setup lang="ts"></script>

<template>
    <div class="loader-container">
        <div class="square">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
    </div>
</template>

<style>
.loader-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
}

.square {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;

    padding: 1rem 1.5rem;

    border-radius: 1.5rem;

    background-color: var(--brand-primary);
}
.bar {
    width: .8rem;
    height: 3rem;

    border-radius: .2rem;

    background-color: white;
}

.bar:nth-child(1) {
    transform-origin: bottom;
    animation: oscillate 1s .4s ease-in alternate infinite;
}

.bar:nth-child(2) {
    transform-origin: bottom;
    animation: oscillate 1s .2s ease-in alternate infinite;
}

.bar:nth-child(3) {
    transform-origin: bottom;
    animation: oscillate 1s ease-in alternate infinite;
}

@keyframes oscillate {
    to {
        transform: scaleY(.4);
    }
}
</style>