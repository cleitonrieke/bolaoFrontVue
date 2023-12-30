<script setup>
import { ref } from 'vue';
import Cartao from '../models/cartao.js'
import http from '../http-common.js'

const selecaoQtdCartoes = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
const selecaoQtdNumeros = ref([6, 7, 8, 9, 10])
const campoSelecaoQtdCartoes = ref(null)
const campoSelecaoQtdNumeros = ref(null)
let qtdCartoes = ref(null)
let qtdNumeros = ref(null)
let cartoes = ref([])

function gerarLinhasCartoes(){
    qtdCartoes.value = parseInt(campoSelecaoQtdCartoes.value.value)
    qtdNumeros.value = parseInt(campoSelecaoQtdNumeros.value.value)
    console.log(`passei aqui ${qtdCartoes} e ${campoSelecaoQtdCartoes.value.value} e ${campoSelecaoQtdNumeros.value.value}`)
} 
function gerarColunasCartao(){
    qtdNumeros.value = parseInt(campoSelecaoQtdNumeros.value.value)
}
function setReferenciaCartao(el, i, item){    
    if (el){
        if (i == 1){
            cartoes.value[item-1] = []
        }
        cartoes.value[item-1].push({ "cartao": item, "numero": i, "ref": el })
        console.log(`${i} e ${item}`)
    }
}
function registrarCartoes(){        
    const jogos = []
    cartoes.value.forEach(item => {
        let indiceCartao = 0
        let numeros = ""
        item.forEach(num => {
            if (num.ref.value.trim() != ""){
                indiceCartao = num.cartao
                if (num.numero > 1){
                    numeros = numeros + ", "
                }
                numeros = numeros + num.ref.value
            }            
        })        
        if (indiceCartao > 0){
            const cartao = new Cartao(indiceCartao, numeros)
            console.log(`cartao gerado: ${cartao.indice} e ${cartao.numeros}`)
            jogos.push(cartao)
        }
    })
    
    http.post('/registrarcartoes', jogos)
}
</script>
<template>
    <div class="container">
        <div class="row">            
            <div class="col-12 offset-md-2">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Quantidade de Cartões</span>
                    </div>
                    <select ref="campoSelecaoQtdCartoes" class="form-select" aria-label="Selecione Qtd de Cartões" @change="gerarLinhasCartoes()">                    
                        <option v-for="(item, index) in selecaoQtdCartoes" v-bind:value="item">{{ item }}</option>                    
                    </select>
                </div>
            </div>       
        </div>            
        <div class="row">            
            <div class="col-12 offset-md-2">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Quantidade de Números</span>
                    </div>
                    <select ref="campoSelecaoQtdNumeros" class="form-select" aria-label="Selecione Qtd de Cartões" @change="gerarColunasCartao()">                    
                        <option v-for="(item, index) in selecaoQtdNumeros" v-bind:value="item">{{ item }}</option>                    
                    </select>
                </div>
            </div>       
        </div>            
        <div class="row">            
            <div class="col-12 offset-md-2" v-for="item in qtdCartoes">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Cartão {{  item }}</span>
                    </div>
                    <input v-for="i in qtdNumeros" type="text" class="form-control" :ref="(el) => setReferenciaCartao(el, i, item)">
                </div>
            </div>       
        </div>       
        <div class="row">        
            <div class="col-8 offset-md-2">
                <button type="button" class="btn btn-success" @click="registrarCartoes()">Registrar Cartoes</button>
            </div>        
        </div>    
    </div>
</template>
