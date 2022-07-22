import logo from './logo.svg';
import './App.css';
import Testimonio from './components/Testimonio';


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1 className='encabezado-h1'>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp: </h1>
        <Testimonio
        url='https://www.freecodecamp.org/espanol/static/Shawn-bf42c7b909dae3111d18a21870ee6ca5.png'
        alt='Imagen de Shawn Wang'
        name='Shawn Wang'
        country='Singapur'
        job='Ingeniero de Software'
        business='Amazon'
        testimony='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando
         a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve 
         un trabajo de seis cifras como ingeniero de software'
         destacar= 'freeCodeCamp cambió mi vida.' 
        />

<Testimonio
        url='https://www.freecodecamp.org/espanol/static/Sarah-45de0e53b7b2520ebbac35c454b9748a.png'
        alt='Imagen de Sarah Chima'
        name='Sarah Chima'
        country='Nigeria'
        job='Ingeniero de Software'
        business='ChatDesk'
        sarah='freecodecamp fue la puerta de entrada a mi carrera '
        //destacar= 'mi primer trabajo de desarrollador en una empresa increíble.' 
        testimony=' como desarrollador de software. 
        El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de 
        principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo
         de desarrollador en una empresa increíble. '
        />

<Testimonio
        url='https://www.freecodecamp.org/espanol/static/Emma-5a662db9bcf55809a1fefb2ea17634bc.png'
        alt='Imagen de Emma Bosnia'
        name='Emma Bosnia'
        country='Suecia'
        job='Ingeniero de Software'
        business='Spotify'
        testimony='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero 
        el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos
         y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir 
         el trabajo de mis sueños como '
         destacar= 'ingeniero de software en Spotify.'
        />

      </div>
      
    </div>
  );
}

export default App;
