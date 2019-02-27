import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import '@polymer/iron-icon/iron-icon.js';
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
        width: 15%;
        --theme-color-5: #c3c3c3;
      }

      #search_wrap {
        border: 1px solid var(--theme-color-5);;
        margin-right: 10px;
        padding: 5px;
      }

      iron-icon {
        color: var(--theme-color-5);
      }

      @media screen and (max-width: 1200px) {
        :host {
          width: 20%;
        }
      }

      @media screen and (max-width: 700px) {
        :host {
          width: 30%;
        }
      }
      @media screen and (max-width: 500px) {
        :host {
          width: 45%;
          margin-right: -4px;
        }
      }
    </style>
    <div id="search_wrap">
      <iron-icon icon="search"></iron-icon>
    </div>
`,

  is: 'page-search'
});
