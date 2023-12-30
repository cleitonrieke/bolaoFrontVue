<script setup>
import { ref } from 'vue';
import http from '../http-common.js'

const campoLimiteMaiores = ref(null)
const campoLimiteMenores = ref(null)
const campoQtdCartoes = ref(null)
const campoQtdFortes = ref(null)
const campoQtdMedias = ref(null)
const campoQtdFracas = ref(null)
let cartoes = ref([])

function gerarNumeros(){    
        cartoes.value = []
        console.log('vamos gera.....')
        const urlChamada = `/geranumeros?intervalo_forte=${campoLimiteMaiores.value.value}&intervalo_fraco=${campoLimiteMenores.value.value}&qtd_cartoes=${campoQtdCartoes.value.value}&qtd_fortes=${campoQtdFortes.value.value}&qtd_medias=${campoQtdMedias.value.value}&qtd_fracas=${campoQtdFracas.value.value}`
        console.log(urlChamada)
        http.get(urlChamada).then( (res) => {
                console.log(res)
                console.log('agora vamos mostrar o body')
                const cartoesGerados = res.data
                cartoesGerados.forEach(item => {
                    cartoes.value.push(item)
                })
            }
        );                       
}
</script>
<template>
    <div class="container">
        <div class="row">            
            <div class="col-12 offset-md-2">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Limite de Maiores</span>
                    </div>
                    <input type="text" ref="campoLimiteMaiores" class="form-control" aria-label="Limite de Maiores" aria-describedby="inputGroup-sizing-default">
                </div>
            </div>       
        </div>    
        <div class="row">            
            <div class="col-12 offset-md-2">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Limite de Menores</span>
                    </div>
                    <input type="text" ref="campoLimiteMenores" class="form-control" aria-label="Limite de Menores" aria-describedby="inputGroup-sizing-default">
                </div>
            </div>       
        </div>    
        <div class="row">            
            <div class="col-12 offset-md-2">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Quantidade de Cartoes</span>
                    </div>
                    <input type="text" ref="campoQtdCartoes" class="form-control" aria-label="Quantidade de Cartoes" aria-describedby="inputGroup-sizing-default">
                </div>
            </div>       
        </div>    
        <div class="row">            
            <div class="col-12 offset-md-2">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Quantidade de Dezenas Fortes</span>
                    </div>
                    <input type="text" ref="campoQtdFortes" class="form-control" aria-label="Quantidade de Fortes" aria-describedby="inputGroup-sizing-default">
                </div>
            </div>       
        </div>    
        <div class="row">            
            <div class="col-12 offset-md-2">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Quantidade de Dezenas Médias</span>
                    </div>
                    <input type="text" ref="campoQtdMedias" class="form-control" aria-label="Quantidade de Médias" aria-describedby="inputGroup-sizing-default">
                </div>
            </div>       
        </div>    
        <div class="row">            
            <div class="col-12 offset-md-2">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Quantidade de Dezenas Fracas</span>
                    </div>
                    <input type="text" ref="campoQtdFracas" class="form-control" aria-label="Quantidade de Fracas" aria-describedby="inputGroup-sizing-default">
                </div>
            </div>       
        </div>    
        <div class="row">        
            <div class="col-8 offset-md-2">
            <button type="button" class="btn btn-success" @click="gerarNumeros()">Gerar Cartões</button>
            </div>        
        </div>  
        <div class="row">
            &nbsp;
        </div>
        <div class="row">            
            <div class="col-12 offset-md-2">
                <table class="table table-striped">
                    <thead>
                        <tr class="table-dark">
                            <th>#</th>
                            <th>Números</th>                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in cartoes">
                            <td>{{  (index+1) }}</td>
                            <td><span v-for="(cartao, index2) in item"><span v-if="index2 > 0">-</span>{{ cartao }}</span></td>                        
                        </tr>
                    </tbody>
                </table>            
            </div>
        </div>
    </div>
</template>
