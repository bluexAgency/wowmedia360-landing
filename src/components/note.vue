<script lang="ts" setup>

const props = defineProps<{
    title: string,
    subtitle: string,
}>()

</script>

<template>
    <div class="post-it">
        <div class="pin"></div>
        <strong>{{title}}:</strong><br>
        {{subtitle}}
    </div>
</template>

<style>
    .post-it {
            width: 150px;
            height: 150px;
            background-color: #a8e6cf;
            position: relative;
            padding: 15px;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
            font-family: "Arial", sans-serif;
            font-size: 14px;
            text-align: center;
            border-radius: 5px;
            transform: rotate(-5deg);
        }

        .pin {
            width: 20px;
            height: 20px;
            background-color: #ff8b94;
            border-radius: 50%;
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
        }
</style>