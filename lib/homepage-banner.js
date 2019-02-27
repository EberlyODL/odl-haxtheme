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

      @media screen and (max-width: 700px) {
        .image_wrap {
          height: 55vw;
        }
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
      }

      .image_text h2 {
        color: var(--theme-color-4);
        width: 100%;
        font-weight: normal;
        margin: 0;
        padding: 0;
        font-size: calc(23px + (72 - 28) * ((100vw - 300px) / (1600 - 300)));
      }

      .branding_wrap {
        display: flex;
        align-items: center;
        background-color: var(--theme-color-2);
        border-top: solid 4px var(--theme-color-4);
        border-bottom: solid 4px var(--theme-color-4);
      }

      @media screen and (max-width: 700px) {
        .branding_wrap {
          display: none;
        }
      }

      .logo {
        position: absolute;
        width: 40%;
      }

      .logo img {
        width: 48%;
        border: 4px solid var(--theme-color-4);
        border-radius: 50%;
        background-color: var(--theme-color-2);
        margin-left: 25px;
        margin-top: -52px;
      }

      .company_name {
        width: 76%;
        margin-left: auto;
      }

      .company_name h2 {
        font-size: calc(18px + (72 - 28) * ((100vw - 300px) / (1600 - 300)));
        color: var(--theme-color-4);
        font-weight: normal;
        margin: 5px 0;
      }
    </style>
    <div id="banner_wrap">
      <div class="image_wrap">
        <div class="image"></div>
        <div class="image_text">
          <h2>[[text]]</h2>
        </div>
      </div>
      <div class="branding_wrap">
        <div class="logo">
          <img src="files/theme-images/logos/odl-logo.png" alt="Office of Digital Learning">
        </div>
        <div class="company_name">
          <h2>Office of Digital Learning</h2>
        </div>
      </div>
    </div>
`,

  is: 'homepage-banner',

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
    * Alt text for image
    */
    alt: {
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
  },

  observers: [
    '__updateImage(image)'
  ],

  __updateImage: function (image) {
    this.updateStyles({ "--image-background": `url(${image})` });
  }
});
