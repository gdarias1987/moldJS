# 🦠 moldJS - Simulación del Crecimiento del Moho

Fuente \
**Implementación del tutorial**: [p5.js Coding Tutorial | Slime Molds (Physarum)](https://www.youtube.com/watch?v=VyXxSNcgDtg)

moldJS es una simulación interactiva escrita en **p5.js** que modela el crecimiento del moho utilizando sensores y un algoritmo de navegación basado en colores. 

## 🎥 Descripción

La animación representa colonias de moho en movimiento dentro de un entorno digital. Cada unidad de moho (llamada "Mold") tiene sensores que detectan el entorno y eligen la dirección más óptima para moverse, simulando la forma en que un organismo unicelular encuentra rutas de nutrientes en la naturaleza.

Las esporas de moho:
- Se mueven en una dirección inicial aleatoria.
- Utilizan sensores para detectar el entorno y elegir la mejor ruta.
- Cambian de dirección basándose en la intensidad de los valores de color del entorno.
- Se detienen si detectan condiciones adversas.

## 🛠️ Tecnologías Utilizadas

- **p5.js** - Librería para gráficos interactivos en JavaScript.
- **HTML + JavaScript** - Para la estructura y ejecución del código.

## 📀 Instalación y Ejecución

### 1️⃣ **Clonar el repositorio**
```sh
git clone https://github.com/gdarias1987/moldJS.git
cd moldJS
