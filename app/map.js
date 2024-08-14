
let map;

function initMap() {
      // Inicializar el mapa sin centrado
      map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: { lat: -34.603722, lng: -58.381592 } 
      });

      const marker = new google.maps.Marker({
        position: location,
        map: map,
      });

      // Llamar a fetch para obtener la ubicación
      fetchLocationAndUpdateMap();
    }



    function fetchLocationAndUpdateMap(){

        const apiKey = 'AIzaSyDBxamkSMpwT5cBkdexPjWS64a-4iw8uDs';
        const address = 'Sanchez de loria 531, Buenos Aires, Argentina';

        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.results && data.results.length > 0) {
                const location = data.results[0].geometry.location;

                // Centrar el mapa en la ubicación obtenida
                map.setCenter(location);
                map.setZoom(15); // Ajustar el nivel de zoom

                // Añadir un marcador en la ubicación obtenida
                addMarker(location, data.results[0].formatted_address);
            } else {
                console.log('No se encontraron resultados');
            }
        })
        .catch(error => {
            console.error('Hubo un problema con la solicitud de fetch:', error);
        });

    }

    function addMarker(location, title) {
        new google.maps.Marker({
            position: location,
            map: map,
            title: title // Texto que se muestra al hacer hover sobre el marcador
        });
    }
     