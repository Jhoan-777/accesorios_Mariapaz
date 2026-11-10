# Accesorios María Paz — adaptación de la guía

Este proyecto conserva las cuatro páginas y el diseño que ya tenía el sitio. Está desarrollado en HTML, CSS y JavaScript, como alternativa de trabajo en código autorizada por la docente.

## Mejoras aplicadas
- Imágenes locales convertidas a WebP para reducir su peso; se conservan los originales JPEG.
- Imágenes con carga diferida (`loading="lazy"`) y decodificación asíncrona. La imagen principal de inicio carga con prioridad alta.
- Conexiones anticipadas a Google Fonts.
- Archivo `.htaccess` opcional para Apache: desactiva el listado de carpetas, activa compresión y caché del navegador y bloquea algunos archivos internos.
- Navegación responsive y formulario de contacto por WhatsApp ya existentes.

## Cómo abrir
Abre `index.html` en el navegador. Para probar `.htaccess`, el sitio debe estar en un servidor Apache (por ejemplo, XAMPP o un hosting Apache); no funciona al abrir el archivo directamente ni en todos los hostings.

## Correspondencia con la guía de aprendizaje
- **Tema y plantillas WordPress:** no se crean `functions.php`, `header.php`, `footer.php` ni `index.php` de WordPress porque esta entrega usa HTML/CSS/JS y no está instalada dentro de WordPress. La estructura equivalente visible se conserva en las páginas HTML.
- **Rendimiento:** se optimizaron imágenes y carga de recursos. Para demostrar una mejora con PageSpeed Insights, se debe publicar la web y ejecutar una medición antes y después; este proyecto no inventa resultados.
- **Seguridad:** `.htaccess` aporta medidas básicas solo en Apache. `DISALLOW_FILE_EDIT` es una constante exclusiva de WordPress y no aplica a este sitio estático.
- **Roles “Redactor Jr.” y “Editor”:** no están implementados todavía. Los roles reales necesitan autenticación y permisos en un servidor (por ejemplo, PHP y base de datos); ocultar botones con JavaScript no sería una protección real.

## Siguiente parte necesaria
Para construir los roles reales, se debe confirmar que el equipo puede ejecutar PHP (por ejemplo, mediante XAMPP). Si solo se permite HTML/CSS/JS, se puede hacer una demostración visual, pero no se debe presentar como control de acceso seguro.
