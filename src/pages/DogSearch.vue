<template>
  <q-page class="flex column">
    <div class="row justify-center">
      <span class="text-h3 q-pa-lg">Buscar Perro por raza</span>
    </div>
     <div class="row q-pa-md">
        <div class="col q-pa-md">
          <div class="q-gutter-md row justify-center">
              <q-select
                filled
                v-model="model"
                use-input
                input-debounce="0"
                label="Seleccione la raza"
                :options="options"
                @filter="filterFn"
                style="center width: 250px"
                behavior="dialog"
                emit-value
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
              <q-btn align="center" color="accent" icon="las la-search" @click="busca(model)"/>
           </div>
           <div class="row q-pa-md justify-center">
                <div class="col-7 justify-center q-pa-md">
                  
                  <q-card class="my-card" >
                    <q-img  v-show="buscar" :src="dogi" :ratio="1">
                      <div class="absolute-bottom text-subtitle2 text-center">
                        {{raza(this.dogi)}}                              
                      </div>
                    </q-img>
                  </q-card>
                </div>
     </div>
           
        </div>
      </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import getSearch from '../helpers/getSearch.js'
import getRaza from '../helpers/getRaza.js'
import { ref } from 'vue'

var stringOptions= ['google']
// console.log(getImageDog())

export default defineComponent({
  name: 'DogSearch',
  data(){
    return{
      dogAr: null,
      dogi: [],
      dogies: [],
      buscar: false,
    }
  },
  setup () {
    const options = ref(stringOptions)

    return {
      model: ref(null),
      stringOptions,
      options,

      filterFn (val, update) {
        if (val === '') {
          update(() => {
            options.value = stringOptions
          })
          return
        }

        update(() => {
          const needle = val.toLowerCase()
          options.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
        })
      }
    }
  },  
  methods: {
    async mixRazaArrays(){
      this.dogies = await getRaza()
      stringOptions = this.dogies
      // console.log(this.dogies)
    },
    raza(stri){
      stri = stri.split('/')
      return stri[4]
    },
    mas: function (event) {      
      if (event) {
        this.mixDogArrays()
      }
    },
    async busca(vali){
      this.buscar = true
      this.dogi = await getSearch(vali)
    }
  },
  mounted(){
    this.mixRazaArrays()
  }
})
</script>
