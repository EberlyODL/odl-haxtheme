import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
        --theme-color-1: #363533;
        --theme-color-2: #e2801e;
        --theme-color-3: #f5f5f5;
        --theme-color-4: #fff;
      }

      h2 {
        margin: 0;
        color: var(--theme-color-4);
        font-size: 40px;
        font-weight: normal;
      }

      #highlights_feed_wrap {
        margin: 20px;
      }

      .feed_header {
        background-color: var(--theme-color-2);
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        padding: 5px;
      }
    </style>
    <div id="highlights_feed_wrap">
      <div class="feed_header">
        <h2>Testimonials</h2>
      </div>
      <slot></slot>
    </div>
`,

  is: "testimonials-feed"
});
