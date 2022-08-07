import dogApi from "src/api/dogApi"
import dogApis from "src/api/dogApi"

const getImagenes = () => {
const imagenArr = Array.from(Array(100))
return imagenArr.map(( _ , url ) => url)
}

const getImageDog = async() => {

    const mixedUrl = getImagenes()
    const perros = await getImgUrl(mixedUrl)
    return perros    
}

const getRaza = async() => {

    const mixedR = getImagenes()
    const razass = await getRazaAll(mixedR)
    return razass    
}

const getRazaAll = async([a] = []) => {

    const respu = await dogApi.get('/list/all')
    return respu.data.message
    // console.log(dog)
}


const getImgUrl = async([a] = []) => {

    const resp = await dogApi.get('/image/random/12')

    return resp.data.message
    // console.log(dog)
}

const getImageDogS = async(n) => {

    const mixedUrl = getImagenes()
    const perros = await getImgUrlS(mixedUrl, n)
    return perros    
}

const getImgUrlS = async([a, n] = []) => {

    const resp = await dogApis.get(n+'/image/random/')

    return resp.data.message
    // console.log(dog)
}

// https://dog.ceo/api/breeds/list/all



export default getImageDog