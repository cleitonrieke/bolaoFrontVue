<script setup>
import { ref } from 'vue';
import http from '../http-common.js';
import Bolao from '../models/bolao.js'

let primario = ref([true, true, true, true, true, true, true, true, true, true,
true, true, true, true, true, true, true, true, true, true,
true, true, true, true, true, true, true, true, true, true,
true, true, true, true, true, true, true, true, true, true,
true, true, true, true, true, true, true, true, true, true,
true, true, true, true, true, true, true, true, true, true])
let qtdNumeros = 0
const publicPath = import.meta.env.BASE_URL
const campoNome = ref(null)
const checkAceite = ref(null)
const numerosSelecionados = new Array()
let exibirRegistro = ref(true)

function trataBotao(valor){
    console.log(`clicado no numero ${valor}`)

    if (this.primario[valor -1]){
      if (qtdNumeros === 6){
        alert('Você já selecionou 6 números!')
        return false
      }
      this.primario[valor - 1] = false 
      this.qtdNumeros++
      this.numerosSelecionados.push(valor)
    }    
    else {
      this.primario[valor - 1] = true
      this.qtdNumeros--
      this.numerosSelecionados.pop(valor)
    }
}

function registrar(){
  console.log('teste')
  console.log(this.campoNome)
  if (this.qtdNumeros < 6){
    alert('Selecione 6 Dezenas do Cartão para poder Registrar!')
    return false
  }
  if (this.campoNome.value.trim() === ""){
    alert('Favor informar o nome do Participante!')
    this.campoNome.select()
    return false
  }
  if (!this.checkAceite.checked){
    alert('Favor aceitar a participação no Bolão Mega Brothers!')
    this.checkAceite.select()
    return false
  }
  console.log(this.numerosSelecionados.sort())
  const bolao = new Bolao(this.campoNome.value, this.numerosSelecionados.sort().toString());
  console.log(bolao);
  http.post("/bolao", bolao);
  this.exibirRegistro = false
  console.log('agora é falso o exibir Registro')
}
</script>

