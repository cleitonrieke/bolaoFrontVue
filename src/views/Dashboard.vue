<script setup>
import { ref } from 'vue';
import http from '../http-common.js'
import Bolao from '../models/bolao.js'

let participantes = ref([])
let numeros = ref([])

const initialize = (participantes) => {    
    console.log(participantes)
    http.get('/boloes').then((res) => {        
        participantes.value = res.data        
    })
    http.get('/numeros').then((res) => {      
        console.log(res.data)  
        numeros.value = res.data        
    })
}

initialize(participantes)
</script>
<template>
        <div class="row">            
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
        </div>
        <div class="row">
            &nbsp;
        </div>
        <div class="row">
            <table class="table table-striped">
                <thead>
                    <tr class="table-dark">                        
                        <th>Número</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in numeros">                        
                        <td>{{ item.numero }}</td>
                        <td>{{ item.qtd }}</td>
                    </tr>
                </tbody>
            </table>            
        </div>
    
</template>
