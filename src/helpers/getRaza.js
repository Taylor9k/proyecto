import dogApi from "src/api/dogApi"

const getImagenes = () => {
const imagenArr = Array.from(Array(100))
return imagenArr.map(( _ , index ) => index+1)
}

const getRaza = async() => {

    const mixedR = getImagenes()
    const razass = await getRazaAll(mixedR)
    return razass   
}

const getRazaAll = async(dog = []) => {

    const respu = await dogApi.get('/list/all')
    const obj = respu.data.message
    return Object.keys(obj)
    // console.log(dog)
}
// https://dog.ceo/api/breeds/list/all

export default getRaza