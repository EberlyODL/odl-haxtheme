import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import '@polymer/paper-button/paper-button.js';
import "@polymer/iron-icon/iron-icon.js";
import './haxtheme-icons.js';

Polymer({
  _template: html`
    <style>
      :host {
        display: block;
        --theme-color-1: #363533;
        --theme-color-2: #e2801e;
        --theme-color-4: #fff;
      }

      #social_wrap {
        background-color: var(--theme-color-1);
        height: 80px;
        padding: 25px 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      iron-icon {
        width: 40px;
        height: 40px;
        fill: var(--theme-color-4);
      }

      paper-button {
        padding: 0;
        margin: 0;
        min-width: 4em;
      }

      #icons {
        display: flex;
      }

      #info_wrap {
        background-color: var(--theme-color-2);
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: var(--theme-color-4);
        font-weight: 100;
        font-size: 15px;
      }

      .legal_statement {
        display: flex;
        padding-top: 10px;
      }

      .legal_item {
        color: var(--theme-color-4);
        padding: 0 5px 25px 0;
      }

      .legal_item a {
        text-decoration: none;
        color: var(--theme-color-4);
      }

      .legal_item a:hover {
        color: var(--theme-color-1);
      }

      @media screen and (max-width: 600px) {
        .legal_item {
          font-size: 11px;
        }
      }

      #odl_mark {
        background-color: var(--theme-color-2);
        border: 2px solid #fff;
        border-radius: 50%;
        padding: 8px;
        opacity: 0.4;
      }

    </style>
    <div id="footer_wrap">
      <div id="social_wrap">
        <div id="icons">
          <div class="icon">
            <a href="https://twitter.com/Eberly_ODL" target="_blank">
              <paper-button id="twitter" aria-label="twitter" noink="">
                <iron-icon icon="haxthemeicons:twitter" role="img"></iron-icon>
              </paper-button>
            </a>
          </div>
          <div class="icon">
            <a href="https://vimeo.com/user38447507" target="_blank">
              <paper-button id="vimeo" aria-label="vimeo" noink="">
                <iron-icon icon="haxthemeicons:vimeo" role="img"></iron-icon>
              </paper-button>
            </a>
          </div>
          <div class="icon">
            <a href="https://www.pinterest.com/ecosodl/" target="_blank">
              <paper-button id="pinterest" aria-label="pinterest" noink="">
                <iron-icon icon="haxthemeicons:pinterest" role="img"></iron-icon>
              </paper-button>
            </a>
          </div>
          <div class="icon">
            <a href="https://www.flickr.com/photos/ecosodl" target="_blank">
              <paper-button id="flikr" aria-label="flikr" noink="">
                <iron-icon icon="haxthemeicons:flikr" role="img"></iron-icon>
              </paper-button>
            </a>
          </div>
          <div class="icon">
            <a href="https://www.youtube.com/user/EberlySciOnline" target="_blank">
              <paper-button id="youtube" aria-label="youtube" noink="">
                <iron-icon icon="haxthemeicons:youtube" role="img"></iron-icon>
              </paper-button>
            </a>
          </div>
          <div class="icon">
            <a href="mailto:odl@science.psu.edu" target="_blank">
              <paper-button id="email" aria-label="email" noink="">
                <iron-icon icon="haxthemeicons:email" role="img"></iron-icon>
              </paper-button>
            </a>
          </div>
       
        </div>
      </div>
      <div id="info_wrap">
        <div class="address">
          221 Ritenour | University Park, PA 16802 | (814) 867-1391
        </div>
        <div id="basement">
          <div class="legal_statement">
            <div class="legal_item">
              <a href="https://www.psu.edu/web-privacy-statement" target="_blank">Privacy |</a>
            </div>
            <div class="legal_item">
              <a href="https://policy.psu.edu/policies" target="_blank">Non Discrimination |</a>
            </div>
            <div class="legal_item">
              <a href="https://policy.psu.edu/policies" target="_blank">Equal Opportunity |</a>
            </div>
            <div class="legal_item">
              <a href="https://www.psu.edu/accessibilitystatement" target="_blank">Accessibility |</a>
            </div>
            <div class="legal_item">
              <a href="https://www.psu.edu/copyright-information" target="_blank">Copyright</a>
            </div>
          </div>
        </div>
        <div id="odl_mark">
          <a href="http://haxcms.ddev.local/_sites/odl/index.html">
            <iron-image style="width:40px; height:40px;" alt="Office of Digital Learning, Eberly College of Science" sizing="cover" src="files/theme-images/logos/odl-logo.png"></iron-image>
          </a>
        </div>
      </div>
    </div>
`,
  is: "page-footer"
});
