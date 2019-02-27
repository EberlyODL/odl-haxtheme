import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import '@polymer/iron-image/iron-image.js';
import { store } from "@lrnwebcomponents/haxcms-elements/lib/haxcms-site-store.js";
import { autorun, toJS } from "mobx";
Polymer({
  _template: html`
  <style>
      :host {
          display: block;
          background-color: #fff;
          box-shadow: 0 1px 2px #dcdcdc;
          padding: 10px;
          margin-top: 10px;
          --theme-color-1: #363533;
          --theme-color-2: #e2801e;
      }

      #archive_wrap {
        display: flex;
        align-items: center;
        border-bottom: solid 1px #dcdcdc;
        padding-bottom: 8px;
        padding-top: 8px;
      }

      #archive_header h2 {
        font-size: 26px;
        margin: 0 0 10px;
        color: var(--theme-color-2);
      }

      #card_heading a {
        text-decoration: none;
        font-size: 16px;
      }

      #card_heading a:hover {
        color: #4c4c4c;
      }

      #card_image {
        display: flex;
        margin-right: 10px;
      }

      #card_image iron-image {
        height: 50px;
        width: 50px;
      }
  </style>
  <div id="archive_header">
      <h2>News Archive</h2>
  </div>
  <template is="dom-repeat" items="[[_items]]">
      <div id="archive_wrap">
    <div id="card_image">
      <iron-image sizing="cover" src="[[item.metadata.image]]"></iron-image>
    </div>
    <div id="card_heading">
      <a href\$="[[item.location]]">[[item.title]]</a>
    </div>
  </div></template>
`,

  is: 'news-archive',

  properties: {
    /**
     * Type of data to select from site.json
     */
    type: {
      type: String,
      value: 'news',
      reflectToAttribute: true,
    },
    /**
     * Items from sites.json
     */
    _items: {
      type: Array,
      value: [],
    },
  },

  attached: function () {
    const pages = this.manifest.items
    const pagesFiltered = pages.filter(item => {
      if (typeof item.metadata !== 'undefined') {
        if (typeof item.metadata.type !== 'undefined') {
          if (item.metadata.type === 'news') {
            return true;
          }
        }
      }
      return false
    })
    this.set("_items", pagesFiltered);

    const archiveList = pagesFiltered.splice(0,5);
  },
  created: function () {
    this.__disposer = autorun(() => {
      this.manifest = toJS(store.routerManifest);
    });
  },
  detached: function () {
    this.__disposer();
  },
});
