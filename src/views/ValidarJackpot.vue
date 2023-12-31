<script setup>
import { ref } from 'vue';
import http from '../http-common.js'
import Bolao from '../models/bolao.js'

let participantes = ref([])
let numero1 = ref(null)
let numero2 = ref(null)
let numero3 = ref(null)
let numero4 = ref(null)
let numero5 = ref(null)
let numero6 = ref(null)
let selecionados = ref([])

const initialize = (participantes) => {   
    participantes.value = []     
    http.get('/boloes').then((res) => {    
        let indice = 0
        res.data.forEach(item => {
            const numerosOrdenados = item.numeros.split(',')            
            numerosOrdenados.sort((a, b) => { return a - b})
            
            participantes.value.push({indice: indice, nome: item.nome, numeros: numerosOrdenados.toString(), acertos:0})
            indice++
        })
    })    
}

initialize(participantes)

function validar(){
    const result1 = parseInt(numero1.value.value)
    const result2 = parseInt(numero2.value.value)
    const result3 = parseInt(numero3.value.value)
    const result4 = parseInt(numero4.value.value)
    const result5 = parseInt(numero5.value.value)
    const result6 = parseInt(numero6.value.value)

    participantes.value.forEach(item => {
        
        let tokens = item.numeros.split(",")
        let qtdAcertos = 0
        tokens.forEach( num => {            
            const numPick = parseInt(num)
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
    participantes.value.sort((p1, p2) => (p1.acertos < p2.acertos) ? 1 : (p1.acertos > p2.acertos) ? -1 : 0)
}
function manter(){
    
    const participantesAux = []

    let ix = 0
    participantes.value.forEach(item => {
        if (selecionados.value.includes(item.indice)){
            participantesAux.push(item)
            ix++
        }
    })
    participantes.value = participantesAux
}
</script>
<template>
     <div class="container">
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
                <button type="button" class="btn btn-success" @click="validar()">Validar Jackpot</button>
                &nbsp;
                <button type="button" class="btn btn-success" @click="manter()">Manter</button>
            </div>        
        </div>      
        <div class="row">        
            &nbsp;
        </div>
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
                    <tr v-for="item in participantes">                  
                        <td><input name="indice" v-model="selecionados" class="form-check-input" type="checkbox" :value="item.indice"></td>
                        <td>{{ item.indice }}</td>
                        <td>{{ item.nome }}</td>
                        <td>{{ item.numeros }}</td>
                        <td>{{ item.acertos }}</td>
                    </tr>
                </tbody>
            </table>            
        </div>
    </div>        
</template>
