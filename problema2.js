
        function generarNumeroAleatorio(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function generarLista() {
            let min = parseInt(document.getElementById('min').value);
            let max = parseInt(document.getElementById('max').value);
            let resultados = document.getElementById('resultados');
            resultados.innerHTML = '';

            if (isNaN(min) || isNaN(max) || min > max) {
                resultados.innerHTML = 'Por favor, ingrese valores válidos.';
                return;
            }

            let lista = [];
            for (let i = 0; i < 20; i++) {
                lista.push(generarNumeroAleatorio(min, max));
            }

            lista.forEach((numero, index) => {
                resultados.innerHTML += `${index + 1}. ${numero}<br>`;
            });
        }
