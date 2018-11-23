### Products Backend

#### Dependencies
  - [https://www.npmjs.com/package/express](express.js)
  ```
  $ npm install express --save
  ```
  - [https://www.npmjs.com/package/hbs](Express.js view engine for handlebars.js)
  ```
  $ npm install hbs --save
  ```
  - [https://www.npmjs.com/package/request](request)
  ```
  $ npm install request --save
  ```
  - [https://www.npmjs.com/package/mdbootstrap](Material Design for Bootstrap 4)
  ```
  $ npm i mdbootstrap
  ```

### Puerto

La aplicación toma la constante global ```process.env.PORT``` para ejecutarse, en un entorno local no existe por lo que tomará el valor de 3000.

### Páginas

  - _home_: Lista los productos paginados que devuelve la aplicacion backend
  - _add_: Formulario que permite ingresar un nuevo producto
  - _error_: se muestra si la carga del home tuvo un error, probablemente al obtener los productos 
