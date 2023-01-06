const getData = async () => {
    const response = await fetch('https://podcast-api.netlify.app/shows')
    console.log(response)
}

getData()
