const API_URL = "https://jsonplaceholder.typicode.com/";
let posts;

function getPosts() {
    axios.get(API_URL + 'posts')
        .then(res => {
            posts = res.data;
            displayPosts();
        })
        .catch(err => {
            console.error(err);
            alert('ERROR !!!!!!!!!');
        })
        .finally(() => console.info('Terminé'))
}
getPosts();
function displayPosts() {
    alert(`Vous avez ${posts.length} posts` );
}



/**** Promesse chaînées *********/
let single_post;
function getPostById(id) {
    axios.get(API_URL + 'posts/' + id )
        .then(res => {
            single_post = res.data;
            return axios.get(API_URL + 'users/' + single_post.userId)
        })
        .then(res => {
            single_post.user = res.data.username;
            console.warn(single_post);
        })
        .catch(err => console.error(err))
}
getPostById(1);


/******* Avec Async Await ***************/

async function getPostsBis() {
    try {
        const res = await axios.get(API_URL + 'posts');
        posts = res.data;
        displayPosts();
    } catch (err) {
        console.error(err);
        alert('ça marche pas !')
    } finally {

    }
}
getPostsBis();


async function getPostsByIdBis(id) {
    try {
        // Destructuration d'objet
        const {data: post_data} = await axios.get(API_URL + 'posts/' + id );
        single_post = post_data;

        const {data: user_data} = await axios.get(API_URL + 'users/' + single_post.userId)
        single_post.user = user_data.name;

        alert(`${single_post.user} a écrit le post suivant : 
            ${single_post.title} :
            ${single_post.body}`);
    } catch (err) {
        console.error(err);
        alert(`C'est cassé`)
    }
}