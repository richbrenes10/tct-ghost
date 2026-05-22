# True Collective Tattoo Portal

Portal de clientes para True Collective Tattoo con artistas, FAQs, recomendaciones, firma digital y formulario de cita.

## Netlify

El proyecto ya incluye soporte para desplegarse en Netlify.

- Build command: `npm run build`
- Publish directory: `.next`
- Plugin: `@netlify/plugin-nextjs`
- Node: `20.x`

Si quieres publicar el sitio, conecta el repositorio en Netlify y deja que lea el archivo `netlify.toml`.

Si subes un zip manualmente, el zip debe contener directamente `app/`, `src/`, `public/`, `package.json`, `package-lock.json`, `next.config.mjs` y `netlify.toml` en la raiz. No debe venir todo dentro de una carpeta extra como `tct-demo/`, porque Netlify construiria desde la raiz equivocada y mostraria el error de que no encuentra `pages` o `app`.
