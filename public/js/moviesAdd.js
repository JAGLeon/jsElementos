const qs = (data) => {
    document.querySelector(data);
};

let $h1 = qs( 'h1' ),
$section = qs( 'section' ),
$article = qs( 'article' );

$h1.innerHTML = 'AGREGAR PELICULAS';
$h1.className += 'titulo';
$article.className += 'fondoTransparente';
$section.className += 'fondoCRUD';