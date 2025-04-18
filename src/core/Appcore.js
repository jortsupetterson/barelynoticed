// src/core/AppCore.js
import Renderer from './Renderer.js'
import ObserverOptimizer from '../InterfaceOptimizer/agent.js'

export default class AppCore {
    static init() {
   // 1) RENDeröidään staattinen komponentti
   const html = `<div class="opt-reveal hello">Hello, from barelynoticed.com!</div>`;
   Renderer.render(html);

   // 2) Käynnistetään optimizer jokal isää .isivble kun elementti näkyy
   const opt = new ObserverOptimizer();
   opt.observeAll();

   // (tähän myöhemmin pluginit, komponenttieriktersit yms.)
    }
}