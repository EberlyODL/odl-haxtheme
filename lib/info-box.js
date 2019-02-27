import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-button/paper-button.js';
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
        --theme-color-1: #363533;
        --theme-color-2: #e2801e;
        --theme-color-4: #fff;
      }

      #box_wrap {
        background-color: var(--theme-color-1);
      }

      .action_text {
        padding: 75px 0 25px 0px;
        width: 71%;
        margin-top: -1px;
        margin-left: auto;
        margin-right: auto;
        font-size: 24px;
        font-weight: 100;
        color: var(--theme-color-4);
        line-height: 1.5;
      }

      @media screen and (max-width: 700px) {
        .action_text {
          width: 93%;
          font-size: 18px;
          padding: 20px 15px;
          border-top: solid 5px var(--theme-color-2);
        }
      }

      .action_button {
        padding: 40px 11px 20px;
        display: flex;
        justify-content: center;
        margin-top: -40px;
      }

      @media screen and (max-width: 700px) {
        .action_button {
          justify-content: center;
          margin-top: -35px;
          margin-right: 0;
          padding-bottom: 15px
        }
      }

      paper-button#learn {
        color: var(--theme-color-4);
        border: solid 1px var(--theme-color-4);
        border-radius: 0;
      }

      paper-button#learn:hover,
      paper-button#learn:focus {
        background-color: var(--theme-color-2);
      }
    </style>
    <div id="box_wrap">
      <div class="action_text">
        <slot name="action_text"></slot>
      </div>
      <div class="action_button">
        <a href\$="#">
          <paper-button noink="" id="learn">
            <div class="title">Learn More</div>
            <iron-icon icon="chevron-right"></iron-icon>
          </paper-button>
        </a>
      </div>
    </div>
`,

  is: 'info-box'
});
