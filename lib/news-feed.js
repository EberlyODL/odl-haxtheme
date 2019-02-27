import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import '@polymer/iron-image/iron-image.js';
import { store } from "@lrnwebcomponents/haxcms-elements/lib/haxcms-site-store.js";
import { autorun, toJS } from "mobx";
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
        --theme-color-1: #363533;
        --theme-color-2: #e2801e;
        --theme-color-4: #fff;
      }

      h2 {
        margin: 0;
      }

      .feed_header h2 {
        margin: 0;
        color: var(--theme-color-4);
        font-size: 40px;
        font-weight: normal;
      }

      #news_feed_wrap {
        margin: 20px;
      }

      .feed_header {
        background-color: var(--theme-color-2);
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        padding: 5px;
      }

      #card_wrap {
        background-color: var(--theme-color-4);
        margin: 10px;
        padding: 15px;
        box-shadow: 0 1px 2px #dcdcdc;
      }

      #card_image {
        height: 176px;
      }

      #card_image iron-image {
        height: 100%;
        width: 100%;
      }

      #card_heading h2 {
        color: var(--theme-color-1);
        margin: 11px 0px 11px;
        font-size: 18px;
      }

      #card_heading a {
        text-decoration: none;
      }

      #card_heading h2:hover {
        color: var(--theme-color-2);
      }

      #card_footer {
        display: flex;
        align-items: center;
      }

      iron-image#author_image {
        border-radius: 50%;
        margin-right: 10px;
      }
    </style>
    <div id="news_feed_wrap">
      <div class="feed_header">
        <h2>News</h2>
      </div>
      <template is="dom-repeat" items="[[_items]]">
        <div id="card_wrap">
          <div id="card_image">
            <iron-image sizing="cover" src="[[item.metadata.image]]"></iron-image>
          </div>
          <div id="card_heading">
            <a href\$="[[item.location]]">
              <h2>[[item.title]]</h2>
            </a>
          </div>
          <div id="card_footer">
            <iron-image id="author_image" style="width:50px; height:50px;" sizing="cover" src="[[item.metadata.authorImage]]"></iron-image>
            <div id="author_name">[[item.metadata.author]]</div>
          </div>
        </div>
      </template>
  </div>
`,

  is: 'news-feed',

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

  attached: async function () {
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

    // const pagesTrimmed = pagesFiltered.slice(2);
    // this.set("_items", pagesTrimmed);

    this.set("_items", pagesFiltered);

    const archiveList = pagesFiltered.splice(3);

    // To do - Will need to sort by date created.
  },
  created: function () {
    this.__disposer = autorun(() => {
      this.manifest = toJS(store.routerManifest);
    });
  },
  detached: function() {
    this.__disposer();
  },
});
