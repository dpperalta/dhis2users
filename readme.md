# MSP DHIS2 GENERADOR DE USUARIO
## _Equipo OPS 2022_

### Características
- Generación de archivos JSON para la carga de usuarios
- Lectura de la plantilla xlsx para ingreso y organización de usuarios

## Instrucciones de uso
_Requisitos_
> Es importante que los usuarios se hayan generado con la plantilla correspondiente
> los UID de los usuarios deben ser únicos y se leerán desde el archivo XLSX
> las unidades organizativas deben haber sido validadadas en el origne XLSX
> el archivo XLSX debe llamarse data.xlsx y debe estar cargado en el directorio
> correspondiente, si se desea modificar, es preciso actualizar el código.

- Verificar el rol de usuarios que se generará
- Comentar o quitar comentarios en el rol y grupos correspondientes
- Cargar el archivo data.xlsx en el directorio data
- Ejecutar el comando node al directorio index.js
- Renombar el archivo JSON de acuerdo al resultado esperado
- _Opcional:_ Si se desea se puede dar formato al archivo JSON resultante



## Instalación

Se requiere [Node.js](https://nodejs.org/) v10+ to run.

Descargar la solución del repositorio [GitHub DHIS2MSP](https://github.com/dpperalta/dhis2users)

```sh
cd dhis2UserGenerator
npm i
node index.js
```


##### Developers:
[dpperalta](https://github.com/dpperalta)
