const server = 'http://localhost:3000/'

export default async function getAPIUserData(uri){
    try{
        let response = await fetch(server + uri)
        let data = response.ok ? response.json() : console.log('no')

        console.log('ok', server + uri, data)
        
        return data

    }catch(e){
        console.log(e.message)
    }
}
