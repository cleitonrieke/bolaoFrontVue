<script setup>
import { ref } from 'vue';
import http from '../http-common.js'
import Bolao from '../models/bolao.js'

let cartoes = ref([])
let numero1 = ref(null)
let numero2 = ref(null)
let numero3 = ref(null)
let numero4 = ref(null)
let numero5 = ref(null)
let numero6 = ref(null)

const initialize = (cartoes) => {   
    cartoes.value = []     
    http.get('/listarcartoes').then((res) => {    
        res.data.forEach(item => {
            cartoes.value.push({indice: item.indice, numeros: item.numeros, acertos:0})
        })
    })    
}

initialize(cartoes)

function validar(){
    const result1 = parseInt(numero1.value.value)
    const result2 = parseInt(numero2.value.value)
    const result3 = parseInt(numero3.value.value)
    const result4 = parseInt(numero4.value.value)
    const result5 = parseInt(numero5.value.value)
    const result6 = parseInt(numero6.value.value)

    console.log('validando...')
    cartoes.value.forEach(item => {
        console.log(item.indice)
        let tokens = item.numeros.split(",")
        let qtdAcertos = 0
        tokens.forEach( num => {            
            const numPick = parseInt(num)
            console.log(`numero sendo batido ${numPick}`)
            if (numPick === result1 || 
                numPick === result2 ||
                numPick === result3 ||
                numPick === result4 ||
                numPick === result5 ||
                numPick === result6){
                    qtdAcertos ++
                }
        })
        item.acertos = qtdAcertos
    })
}
</script>
<template>
        <div class="container">
            <div class="row">            
                <table class="table table-striped">
                    <thead>
                        <tr class="table-dark">
                            <th>#</th>                        
                            <th>Números</th>
                            <th>Acertos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in cartoes">                  
                            <td>{{ item.indice }}</td>
                            <td>{{ item.numeros }}</td>
                            <td>{{ item.acertos }}</td>
                        </tr>
                    </tbody>
                </table>            
            </div>
        </div>
        <div class="row">        
            &nbsp;
        </div>
        <div class="row">
            <div class="col-12 ">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Numeros Sorteados</span>
                    </div>
                    <input ref="numero1" type="text" class="form-control">
                    <input ref="numero2" type="text" class="form-control">
                    <input ref="numero3" type="text" class="form-control">
                    <input ref="numero4" type="text" class="form-control">
                    <input ref="numero5" type="text" class="form-control">
                    <input ref="numero6" type="text" class="form-control">
                </div>
            </div>    
        </div>
        <div class="row">        
            <div class="col-8">
                <button type="button" class="btn btn-success" @click="validar()">Validar Resultado</button>
            </div>        
        </div>  
</template>
