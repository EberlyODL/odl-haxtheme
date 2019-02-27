import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";

Polymer({
  _template: html`
    <style>
      :host {
          display: block;
          --image-background: '';
          --theme-color-2: #e2801e;
          --theme-color-4: #fff;
      }

      .image_wrap {
        background-image: var(--image-background);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: right center;
        width: 100%;
        min-height: 32vw;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 1 1 auto;
        margin: 0;
        padding: 0;
      }

      .image_text h2 {
        margin: 0;
        padding: 0;
      }

      .image_text {
        background: rgba(0, 0, 0, 0.5);
        width: calc(150px + (355 - 28) * ((100vw - 300px) / (1600 - 300)));
        margin: 0 5vw;
        padding: 2vw;
        text-align: center;
      }

      .image_text h2 {
        color: var(--theme-color-4);
        width: 100%;
        font-weight: normal;
        margin: 0;
        padding: 0;
        font-size: calc(23px + (72 - 28) * ((100vw - 300px) / (1600 - 300)));
      }

    </style>
    <div id="banner_wrap">
      <div class="image_wrap">
        <div class="banner_image"></div>
        <div class="image_text">
          <h2>[[text]]</h2>
        </div>
      </div>
    </div>`,

  is: 'page-banner',

  properties: {
    /**
     * Image source
     */
    image: {
      type: String,
      value: '',
      reflectToAttribute: true,
    },
    /**
    * Text over image
    */
    text: {
      type: String,
      value: '',
      reflectToAttribute: true,
    },
    /**
    * Alt text for image
    */
    alt: {
      type: String,
      value: '',
      reflectToAttribute: true,
    },
  },

  observers: [
    '__updateImage(image)'
  ],

  __updateImage: function (image) {
    this.updateStyles({ "--image-background": `url(${image})` });
  }
});
