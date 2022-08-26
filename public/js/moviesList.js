const qs = ( data ) => {
    document.querySelector( data );
};

let $body = qs('body'),
$h1 = qs('h1');

let darkMode = confirm('¿Desea modo oscuro?');
if(darkMode){
    $body.style.backgroundColor = '#7f7f7f';
    $body.className += 'fondoMoviesList';
}

$h1.innerHTML = 'LISTADO DE PELÍCULAS';
$h1.style.color = 'white';
$h1.style.backgroundColor = 'teal';
$h1.style.padding = '20px';