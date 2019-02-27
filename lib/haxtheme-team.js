import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/haxcms-site-store.js";
import { autorun, toJS } from "mobx";
import './page-banner.js';
import './team-card.js';
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
        background-color: #f5f5f5;
      }
      #team_card {
        display: flex;
        flex-wrap: wrap;
        width: 66%;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
      }

    
        </style>
    <page-banner image="files/theme-images/page-banners/haxtheme-team-banner.jpg" text="Our Team" alt="Office of Digital Learning Team"></page-banner>
      <div id="team_card">
        <template is="dom-repeat" items="[[_items]]">
          <team-card name="[[item.title]]" image="[[item.metadata.image]]" item="[[item]]" position="[[item.metadata.jobTitle]]"></team-card>
        </template>
      </div>
`,

  is: 'haxtheme-team',

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

  attached: function () {
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
    
    // const pagesTrimmed = pagesFiltered.slice(2);
    // this.set("_items", pagesTrimmed);
    this.set("_items", pagesFiltered);

    // To do - Will need to sort by date created.
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
