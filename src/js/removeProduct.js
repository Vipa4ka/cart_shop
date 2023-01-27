import refs from './get-refs';

refs.remove.forEach(elem => {
  elem.addEventListener('click', onclickRemove);
});

function onclickRemove(e) {
  console.log(e);
}
