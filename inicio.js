

function cargar(seccion) {
        const contenido = document.getElementById("contenido");

        if (seccion === "home") {
            contenido.innerHTML = `<section class="Titulo">
                <h1><a href="index.html">Bestiario Mitico: Criaturas del pasado</a></h1>
                <p>
                    Explora un vasto bestiario de criaturas legendarias provenientes de mitologías y culturas antiguas alrededor del mundo en un solo lugar.   
                </p>
                </section>
                <main>

                <section class="Catalogo">

                    <h4>Vol. 1: Mitologia Griega</h4>
                    <ul>
                        <li><a href="mitologias/griega/minotauro.html">Minotauro</a></li>
                        <li><a href="mitologias/griega/medusa.html">Medusa</a></li>
                        <li><a href="mitologias/griega/hidra.html">Hidra</a></li>
                        <li><a href="mitologias/griega/cerberus.html">Cerberus</a></li>
                        <li><a href="mitologias/griega/general.html">>...</a></li>
                    </ul>
                </section>

                <section class="Descripcion">
                    <p class="presentacionInicial"><strong>
                        Entre la oscuridad y la luz, estas criaturas tejían las leyendas que aún hoy resuenan en la historia… ¿te atreverías a encontrarlas?
                    </strong></p>

                    <h3>Mitologia Griega</h3>
                    <p>
                        Todo comienza por el caos, no hay bestias, no hay destruccion, no hay seres destructores, es solo el vacio.
                        Comienza la era inicial, el nacimiento de Gea(la tierra), Tartaro(El inframundo profundo) y Eros(La fuera de union).
                        <br>
                        La busqueda de respuestas de los humanos para explicar el origen del mundo, 
                        los dioses, los montruos y el comportamiento humano. Cosas que no se llegaban a entender hasta relacionarlos con historias que le dieran sentido.
                    </p>
                    <p>
                        Durante su historia han aparecido criaturas como:
                    </p>
                    <ul>
                        <li>El Minotauro</li>
                        <li>Medusa</li>
                        <li>La Hidra de Lerna</li>

                    </ul>
                </section>
            </main>`;
        }  
        else if (seccion === "general"){
             contenido.innerHTML = `
            <section class="Titulo">
                <h1><a href="../../index.html">Bestiario Mitico: Criaturas del pasado</a></h1>
            </section>
            <section>
                <h2>Mitologia Griega</h1>
                <strong><a href="minotauro.html">El Minotauro</a></strong>
                <p>
                    El Minotauro habitaba en un laberinto imposible, una prisión de piedra y sombras. 
                    Mitad hombre, mitad toro, su fuerza era descomunal y su furia incontrolable. Nadie entraba sin temer no volver jamás…
                </p>
                <strong><a href="medusa.html">Medusa</a></strong>
                <p>
                    En lo profundo de una cueva olvidada, la mirada de la Medusa convertía en piedra a todo aquel que osara mirarla. 
                    Su cabello, hecho de serpientes vivas, susurraba muerte. Pero no siempre fue un monstruo… alguna vez fue humana.
                </p>
                <strong><a href="hidra.html">La Hydra de Lerna</a></strong>
                <p>
                    En los pantanos oscuros acechaba la temible Hidra de Lerna, una bestia de múltiples cabezas. 
                    Por cada una que caía, dos más crecían. Derrotarla no era solo cuestión de fuerza, sino de ingenio.
                </p>
                <strong><a href="cerberus.html">Cerberus</a></strong>
                <p>
                    Guardando las puertas del inframundo, el feroz Cerbero vigilaba sin descanso. 
                    Sus tres cabezas observaban pasado, presente y futuro, y ningún alma escapaba de su custodia.
                </p>
                <strong><a href="pegaso.html">Pegaso</a></strong>
                <p>
                    En lo alto de los cielos, libre y majestuoso, volaba Pegaso, el caballo alado. 
                    Símbolo de pureza y libertad, llevaba a los héroes a destinos que tocaban lo divino.
                </p>
                <strong><a href="ciclope.html">Ciclope</a></strong>
                <p>
                    
                </p>
                <strong><a href="esfinge.html">La Esfinge Griega</a></strong>
                <p>
                    
                </p>
                <strong><a href="harpia.html">La Harpia</a></strong>
                <p>
                    
                </p>
            </section>
                    `;
    }
        
}

document.getElementById("btnHome").addEventListener("click", () => cargar("home"));

cargar("home");

































