const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'
interface Comment{
    postId: number
    id: number
    name: string
    email: string
    body: string
}
async function getData (url: string): Promise<Comment[]>{
    const response = await fetch(url)
    return await response.json()
}

getData(COMMENTS_URL).then((data=>{
    data.map((item=>{
        console.log((`ID: ${item.id}, Email: ${item.email}`))
    }))
}))