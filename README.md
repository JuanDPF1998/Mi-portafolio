# 🎨 Portfolio Website - Sitio Web Estático

Un portfolio moderno y responsivo construido con HTML5, CSS3 y JavaScript vanilla. Inspirado en diseños contemporáneos con un enfoque en la experiencia de usuario y la accesibilidad.

## ✨ Características

### 🎯 **Páginas Principales**
- **`index.html`** - Página principal con hero section, about, proyectos y habilidades
- **`contact.html`** - Formulario de contacto con validación y información de redes sociales
- **`projects/project1.html`** - Página detallada del proyecto E-commerce Platform
- **`projects/project2.html`** - Página detallada del proyecto Task Management App

### 🎨 **Diseño y Estilo**
- **Diseño responsivo** con CSS Grid y Flexbox
- **Modo oscuro/claro** con persistencia en localStorage
- **Paleta de colores moderna** con variables CSS personalizadas
- **Animaciones suaves** y efectos hover
- **Tipografía optimizada** con fuentes web modernas

### ⚙️ **Funcionalidades JavaScript**
- 🌙 **Modo oscuro** toggle con transición suave
- 🌍 **Sistema multiidioma** español/inglés con persistencia
- ✅ **Validación de formulario** en tiempo real
- 🎭 **Animaciones al scroll** con Intersection Observer
- 🏷️ **Filtrado de proyectos** por tecnología
- 📊 **Contadores animados** para estadísticas
- 🔝 **Botón "volver arriba"** dinámico
- ⌨️ **Efecto typewriter** en el hero (multiidioma)
- 📱 **Navegación móvil** hamburger menu

