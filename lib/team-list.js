import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/haxcms-site-store.js";
import { autorun, toJS } from "mobx";
import './team-card.js';
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
      }
    </style>
      
    <template is="dom-repeat" items="[[_items]]">
      <team-card name="[[item.title]]" image="[[item.metadata.image]]"
        item="[[item]]" position="[[item.metadata.jobTitle]]"></team-card>
    </template>
    `,
    is: 'team-list',
    properties: {
    /**
    * Type of data to select from site.json
    */
    type: {
      type: String,
      value: 'team',
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

  attached: async function () {
    const pages = this.manifest.items
    const pagesFiltered = pages.filter(item => {
      if (typeof item.metadata !== 'undefined') {
        if (typeof item.metadata.type !== 'undefined') {
          if (item.metadata.type === 'team') {
            return true;
          }
        }
      }
      return false
    })

    this.set("_items", pagesFiltered);
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