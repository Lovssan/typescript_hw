const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'
interface Comment{
    id: number
    email: string
}
async function getData(url: string): Promise<Comment[]>{
    const response = await fetch(url)
    return await response.json()
}

getData(COMMENTS_URL).then((data=>{
    data.map((item=>{
        console.log((`ID: ${item.id}, Email: ${item.email}`))
    }))
}))