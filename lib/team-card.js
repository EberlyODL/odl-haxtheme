import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import '@polymer/iron-image/iron-image.js';
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
        --card-image: '';
      }

      #card_wrap {
        margin: 10px;
      }

      .image {
        background-image: var(--card-image);
        background-position: top center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%;
        justify-content: center;
        border: solid 8px #e2801e;
      }

      #card_image {
        width: 300px;
        height: 300px;
        display: flex;
        align-items: center;
        border-radius: 50%;
      }

      #info_container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 300px;
        width: 300px;
        background: rgba(0, 0, 0, 0.8);
        border-radius: 50%;
        color: #fff;
        opacity: 0;
      }

      #info_container:hover {
        opacity: 0.9;
        transition: all .3s ease-in-out;
      }

      .info {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      #name {
        text-transform: uppercase;
        padding-bottom: 10px;
        font-size: 20px;
        border-bottom: solid 1px #fff;
        margin-bottom: 7px;
      }
      
    </style>
    <!-- <paper-button on-tap="__setPage"> -->
        <div id="card_wrap">
          <div id="card_image" class="image">
            <div id="info_container">
              <div class="info">
                <div id="name">[[name]]</div>
                <div id="position">[[position]]</div>
              </div>
            </div>
          </div>
        </div>
    <!-- </paper-button> -->
`,

  is: 'team-card',

  properties: {

    /**
    * image
    */
    image: {
      type: String,
      value: '',
      reflectToAttribute: true,
      observer: "__updateStyles",
    },
    /**
    * name
    */
    name: {
      type: String,
      value: '',
      reflectToAttribute: true,
    },
    /**
    * position
    */
    position: {
      type: String,
      value: '',
      reflectToAttribute: true,
    },
  },

  // __setPage: function () {
  //   },
  __updateStyles: function (newValue) {
    this.updateStyles({ "--card-image": `url(${newValue})` });
  }
});
