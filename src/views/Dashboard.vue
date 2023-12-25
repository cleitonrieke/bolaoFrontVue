<script setup>
import { ref } from 'vue';
import http from '../http-common.js'
import Bolao from '../models/bolao.js'

let participantes = ref([])

const initialize = (participantes) => {    
    console.log(participantes)
    http.get('/boloes').then((res) => {
        console.log(res.data)
        participantes.value = res.data        
    })
}

initialize(participantes)
</script>
<template>
    
        <table class="table table-striped">
            <thead>
                <tr class="table-dark">
                    <th>#</th>
                    <th>Nome</th>
                    <th>Números</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in participantes">
                    <td>{{  (index+1) }}</td>
                    <td>{{ item.nome }}</td>
                    <td>{{ item.numeros }}</td>
                </tr>
            </tbody>
        </table>
    
</template>
