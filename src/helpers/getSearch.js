import dogApis from "src/api/dogApis.js"

const getImagenes = () => {
const imagenArr = Array.from(Array(1))
return imagenArr.map(( _ , url ) => url)
}


const getSearch = async(n) => {
    const razass = await getSearchAll(n)
    return razass    
}

const getSearchAll= async(n) => {

    const respu = await dogApis.get(n+'/images/random')
    // console.log(respu.data.message)
    return respu.data.message
    // console.log(dog)
}

// https://dog.ceo/api/breeds/list/all



export default getSearch