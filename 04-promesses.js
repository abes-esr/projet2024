/*
Les promesses  :
- Communication Asynchrone
- Evenements

->


 */
const rand = Math.random();

function my_get(url, id) {
    return new Promise((resolve, reject ) => {
        console.info('requête sur l\'url ' + url);
        if(id < 100) {
            resolve('mon id est ' + id)
        } else {
            reject('ID invalide !')
        }
    })
}

my_get('monurl', 10)
    .then(res => console.log(res))
    .catch(err => console.error(err))

const promise = new Promise( ((resolve, reject) => {
  setTimeout(() => {
      if(rand > 0.5) {
          resolve('Un message secret');
      } else {
          reject('NOPE !!!!')
      }
  }, 2000)
}) );

function doSomething() {
    const p = document.createElement('p');
    p.textContent = response;
    p.style.color = 'green';
    document.querySelector('body').appendChild(p);
}

let response;

promise
    .then(res => {
        console.log(res);
        response = res;
        doSomething();
    })
    .catch(err => console.error(err))
    .finally(() => console.info('Opérations terminées'))


// Dans le cas de promesses qui s'enchaînent et dépendent les unes des autres
fetch('url')
    .then(res => promise)
    .then(data => {
        // tout ce que j'ai a faire
        return promise
    })
    .then(json => console.info(json))
    .catch(err => console.error(err))
    .finally(() => console.info('Tout est terminé'))

Promise.all([promise, promise, promise])
    .then(r => {
        // quand toutes les promesses sont résolues
        console.log(r)
    })
    .catch(err => console.warn(err))
    .finally(() => console.info('Tout est terminé'))


