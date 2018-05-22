
const URL = () => process.env.NODE_ENV === 'development' ?
    'http://localhost:5000/posts/getall' :
    'https://murmuring-everglades-26713.herokuapp.com/posts/getall'


export const Post = {

  fetchAllPosts: async (req, res, next) =>{
    
    let response = await fetch(URL())
    
    
    let posts = response.json()

    if(response.status === 200 || response.status === 201) {
      return posts;
    }

    throw new Error(response.status);

  }

}
