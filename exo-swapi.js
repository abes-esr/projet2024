const API_URL = 'https://swapi.dev/api/people/'

async function getCharacter(id) {
   /* axios.get(API_URL + id)
        .then(res => {

            displayCharacter(res.data);
        })
        .catch(err => {
            console.error(err);
            alert(`ça n'a pas marché !`);
        }) */
   try {
       let chara;
       const res = await axios.get(API_URL + id);
       chara = res.data;
       const {data : planet} = await axios.get(chara.homeworld);
       chara.planet = planet.name;
       chara.movies_name = [];
       const films_requests = [];
       chara.films.forEach(film => films_requests.push(axios.get(film)));

       Promise.all(films_requests).then(movies => {
           console.log(movies)
           movies.forEach(movie => chara.movies_name.push(movie.data.title))
           displayCharacter(chara);
       })

   } catch (err) {
       console.error(err);
       alert(`ça n'a pas marché !`);
   }
}

function displayCharacter(chara) {
    let movies = chara.movies_name.join(', ')
    alert(`${chara.name}, né(e) en ${chara.birth_year} à ${chara.planet}, 
    apparait dans : ${movies}`);

}

getCharacter(1);