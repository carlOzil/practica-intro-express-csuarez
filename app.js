
// inicializar puerto con express
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// establecer carpeta estática
app.use(express.static(__dirname + '/public'));

// configurar ingeniería de plantillas(dentro de la carpeta views)
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// renderizar y obtener resultados para el navegador
app.get('/', (req, res) => {
    res.render('index', {});
});

app.get('/cursos', (req, res) => {
    res.render('cursos', {});
});

app.get('/instalaciones', (req, res) => {
    res.render('instalaciones', {});
});

app.get('/profesores', (req, res) => {
    res.render('profesores', {});
});

app.get('/contacto', (req, res) => {
    res.render('contacto', {});
});

// mantener puerto a la escucha
app.listen(port, () => {
    console.log(`servidor Suárez a la escucha del puerto ${port}`);
});
