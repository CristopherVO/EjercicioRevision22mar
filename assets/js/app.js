
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// le faltaban los # 
const $n = document.querySelector('#name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('#location');

// agregue el async que faltaba para el await 
async function  displayUser (username) {
  // agregar el try y el catch
  try{
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
  }catch (err){
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  // le faltaba el punto y coma, agregar el $
  //$n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);