### 🎯 **Inspiración**
Basado en el diseño de [priceless-kepler-06d70c.netlify.app](https://priceless-kepler-06d70c.netlify.app/) con mejoras modernas y funcionalidades adicionales.

## 📁 Estructura del Proyecto

```
portfolio-website-static/
│
├── index.html                 # Página principal
├── contact.html              # Página de contacto
├── project\ features.md      # Documentación de características
├── README.md                 # Este archivo
│
├── assets/
│   ├── css/
│   │   └── styles.css        # Estilos CSS principales
│   ├── images/               # Imágenes del proyecto
│   │   ├── project1-preview.jpg
│   │   ├── project2-preview.jpg
│   │   ├── project1-main.jpg
│   │   └── ...
│   └── js/
│       └── script.js         # JavaScript interactivo
│
└── projects/
    ├── project1.html         # E-commerce Platform
    └── project2.html         # Task Management App
```

## 🚀 Características Técnicas

### **HTML5**
- Estructura semántica y accesible
- Meta tags optimizados para SEO
- Open Graph tags para redes sociales
- Formularios con validación HTML5

### **CSS3**
- Variables CSS personalizadas (custom properties)
- CSS Grid y Flexbox para layouts responsivos
- Animaciones con `@keyframes`
- Media queries para dispositivos móviles
- Hover effects y transiciones suaves

### **JavaScript**
- ES6+ features (arrow functions, const/let, template literals)
- API moderna del DOM
- Intersection Observer para animaciones
- Local Storage para persistencia de tema
- Event delegation y manejo eficiente de eventos

## 🎨 Paleta de Colores

### **Tema Claro**
- **Primario**: `#2563eb` (Azul)
- **Secundario**: `#8b5cf6` (Púrpura)
- **Acento**: `#06b6d4` (Cian)
- **Fondo**: `#ffffff` (Blanco)
- **Texto**: `#1f2937` (Gris oscuro)

### **Tema Oscuro**
- **Fondo**: `#111827` (Gris muy oscuro)
- **Texto**: `#f9fafb` (Gris muy claro)
- **Colores primarios se mantienen**

## 📱 Responsive Design

- **Desktop**: > 1024px - Layout completo con sidebar
- **Tablet**: 768px - 1024px - Layout adaptado sin pérdida de funcionalidad
- **Mobile**: < 768px - Navegación hamburger, layout vertical

## 🔧 Instalación y Uso

1. **Clona o descarga** el proyecto
2. **Personaliza** el contenido:
   - Cambia "Tu Nombre" por tu nombre real
   - Actualiza enlaces de redes sociales
   - Reemplaza imágenes placeholder
   - Modifica información de contacto

3. **Añade tus imágenes** en `assets/images/`:
   - `project1-preview.jpg` (350x220px)
   - `project2-preview.jpg` (350x220px)
   - `project1-main.jpg` (1200x600px)
   - `project2-main.jpg` (1200x600px)
   - Y demás imágenes referenciadas

4. **Abre** `index.html` en tu navegador

## 🎯 Personalización

### **Colores**
Modifica las variables CSS en `:root` dentro de `styles.css`:

```css
:root {
  --primary-color: #tu-color-primario;
  --secondary-color: #tu-color-secundario;
  /* ... más variables */
}
```

### **Contenido**
- Actualiza textos en los archivos HTML
- Modifica proyectos en la sección de proyectos
- Personaliza habilidades y tecnologías
- Añade tu información de contacto real

### **Funcionalidades**
El archivo `script.js` está modularizado. Puedes:
- Desactivar funciones no deseadas
- Añadir nuevas animaciones
- Modificar validaciones del formulario
- Integrar con APIs reales de contacto

## 🌟 Funcionalidades Destacadas

### **1. Sistema Multiidioma Completo**
- **Soporte para Español e Inglés** con cambio dinámico
- **Persistencia de idioma** en localStorage
- **Selector visual** con banderas y transiciones
- **Traducción automática** de todo el contenido
- **Efecto typewriter** adaptado al idioma seleccionado
- **URLs y metadatos** actualizados por idioma

### **2. Modo Oscuro Inteligente**
- Detección automática de preferencia del sistema
- Persistencia en localStorage
- Transición suave entre temas
- Iconos que cambian dinámicamente

### **2. Formulario de Contacto Avanzado**
- Validación en tiempo real
- Mensajes de error personalizados
- Estado de carga al enviar
- Mensaje de éxito animado
- Prevención de spam básica

### **3. Animaciones Performantes**
- Intersection Observer para optimización
- Animaciones CSS puras (no JavaScript)
- Efectos de paralaje sutiles
- Transiciones fluidas

### **4. Accesibilidad**
- Navegación con teclado
- Lectores de pantalla compatible
- Contraste de colores optimizado
- Focus visible en elementos interactivos

## 📈 Optimizaciones

- **Performance**: Lazy loading de imágenes
- **SEO**: Meta tags optimizados
- **Accesibilidad**: ARIA labels y roles
- **Mobile**: Touch-friendly interfaces
- **Loading**: Preload de recursos críticos

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos y responsivos
- **JavaScript ES6+**: Interactividad avanzada
- **Font Awesome**: Iconografía
- **Google Fonts**: Tipografía (Inter)

## 📝 Notas de Desarrollo

- **Sin frameworks**: Construido con tecnologías web nativas
- **Modular**: Código organizado y reutilizable
- **Comentado**: Documentación interna completa
- **Escalable**: Fácil de extender y modificar

## 🤝 Contribuciones

Si encuentras bugs o tienes sugerencias de mejora:
1. Crea un issue detallado
2. Fork el proyecto
3. Crea una rama para tu feature
4. Envía un pull request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usar, modificar y distribuir.

---

## 🎯 Próximos Pasos Sugeridos

1. **Añadir imágenes reales** de tus proyectos
2. **Configurar formulario de contacto** con un servicio backend
3. **Optimizar imágenes** para web (WebP, compresión)
4. **Añadir más proyectos** siguiendo la estructura existente
5. **Configurar analytics** (Google Analytics, etc.)
6. **Añadir blog** si lo deseas
7. **Implementar PWA** para instalación en móviles

¡Tu portfolio está listo para impresionar! 🚀✨