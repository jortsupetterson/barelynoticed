// src/core/Renderer.js
export default class Renderer {
    static render (htmlString) {
        const tpl = document.createElement('template');
        tpl.innerHTML = htmlString;
        document.body.appendChild(tpl.content)
    }
}