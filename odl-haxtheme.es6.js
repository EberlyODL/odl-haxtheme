import{html,PolymerElement}from"./node_modules/@polymer/polymer/polymer-element.js";class OdlHaxtheme extends PolymerElement{static get template(){return html`
<style>:host {
  display: block;
}

:host([hidden]) {
  display: none;
}
</style>
<slot></slot>`}static get properties(){return{}}static get tag(){return"odl-haxtheme"}connectedCallback(){super.connectedCallback()}}window.customElements.define(OdlHaxtheme.tag,OdlHaxtheme);export{OdlHaxtheme};