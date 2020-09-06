This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Aprendiendo React desde cero

## Reglas JSX
 1. Toda etiqueta debe cerrarse
 2. Los componentes deben devolver UN sólo elemento padre
 3. Apoyarse de los fragment cuando necesito devolver DOS elementos
 4. Fragment =>  <> HIJOS </>
 5. img siempre se cierra <img src="ruta imagen" />
 6. class => className
 7. atributo for => htmlFor

Expresiones en JSX son => { javascript } 

src={} => propiedades

En react existen dos tipos de componentes, presentacionales o componente de función  se limita a presentarse en pantalla y no tiene mucha lógica, reutilizando una estructura declarada.

props => es un objeto en donde se encuantran las propiedades

Libreria para tener organizada las propiedades
### `npm i prop-types`

## El estado de los componentes
### Componente de clase
Componente de tipo clase

El estado del componente hace referencia a lo que nosotros necesitamos de
información de nuestro componente que vaya cambiando, esa información que se
 va actualizar.

 # Rutas
El componente Route necesita dos propiedades, el path y exact = es bool (se usa para el HOME de la aplicación casi siempre) y el component que es el componente

# Refactorización de código
Usando Atomic Design

# Componente de orden superior
nos permite reutilizar lógia a lo largo de nuestra aplicacion en diversos componentes
 Que es?
 es una función que resive un componente, lo procesa segun la lógica y devuelve otro componente luego de ser procesado.
 

 # Hooks
 Tenemos dos hooks disponibles en react
 1. useState => nos permite utilizar el estado
    - useState: es una función que resive como parametro el estado que queremos utilizar y devuelve un arreglo
    - useState llegan dos elementos, el estado como tal y un call back que se pued utilizar para modificar el estado nuevamente.
  2. useEffect =>   simula el ciclo de vida de un componente 
    - resive como parametro un call back y en el segundo son reglas
    - se llamara cuando el componente se renderize 

