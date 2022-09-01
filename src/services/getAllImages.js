const getAllImages = () => {
    return fetch("http://localhost:3001/api/v1").then(res => res.json())
}
 
export default getAllImages;