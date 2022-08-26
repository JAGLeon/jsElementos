const qs = (data) => {
    document.querySelector(data);
};

let $h1 = qs( 'h1' ),
$section = qs( 'section' ),
$article = qs( 'article' );

$h1.innerHTML = 'AGREGAR PELICULAS';
$h1.classList.add( 'titulo');
$article.classList.add('fondoTransparente');
$section.classList.add( 'fondoCRUD');