<template>
  <div class="container" v-if="exibirRegistro">
    <div class="row justify-content-center">
      <div class="col-4">
        <img :src="`${publicPath}logo.png`" width="300px" height="300px">
      </div>
    </div>
    <div class="row">
      <div class="col-12 offset-md-2">
        <span>Selecione 6 números abaixo para registrar seu palpite!</span>
      </div>
    </div>
    <div class="row justifiy-content-center">      
      <div class="col-10 offset-md-2">
          <div class="btn-group">
            <button type="button" :class="primario[0] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(1)">01</button>      
            &nbsp;
            <button type="button" :class="primario[1] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(2)">02</button>
            &nbsp;
            <button type="button" :class="primario[2] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(3)">03</button>
            &nbsp;      
            <button type="button" :class="primario[3] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(4)">04</button>
            &nbsp;      
            <button type="button" :class="primario[4] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(5)">05</button>
            &nbsp;      
            <button type="button" :class="primario[5] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(6)">06</button>
            &nbsp;      
            <button type="button" :class="primario[6] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(7)">07</button>
            &nbsp;      
            <button type="button" :class="primario[7] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(8)">08</button>
            &nbsp;      
            <button type="button" :class="primario[8] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(9)">09</button>
            &nbsp;      
            <button type="button" :class="primario[9] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(10)">10</button>
          </div>
      </div>
    </div>

    <div class="row">
      <div class="col-8 offset-md-2">
        <div class="btn-group">
          <button type="button" :class="primario[10] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(11)">11</button>
          &nbsp;
          <button type="button" :class="primario[11] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(12)">12</button>
          &nbsp;
          <button type="button" :class="primario[12] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(13)">13</button>
          &nbsp;
          <button type="button" :class="primario[13] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(14)">14</button>
          &nbsp;
          <button type="button" :class="primario[14] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(15)">15</button>
          &nbsp;
          <button type="button" :class="primario[15] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(16)">16</button>
          &nbsp;
          <button type="button" :class="primario[16] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(17)">17</button>
          &nbsp;
          <button type="button" :class="primario[17] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(18)">18</button>
          &nbsp;
          <button type="button" :class="primario[18] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(19)">19</button>
          &nbsp;
          <button type="button" :class="primario[19] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(20)">20</button>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-8 offset-md-2">
        <div class="btn-group">
          <button type="button" :class="primario[20] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(21)">21</button>
          &nbsp;
          <button type="button" :class="primario[21] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(22)">22</button>
          &nbsp;
          <button type="button" :class="primario[22] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(23)">23</button>
          &nbsp;
          <button type="button" :class="primario[23] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(24)">24</button>
          &nbsp;
          <button type="button" :class="primario[24] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(25)">25</button>
          &nbsp;
          <button type="button" :class="primario[25] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(26)">26</button>
          &nbsp;
          <button type="button" :class="primario[26] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(27)">27</button>
          &nbsp;
          <button type="button" :class="primario[27] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(28)">28</button>
          &nbsp;
          <button type="button" :class="primario[28] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(29)">29</button>
          &nbsp;
          <button type="button" :class="primario[29] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(30)">30</button>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-8 offset-md-2">
        <div class="btn-group">      
          <button type="button" :class="primario[30] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(31)">31</button>
          &nbsp;
          <button type="button" :class="primario[31] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(32)">32</button>
          &nbsp;
          <button type="button" :class="primario[32] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(33)">33</button>
          &nbsp;
          <button type="button" :class="primario[33] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(34)">34</button>
          &nbsp;
          <button type="button" :class="primario[34] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(35)">35</button>
          &nbsp;
          <button type="button" :class="primario[35] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(36)">36</button>
          &nbsp;
          <button type="button" :class="primario[36] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(37)">37</button>
          &nbsp;
          <button type="button" :class="primario[37] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(38)">38</button>
          &nbsp;
          <button type="button" :class="primario[38] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(39)">39</button>
          &nbsp;
          <button type="button" :class="primario[39] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(40)">40</button>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-8 offset-md-2">
        <div class="btn-group">        
          <button type="button" :class="primario[40] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(41)">41</button>
          &nbsp;          
          <button type="button" :class="primario[41] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(42)">42</button>
          &nbsp;
          <button type="button" :class="primario[42] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(43)">43</button>
          &nbsp;
          <button type="button" :class="primario[43] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(44)">44</button>
          &nbsp;
          <button type="button" :class="primario[44] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(45)">45</button>
          &nbsp;
          <button type="button" :class="primario[45] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(46)">46</button>
          &nbsp;
          <button type="button" :class="primario[46] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(47)">47</button>
          &nbsp;
          <button type="button" :class="primario[47] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(48)">48</button>
          &nbsp;
          <button type="button" :class="primario[48] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(49)">49</button>
          &nbsp;
          <button type="button" :class="primario[49] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(50)">50</button>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-8 offset-md-2">
        <div class="btn-group">
          <button type="button" :class="primario[50] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(51)">51</button>
          &nbsp;
          <button type="button" :class="primario[51] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(52)">52</button>
          &nbsp;
          <button type="button" :class="primario[52] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(53)">53</button>
          &nbsp;
          <button type="button" :class="primario[53] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(54)">54</button>
          &nbsp;
          <button type="button" :class="primario[54] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(55)">55</button>
          &nbsp;
          <button type="button" :class="primario[55] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(56)">56</button>
          &nbsp;
          <button type="button" :class="primario[56] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(57)">57</button>
          &nbsp;
          <button type="button" :class="primario[57] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(58)">58</button>
          &nbsp;
          <button type="button" :class="primario[58] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(59)">59</button>
          &nbsp;
          <button type="button" :class="primario[59] ? 'btn btn-primary' : 'btn btn-danger'" @click="trataBotao(60)">60</button>
        </div>  
      </div>
    </div>
    <div class="row">        
        <div class="col-8 offset-md-2">
          <span>Quantidade de Números Selecionados: {{ qtdNumeros }}</span>
        </div>        
    </div>
    <div class="row">        
        <div class="col-12 offset-md-2">
          <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Seu Nome</span>
              </div>
              <input type="text" ref="campoNome" class="form-control" aria-label="Seu nome" aria-describedby="inputGroup-sizing-default">
          </div>
        </div>        
    </div>    
    <div class="row">        
        <div class="col-12 offset-md-2">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="S" ref="checkAceite">
            <label class="form-check-label" for="checkAceito">
              Eu quero participar do Bolão Mega Brothers da Mega da Virada !!
            </label>
          </div>
        </div>        
    </div>    
    <div class="row">        
        <div class="col-8 offset-md-2">
          <button type="button" class="btn btn-success" @click="registrar()">Entrar no Bolão!</button>
        </div>        
    </div>
  </div>
  <div class="container" v-else>
    <div class="row">
      <h3>Parabéns Vc está registrado no Bolão Mega Brothers!!</h3>
    </div>
    <div class="row">      
        <img :src="`${publicPath}registroOk.png`" >      
    </div>
  </div>
</template>