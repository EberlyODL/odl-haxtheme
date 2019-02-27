/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-pages/iron-pages.js';
import '@lrnwebcomponents/simple-colors/simple-colors.js';
import { HAXCMSTheme } from "@lrnwebcomponents/haxcms-elements/lib/HAXCMSThemeWiring.js";
import './lib/haxtheme-home.js';
import './lib/haxtheme-news.js';
import './lib/haxtheme-team.js';
import './lib/haxtheme-courses.js';
import './lib/page-topbar.js';
import './lib/temp-nav.js';
import './lib/page-footer.js';
import './lib/page-scroll.js';
/**
 * `odl-haxtheme`
 * `ODL custom site theme`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class OdlHaxtheme extends HAXCMSTheme(PolymerElement) {
  
  // render function
  static get template() {
    return html`
<style>:host {
  display: block;
}

:host([hidden]) {
  display: none;
}
:host #slot::slotted(*) {
  font-family: "Roboto", sans-serif;
}


:host([edit-mode]) #slot {
  display: none;
}</style>
<style include="simple-colors"></style>

<page-topbar></page-topbar>
<temp-nav></temp-nav>
<iron-pages selected="[[selectedPage]]">
    <haxtheme-home name="home">
        <div id="slot">
            <slot></slot>
        </div>
    </haxtheme-home>
    <haxtheme-news></haxtheme-news>
    <haxtheme-team></haxtheme-team>
    <haxtheme-courses></haxtheme-courses>
</iron-pages>
<page-scroll></page-scroll>
<page-footer></page-footer>
<map-menu id="menu" selected="[[selected]]" manifest="[[manifest]]" active-indicator auto-scroll></map-menu>
<div class="activeitem">
    <paper-button id="unset" on-tap="_unsetTapped">Unset activeItem</paper-button>
    <div id="contentcontainer">
        <div id="slot">
            <slot></slot>
        </div>
    </div>
</div>`;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
  /**
    * editting state for the page
    */
  editMode: {
    type: Boolean,
    reflectToAttribute: true,
    observer: "_editModeChanged"
  },
  /**
    * Active item which is in JSON Outline Schema
    */
  activeItem: {
    type: Object
  },
  /**
    * a manifest json file decoded, in JSON Outline Schema format
    */
  manifest: {
    type: Object,
  },
  /**
    * DOM node that wraps the slot
    */
  contentContainer: {
    type: Object,
    value: null,
    observer: "_contentContainerChanged"
  },
  /**
    * active manifest index, key to location in the manifest itemsarray
    */
  activeManifestIndex: {
    type: Number,
    value: -1
  },
  /**
   * The "page" to show (overview or blog post itself).
   */
  selectedPage: {
    type: Number,
    reflectToAttribute: true,
    value: 0,
  },
}
;
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "odl-haxtheme";
  }
  /**
   * life cycle, element is afixed to the DOM
   */
  connectedCallback() {
    super.connectedCallback();
  }
  /**
   * Notice active item changed state
   */
   _activeItemEvent(e) {
    if (typeof e.detail.id !== typeof undefined) {
      switch (e.detail.id) {
      case 'home':
      this.selectedPage = 0;
     break;
      case 'news':
      this.selectedPage = 1;
     break;
      case 'team':
      this.selectedPage = 2;
     break;
      case 'courses':
      this.selectedPage = 3;
     break;
  }
      window.scrollTo(0, 0);
      this.set('activeItem', e.detail);

    }
    else {
      this.selectedPage = 0;
    }
  }
  /**
   * Settings activeItem to nothing will ensure that state goes back to nothing active
   * and then other options appear
   */
  _unsetTapped(e) {
    new CustomEvent("json-outline-schema-active-item-changed", {
      bubbles: true,
      cancelable: true,
      detail: {}
    });
  }
  /**
   * life cycle, element is removed from the DOM
   */
  //disconnectedCallback() {}
}
window.customElements.define(OdlHaxtheme.tag, OdlHaxtheme);
export { OdlHaxtheme };
