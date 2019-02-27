import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import "@polymer/paper-button/paper-button.js";
import './homepage-banner.js';
import './info-box.js';
import './news-feed.js';
import './videos-feed.js';
import './testimonials-feed.js';
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

      .feed_header h2 {
        margin: 0;
        color: var(--theme-color-4);
        font-size: 38px;
        font-weight: normal;
      }

      .feed_header {
        background-color: var(--theme-color-1);
        display: flex;
        justify-content: center;
      }

      #promo_tile_wrap {
        display: flex;
        flex-wrap: wrap;
        width: 100%
      }

      #promo_tile_wrap>* {
        width: 100%;
      }

      @media screen and (min-width: 600px) {
        #promo_tile_wrap>* {
          width: 50%;
        }
      }

      @media screen and (min-width: 1124px) {
        #promo_tile_wrap>* {
          width: 25%;
        }
      }

      #content_wrap {
        display: flex;
      }

      @media screen and (max-width: 700px) {
        #content_wrap {
          flex-direction: column;
        }
      }

      .news_items {
        width: 33.3%;
      }

      @media screen and (max-width: 700px) {
        .news_items {
          width: 100%;
        }
      }

      #news_wrap {
        background-color: var(--theme-color-3);
      }

      .action_button {
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
      }

      paper-button#news {
        display: flex;
        justify-content: center;
        background-color: var(--theme-color-2);
        color: var(--theme-color-4);
        border-radius: 0;
        margin-bottom: 10px;
      }

      #video_wrap {
        background-color: var(--theme-color-3);
      }

      paper-button#videos {
        display: flex;
        justify-content: center;
        background-color: var(--theme-color-2);
        color: var(--theme-color-4);
        border-radius: 0;
        margin-bottom: 10px;
      }

      #testimonial_wrap {
        background-color: var(--theme-color-3);
      }

      paper-button#highlights {
        display: flex;
        justify-content: center;
        background-color: var(--theme-color-2);
        color: var(--theme-color-4);
        border-radius: 0;
        margin-bottom: 10px;
      }

      .video {
        margin-bottom: 15px;
        background-color: #fff;
        box-shadow: 0 1px 2px #dcdcdc;
        padding: 16px;
      }

      .video_title {
        background-color: var(--theme-color-1);
        padding: 4px 10px;
        margin-top: -5px;
      }

      .video_title h2 {
        font-weight: normal;
        color: #fff;
        margin: 11px 0px 11px;
        font-size: 18px;
      }
    </style>
    <homepage-banner image="files/theme-images/page-banners/odl_homepage_banner.png" alt="students receiving instruction in classroom" text="A creative studio for your classroom"></homepage-banner>
    <info-box>
      <span slot="action_text">
        The Office of Digital Learning (ODL) helps faculty and students make the
        most of digital learning technology.
        We collaboratively design and build tools for any pedagogy. Dream it and
        we'll build it.
      </span>
    </info-box>
    <div id="promo_tile_wrap">
      <div class="promo_tile">
        <promo-tile title="ELMS:LN" image="files/theme-images/promo-tiles/elmsln-tile.png" alt="ELMS:LN" url="https://www.elmsln.org/">
          Create your course using the ELMS:LN platform and gain access to
            a network of innovative technologies
            instantly.
        </promo-tile>
      </div>
      <div class="promo_tile">
        <promo-tile title="Virtual Reality" image="files/theme-images/promo-tiles/vr-tile.png" alt="student using
          VR goggles" url="https://www.google.com">
          Enter another dimension and add exciting virtual interactions to
            your online classroom.
        </promo-tile>
      </div>
      <div class="promo_tile">
        <promo-tile title="HAX" image="files/theme-images/promo-tiles/hax-tile.png" alt="user
          enjoying the HAX authoring experience" url="https://haxtheweb.org">
          Quickly create and edit accessible, high quality content using
            this next generation authoring
            experience.
        </promo-tile>
      </div>
      <div class="promo_tile">
        <promo-tile title="One Button Studio" image="files/theme-images/promo-tiles/obs-tile.png" alt="camera
          filming video" url="https://www.google.com">
          Film engaging video content for your class with ease using our
            one button studio and light board.
        </promo-tile>
      </div>
    </div>

    <div id="content_wrap">
      <div id="news_wrap" class="news_items">
        <news-feed></news-feed>
        <div class="action_button">
          <a href="news">
            <paper-button noink="" id="news">
              <div class="wrap_action">News</div>
              <iron-icon icon="chevron-right"></iron-icon>
            </paper-button>
          </a>
        </div>
      </div>
      <div id="video_wrap" class="news_items">
        <videos-feed>
          <div class="video">
            <iframe width="100%" height="220" src="https://www.youtube.com/embed/sCr3w_azmC8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
              <div class="video_title">
                <h2>Chem 110 | Ions | Joseph Houck</h2>
              </div>
          </div>
          <div class="video">
            <iframe width="100%" height="220" src="https://www.youtube.com/embed/8-PdyiAkkuI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
              <div class="video_title">
                <h2>Tutorial | H5P | Charles Lavera</h2>
              </div>
          </div>
          <div class="video">
              <iframe width="100%" height="220" src="https://www.youtube.com/embed/5zL1lmPwEt8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                <div class="video_title">
                  <h2>Tutorial | Monorepos | Michael Potter</h2>
                </div>
            </div>
        </videos-feed>
        <div class="action_button">
          <a href="videos">
            <paper-button noink="" id="videos">
              <div class="wrap_action">Videos</div>
              <iron-icon icon="chevron-right"></iron-icon>
            </paper-button>
          </a>
        </div>
      </div>
      <div id="testimonial_wrap" class="news_items">
        <testimonials-feed>
            <div id="contentcontainer">
                <slot></slot>
              </div>
        </testimonials-feed>
        <div class="action_button">
          <a href="testimonials">
            <paper-button noink="" id="highlights">
              <div class="wrap_action">Testimonials</div>
              <iron-icon icon="chevron-right"></iron-icon>
            </paper-button>
          </a>
        </div>
      </div>
    </div>
`,

  is: 'haxtheme-home'
});
