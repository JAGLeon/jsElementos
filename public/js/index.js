const qs = ( data ) => {
    document.querySelector( data );
};

let $main = qs( 'main' ),
$h2 = qs( 'h2' ),
$a = qs( 'a' ),
$body = qs( 'body' );

let name = prompt( 'Ingrese su nombre' );
   
name === "" ? $h2.innerHTML = 'invitado' : $h2.innerHTML = name;

$h2.style.textTransform= 'uppercase';
$a.style.color = '#E51B3E';

let opt =  confirm('¿Desea colocar un fonde de pantalla?');

opt &&  $body.classList.add( 'fondo' ) ;

$p = document.querySelectorAll( 'p' );

for (let i = 0; i < $p.length; i++) {
    $p[i] % 2 === 0 ? $p.classList.add(  'destacadoPar') : $p.classList.add( 'descadoImpar');
};

$main.style.display= 'block';