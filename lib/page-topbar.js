import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import './company-mark.js';
import './page-search.js';
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
        padding: 2px;
      }

      #topbar-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    </style>
    <div id="topbar-wrap">
      <company-mark></company-mark>
      <page-search></page-search>
    </div>
`,

  is: 'page-topbar'
});
