# GCATechnicalTest

Este proyecto es una aplicación Angular que utiliza Angular Material para el diseño de componentes y @angular/google-map para integrar mapas. Se desarrolló como parte de una prueba técnica y demuestra la implementación de un sistema de gestión de vendedores.

## Tabla de Contenidos

- [Visión General](#visión-general)
- [Instalación](#instalación)
- [Ejecución del Proyecto](#ejecución-del-proyecto)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Componentes Principales](#componentes-principales)
- [Recursos Adicionales](#recursos-adicionales)
- [Licencia](#licencia)

## Visión General

GCATechnicalTest es una aplicación Angular que:
- Utiliza Angular Material para la interfaz de usuario y estilos.
- Integra Google Maps mediante `@angular/google-map` para mostrar la ubicación de los vendedores.
- Implemente múltiples componentes, como la lista y la tarjeta de vendedores, así como una vista de mapa que muestra la posición de cada vendedor con marcadores avanzados.
- Aplica técnicas de optimización (trackBy en ngFor, ChangeDetection OnPush, etc.) y estilos personalizados con SCSS.

## Instalación

1. **Instalar Angular (v19.2 o superior):**  
   Asegúrate de tener Angular CLI instalado (recomendamos la versión 19.2 o superior):
   ```bash
   npm install -g @angular/cli@19.2
   ```

2. **Descargar el Proyecto:**  
   Clona el repositorio o descarga el código fuente:
   ```bash
   git clone https://github.com/danyelk63/GCATechnicalTest.git
   cd GCATechnicalTest
   ```

3. **Instalar Dependencias:**
   ```bash
   npm install
   ```

## Ejecución del Proyecto

Para correr el proyecto localmente:
```bash
npm run start
```
Abre tu navegador en la siguiente URL:  
[http://localhost:4200/home](http://localhost:4200/home)

## Estructura del Proyecto

El proyecto cuenta con la siguiente estructura:

- **src/app/components:**  
  Contiene los componentes principales de la aplicación:
  - **features/salesman-view:** Componente principal con navegación por pestañas.
  - **shared/salesman-list:** Lista de vendedores con tarjetas individuales.
  - **shared/salesman-card:** Tarjeta que muestra información de un vendedor.
  - **shared/map:** Mapa que muestra la ubicación de los vendedores con marcadores avanzados e info windows.
  - **shared/under-construction:** Vista sin contenido para mostrar en las tabs vacias.
  
- **src/app/services:**  
  Servicios para la gestión de vendedores y peticiones HTTP.

- **src/styles.scss:**  
  Archivo global de estilos, donde se definen variables y mixins para la aplicación.

## Componentes Principales

### SalesmanViewComponent

- Actúa como contenedor principal de la vista.
- Gestiona la navegación mediante Angular Router y pestañas (Angular Material Tab Nav Bar).

### SalesmanListComponent

- Muestra una lista de vendedores.
- Utiliza `*ngFor` con trackBy para optimización en el renderizado.
- Permite abrir un diálogo para crear o editar vendedores.

### SalesmanCardComponent

- Muestra información detallada de cada vendedor: nombre, categoría, coordenadas, y estado.
- Aplica estilos dinámicos (por ejemplo, mediante clases CSS para estado seleccionado o hover).

### MapComponent

- Integra Google Maps para visualizar la ubicación de los vendedores.
- Usa `MapAdvancedMarker` para cada vendedor y gestiona los markers con @ViewChildren.
- Abre un `MapInfoWindow` al hacer clic en un marker.
- Se encarga de centrar el mapa en la ubicación del vendedor seleccionado y gestionar la interacción con los marcadores.

## Recursos Adicionales

- [Angular Documentation](https://angular.io)
- [Angular Material](https://material.angular.io)
- [Google Maps for Angular](https://developers.google.com/maps/documentation/javascript/overview)
- [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)

## Licencia

Este proyecto se distribuye bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
