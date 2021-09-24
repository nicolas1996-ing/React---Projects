// funciones que pueden ser re utilizadas
// una función async retorna una promesa


const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=j7oMU7ONZhAzrtiSVxnqjRMWA9DRoF29`
    const resp = await fetch(url);
    const { data } = await (resp.json()); // filtrar data 

    // limpiar data 
    // retorna un arreglo de objetos
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })


    // console.log(gifs);
    return gifs;
}

export default getGifs;