const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');/*SE CAMBIARON A CLASES (name y blog)*/
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

async function displayUser(username) {/*SE AGREGO ASYNC */
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = `${data.name}`; /*SE PUSIERON COMILLAS INVERSAS*/ 
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; /*SE AGREGO $ A n*/
}

displayUser('stolinski').catch(handleError);