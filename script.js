$(document).ready(function() {
    $.ajax({
        url: "https://www.codigo-alfa.cl/aglo/Tester/listasPeliculas",
        method: "GET",
        success: function(response) {
            var peliculas = response.peliculas;
            var select = $("#peliculasSelect");

            peliculas.forEach(function(pelicula) {
                // Crear opción con el título y valor (id)
                var option = $("<option>").text(pelicula.title).val(pelicula.id);

                // Si la API devuelve año y género, añadirlos como atributos data
                if (pelicula.year) {
                    option.data('year', pelicula.year);
                }
                if (pelicula.genre) {
                    option.data('genre', pelicula.genre);
                }

                // Añadir la opción al select
                select.append(option);
            });
        },
        error: function() {
            console.log("Error al obtener la lista de películas");
        }
    });

    // Evento change del select para mostrar detalles de la película seleccionada
    $("#peliculasSelect").change(function() {
        var selectedOption = $(this).find("option:selected");
        var selectedYear = selectedOption.data("year");
        var selectedGenre = selectedOption.data("genre");

        // Mostrar el año y el género donde desees en tu HTML
        $("#year").text(selectedYear);
        $("#genre").text(selectedGenre);
    });
});

function obtenerPeliculaAleatoria() {
    $.ajax({
        url: "https://www.codigo-alfa.cl/aglo/Tester/peliculaAleatoria",
        method: "GET",
        success: function(response) {
            var peliculaAleatoria = response.pelicula;
            console.log(peliculaAleatoria);
            $("#peliculaAleatoria").text(peliculaAleatoria.title);
        },
        error: function() {
            console.log("Error al obtener la película aleatoria");
        }
    });
}
