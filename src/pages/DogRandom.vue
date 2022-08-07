<template>
  <q-page class="flex column">
    <div class="row justify-center">
      <span class="text-h3 q-pa-lg">Chuchos Random!</span>
    </div>
     <div class="row q-pa-md">
        <div v-for="dog in dogArr" :key="dog.id" class="col-3 q-pa-md">
          
          <q-card class="my-card" >
            <q-img :src="dog" :ratio="1">
              <div class="absolute-bottom text-subtitle2 text-center">
                            {{raza(dog)}}
              </div>
            </q-img>
          </q-card>
        </div>
        <q-btn align="center" class="full-width" color="accent" label="Más" @click="mas"/>
     </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import getImageDog from '../helpers/getImageDog.js'

// console.log(getImageDog())

export default defineComponent({
  name: 'DogRandom',
  data(){
    return{
      dogArr: [],
      dogAr: null,
    }
  },
  methods: {
    async mixDogArray(){
      this.dogArr = await getImageDog()
      // console.log(this.dogArr)
    },
    raza(stri){
      stri = stri.split('/')
      return stri[4]
    },
    mas: function (event) {      
      if (event) {
        this.mixDogArray()
      }
    }
  },
  mounted(){
    this.mixDogArray()
  }
})
</script>
