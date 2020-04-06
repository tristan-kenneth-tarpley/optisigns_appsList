
const test = () => {
    let p = document.createElement('p')
    p.textContent = 'hello'

    return p
}

const styles = () => {
    let el = document.createElement('div')
    /*html*/
    el.innerHTML = `

    <style>
        * {
            box-sizing : border-box;
        }
        
        .container-fluid{margin-right:auto;margin-left:auto;padding-right:2rem;padding-left:2rem}._row{box-sizing:border-box;display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex:0 1 auto;-webkit-box-flex:0;flex:0 1 auto;-ms-flex-direction:_row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:_row;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-1rem;margin-left:-1rem}._row.reverse{-ms-flex-direction:_row-reverse;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;flex-direction:_row-reverse}._col.reverse{-ms-flex-direction:column-reverse;-webkit-box-orient:vertical;-webkit-box-direction:reverse;flex-direction:column-reverse}._col-xs,._col-xs-1,._col-xs-10,._col-xs-11,._col-xs-12,._col-xs-2,._col-xs-3,._col-xs-4,._col-xs-5,._col-xs-6,._col-xs-7,._col-xs-8,._col-xs-9{box-sizing:border-box;-ms-flex:0 0 auto;-webkit-box-flex:0;flex:0 0 auto;padding-right:1rem;padding-left:1rem}._col-xs{-webkit-flex-g_row:1;-ms-flex-positive:1;-webkit-box-flex:1;flex-g_row:1;-ms-flex-preferred-size:0;flex-basis:0;max-width:100%}._col-xs-1{-ms-flex-preferred-size:8.333%;flex-basis:8.333%;max-width:8.333%}._col-xs-2{-ms-flex-preferred-size:16.667%;flex-basis:16.667%;max-width:16.667%}._col-xs-3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}._col-xs-4{-ms-flex-preferred-size:33.333%;flex-basis:33.333%;max-width:33.333%}._col-xs-5{-ms-flex-preferred-size:41.667%;flex-basis:41.667%;max-width:41.667%}._col-xs-6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}._col-xs-7{-ms-flex-preferred-size:58.333%;flex-basis:58.333%;max-width:58.333%}._col-xs-8{-ms-flex-preferred-size:66.667%;flex-basis:66.667%;max-width:66.667%}._col-xs-9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}._col-xs-10{-ms-flex-preferred-size:83.333%;flex-basis:83.333%;max-width:83.333%}._col-xs-11{-ms-flex-preferred-size:91.667%;flex-basis:91.667%;max-width:91.667%}._col-xs-12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}._col-xs-offset-1{margin-left:8.333%}._col-xs-offset-2{margin-left:16.667%}._col-xs-offset-3{margin-left:25%}._col-xs-offset-4{margin-left:33.333%}._col-xs-offset-5{margin-left:41.667%}._col-xs-offset-6{margin-left:50%}._col-xs-offset-7{margin-left:58.333%}._col-xs-offset-8{margin-left:66.667%}._col-xs-offset-9{margin-left:75%}._col-xs-offset-10{margin-left:83.333%}._col-xs-offset-11{margin-left:91.667%}.start-xs{-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start;text-align:start}.center-xs{-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center;text-align:center}.end-xs{-ms-flex-pack:end;-webkit-box-pack:end;justify-content:flex-end;text-align:end}.top-xs{-ms-flex-align:start;-webkit-box-align:start;align-items:flex-start}.middle-xs{-ms-flex-align:center;-webkit-box-align:center;align-items:center}.bottom-xs{-ms-flex-align:end;-webkit-box-align:end;align-items:flex-end}.around-xs{-ms-flex-pack:distribute;justify-content:space-around}.between-xs{-ms-flex-pack:justify;-webkit-box-pack:justify;justify-content:space-between}.first-xs{-ms-flex-order:-1;-webkit-box-ordinal-group:0;order:-1}.last-xs{-ms-flex-order:1;-webkit-box-ordinal-group:2;order:1}@media only screen and (min-width:48em){.container{width:46rem}._col-sm,._col-sm-1,._col-sm-10,._col-sm-11,._col-sm-12,._col-sm-2,._col-sm-3,._col-sm-4,._col-sm-5,._col-sm-6,._col-sm-7,._col-sm-8,._col-sm-9{box-sizing:border-box;-ms-flex:0 0 auto;-webkit-box-flex:0;flex:0 0 auto;padding-right:1rem;padding-left:1rem}._col-sm{-webkit-flex-g_row:1;-ms-flex-positive:1;-webkit-box-flex:1;flex-g_row:1;-ms-flex-preferred-size:0;flex-basis:0;max-width:100%}._col-sm-1{-ms-flex-preferred-size:8.333%;flex-basis:8.333%;max-width:8.333%}._col-sm-2{-ms-flex-preferred-size:16.667%;flex-basis:16.667%;max-width:16.667%}._col-sm-3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}._col-sm-4{-ms-flex-preferred-size:33.333%;flex-basis:33.333%;max-width:33.333%}._col-sm-5{-ms-flex-preferred-size:41.667%;flex-basis:41.667%;max-width:41.667%}._col-sm-6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}._col-sm-7{-ms-flex-preferred-size:58.333%;flex-basis:58.333%;max-width:58.333%}._col-sm-8{-ms-flex-preferred-size:66.667%;flex-basis:66.667%;max-width:66.667%}._col-sm-9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}._col-sm-10{-ms-flex-preferred-size:83.333%;flex-basis:83.333%;max-width:83.333%}._col-sm-11{-ms-flex-preferred-size:91.667%;flex-basis:91.667%;max-width:91.667%}._col-sm-12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}._col-sm-offset-1{margin-left:8.333%}._col-sm-offset-2{margin-left:16.667%}._col-sm-offset-3{margin-left:25%}._col-sm-offset-4{margin-left:33.333%}._col-sm-offset-5{margin-left:41.667%}._col-sm-offset-6{margin-left:50%}._col-sm-offset-7{margin-left:58.333%}._col-sm-offset-8{margin-left:66.667%}._col-sm-offset-9{margin-left:75%}._col-sm-offset-10{margin-left:83.333%}._col-sm-offset-11{margin-left:91.667%}.start-sm{-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start;text-align:start}.center-sm{-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center;text-align:center}.end-sm{-ms-flex-pack:end;-webkit-box-pack:end;justify-content:flex-end;text-align:end}.top-sm{-ms-flex-align:start;-webkit-box-align:start;align-items:flex-start}.middle-sm{-ms-flex-align:center;-webkit-box-align:center;align-items:center}.bottom-sm{-ms-flex-align:end;-webkit-box-align:end;align-items:flex-end}.around-sm{-ms-flex-pack:distribute;justify-content:space-around}.between-sm{-ms-flex-pack:justify;-webkit-box-pack:justify;justify-content:space-between}.first-sm{-ms-flex-order:-1;-webkit-box-ordinal-group:0;order:-1}.last-sm{-ms-flex-order:1;-webkit-box-ordinal-group:2;order:1}}@media only screen and (min-width:62em){.container{width:61rem}._col-md,._col-md-1,._col-md-10,._col-md-11,._col-md-12,._col-md-2,._col-md-3,._col-md-4,._col-md-5,._col-md-6,._col-md-7,._col-md-8,._col-md-9{box-sizing:border-box;-ms-flex:0 0 auto;-webkit-box-flex:0;flex:0 0 auto;padding-right:1rem;padding-left:1rem}._col-md{-webkit-flex-g_row:1;-ms-flex-positive:1;-webkit-box-flex:1;flex-g_row:1;-ms-flex-preferred-size:0;flex-basis:0;max-width:100%}._col-md-1{-ms-flex-preferred-size:8.333%;flex-basis:8.333%;max-width:8.333%}._col-md-2{-ms-flex-preferred-size:16.667%;flex-basis:16.667%;max-width:16.667%}._col-md-3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}._col-md-4{-ms-flex-preferred-size:33.333%;flex-basis:33.333%;max-width:33.333%}._col-md-5{-ms-flex-preferred-size:41.667%;flex-basis:41.667%;max-width:41.667%}._col-md-6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}._col-md-7{-ms-flex-preferred-size:58.333%;flex-basis:58.333%;max-width:58.333%}._col-md-8{-ms-flex-preferred-size:66.667%;flex-basis:66.667%;max-width:66.667%}._col-md-9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}._col-md-10{-ms-flex-preferred-size:83.333%;flex-basis:83.333%;max-width:83.333%}._col-md-11{-ms-flex-preferred-size:91.667%;flex-basis:91.667%;max-width:91.667%}._col-md-12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}._col-md-offset-1{margin-left:8.333%}._col-md-offset-2{margin-left:16.667%}._col-md-offset-3{margin-left:25%}._col-md-offset-4{margin-left:33.333%}._col-md-offset-5{margin-left:41.667%}._col-md-offset-6{margin-left:50%}._col-md-offset-7{margin-left:58.333%}._col-md-offset-8{margin-left:66.667%}._col-md-offset-9{margin-left:75%}._col-md-offset-10{margin-left:83.333%}._col-md-offset-11{margin-left:91.667%}.start-md{-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start;text-align:start}.center-md{-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center;text-align:center}.end-md{-ms-flex-pack:end;-webkit-box-pack:end;justify-content:flex-end;text-align:end}.top-md{-ms-flex-align:start;-webkit-box-align:start;align-items:flex-start}.middle-md{-ms-flex-align:center;-webkit-box-align:center;align-items:center}.bottom-md{-ms-flex-align:end;-webkit-box-align:end;align-items:flex-end}.around-md{-ms-flex-pack:distribute;justify-content:space-around}.between-md{-ms-flex-pack:justify;-webkit-box-pack:justify;justify-content:space-between}.first-md{-ms-flex-order:-1;-webkit-box-ordinal-group:0;order:-1}.last-md{-ms-flex-order:1;-webkit-box-ordinal-group:2;order:1}}@media only screen and (min-width:75em){.container{width:71rem}._col-lg,._col-lg-1,._col-lg-10,._col-lg-11,._col-lg-12,._col-lg-2,._col-lg-3,._col-lg-4,._col-lg-5,._col-lg-6,._col-lg-7,._col-lg-8,._col-lg-9{box-sizing:border-box;-ms-flex:0 0 auto;-webkit-box-flex:0;flex:0 0 auto;padding-right:1rem;padding-left:1rem}._col-lg{-webkit-flex-g_row:1;-ms-flex-positive:1;-webkit-box-flex:1;flex-g_row:1;-ms-flex-preferred-size:0;flex-basis:0;max-width:100%}._col-lg-1{-ms-flex-preferred-size:8.333%;flex-basis:8.333%;max-width:8.333%}._col-lg-2{-ms-flex-preferred-size:16.667%;flex-basis:16.667%;max-width:16.667%}._col-lg-3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}._col-lg-4{-ms-flex-preferred-size:33.333%;flex-basis:33.333%;max-width:33.333%}._col-lg-5{-ms-flex-preferred-size:41.667%;flex-basis:41.667%;max-width:41.667%}._col-lg-6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}._col-lg-7{-ms-flex-preferred-size:58.333%;flex-basis:58.333%;max-width:58.333%}._col-lg-8{-ms-flex-preferred-size:66.667%;flex-basis:66.667%;max-width:66.667%}._col-lg-9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}._col-lg-10{-ms-flex-preferred-size:83.333%;flex-basis:83.333%;max-width:83.333%}._col-lg-11{-ms-flex-preferred-size:91.667%;flex-basis:91.667%;max-width:91.667%}._col-lg-12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}._col-lg-offset-1{margin-left:8.333%}._col-lg-offset-2{margin-left:16.667%}._col-lg-offset-3{margin-left:25%}._col-lg-offset-4{margin-left:33.333%}._col-lg-offset-5{margin-left:41.667%}._col-lg-offset-6{margin-left:50%}._col-lg-offset-7{margin-left:58.333%}._col-lg-offset-8{margin-left:66.667%}._col-lg-offset-9{margin-left:75%}._col-lg-offset-10{margin-left:83.333%}._col-lg-offset-11{margin-left:91.667%}.start-lg{-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start;text-align:start}.center-lg{-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center;text-align:center}.end-lg{-ms-flex-pack:end;-webkit-box-pack:end;justify-content:flex-end;text-align:end}.top-lg{-ms-flex-align:start;-webkit-box-align:start;align-items:flex-start}.middle-lg{-ms-flex-align:center;-webkit-box-align:center;align-items:center}.bottom-lg{-ms-flex-align:end;-webkit-box-align:end;align-items:flex-end}.around-lg{-ms-flex-pack:distribute;justify-content:space-around}.between-lg{-ms-flex-pack:justify;-webkit-box-pack:justify;justify-content:space-between}.first-lg{-ms-flex-order:-1;-webkit-box-ordinal-group:0;order:-1}.last-lg{-ms-flex-order:1;-webkit-box-ordinal-group:2;order:1}}
        .card {
            border-radius: 6px;
            box-shadow:  8px 8px 16px #d9d9d9, 
             -8px -8px 16px #ffffff;
            display: flex;
            flex-direction: column;
            margin: .5em auto;
            height: 100%;

        }
        .card-header {
            width: 100%;
        }
        .card-header img {
            width: 100%;
        }
        .card-header_img_container {
            margin: 4vh auto 0;
            width: 50%;
        }
        .card-body {
            width: 100%;
            padding: 2em;
        }
        .app__title {
            font-family: open sans, sans-serif;
            color: #577083;
            display:flex;
            justify-content:center;
            text-transform: capitalize;
        }
        .app__link {
            text-decoration: none;
        }
        .app__link,
        p {
            color: #323333;
            font-size: 16px;
            line-height: 1.6em;
            font-family: futura-lt-w01-light,sans-serif;
        }
        h3,
        p,
        .app__desc {
            color: #323333;
            font: normal normal normal 14px/1.4em din-next-w01-light,din-next-w02-light,din-next-w10-light,sans-serif;
        }

        #categories p {
            cursor: pointer;
            opacity: .7;
            text-transform: capitalize;
        }
        #categories p.active {
            opacity: 1;
            font-weight: bold;
        }
        #categories p:hover {
            opacity: 1;
        }

        .input-group {
            width: 100%;
            display:flex;
            padding: .3em;
            border-radius: 6px;
            border: 2px solid rgba(0,0,0,.1);
        }
        .input-group-prepend {
            width: 15%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .input-group-prepend i {
            font-size: 1.5em;
        }
        .input-group input {
            width:85%;
            height:3em;
            border: none;
            font-size:1em;
        }
        .input-group input:focus {
            outline: none;
        }
    </style>
    `

    return el
}


const temp_data = [
{
    "description":"Instagram.png",
    "_id":"9decb270-ff63-4f01-bcd1-23f17f669c56",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.104Z",
    "description1":"Live scrolling wall of Instagram posts.\n\nYou can also review and moderate posts before they show up on your screens",
    "_updatedDate":"2020-04-06T02:10:36.104Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_f04686898bce4b35ab28dc55ac872682~mv2.png/v1/fill/w_392,h_392,al_c,q_85,usm_0.66_1.00_0.01/instagram.webp",
    "link":"https://www.optisigns.com/app-instagram",
    "category":"Social Media",
    "title":"Instagram"
    },
    {
    "description":"Twitter.png",
    "_id":"fccd646d-1934-41b2-93ed-45d0e242afab",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.103Z",
    "description1":"Live scrolling wall of tweets.\n\nYou can also review and moderate posts before they show up on your screens",
    "_updatedDate":"2020-04-06T02:10:36.103Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_7a819c7100644877bed4a8a7e4b42cdd~mv2.png/v1/fill/w_392,h_392,al_c,q_85,usm_0.66_1.00_0.01/twitter.webp",
    "link":"https://www.optisigns.com/app-twitter",
    "category":"Social Media",
    "title":"Twitter"
    },
    {
    "description":"Notice board.png",
    "_id":"313a197c-5519-474e-aedd-de2e01361539",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.102Z",
    "description1":"Quickly put up your signs with a GUI editor and pre-built templates from OptiSigns.",
    "_updatedDate":"2020-04-06T02:10:36.102Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_1fb0fe15c17c4fc09fa5b478e28d76cd~mv2.png/v1/fill/w_392,h_392,al_c,q_85,usm_0.66_1.00_0.01/notice-board-512.webp",
    "link":"https://www.optisigns.com/app-noticeboard",
    "category":"Communication",
    "title":"Notice board"
    },
    {
    "description":"google slides.png",
    "_id":"6849a625-0f37-4578-96d0-9d04ed5f5628",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.101Z",
    "description1":"Easily put Google Slides presentations on your screens. Any changes you make will automatically be updated.",
    "_updatedDate":"2020-04-06T02:10:36.101Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_b742ed78ecca419c87dfc32f366a11b6~mv2.png/v1/fill/w_392,h_392,al_c,q_85,usm_0.66_1.00_0.01/003-slides.webp",
    "link":"https://www.optisigns.com/app-google-slides",
    "category":"File Management",
    "title":"google slides"
    },
    {
    "description":"weather.png",
    "_id":"be5f6282-e811-4ea7-b168-07b5ea307866",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.100Z",
    "description1":"Keep your customers updated with the local weather information.\n",
    "_updatedDate":"2020-04-06T02:10:36.100Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_e5eeea9c140240be8d9e7a9039f5afde~mv2.png/v1/fill/w_392,h_392,al_c,q_85,usm_0.66_1.00_0.01/weather.webp",
    "link":"https://www.optisigns.com/app-weather",
    "category":"News",
    "title":"weather"
    },
    {
    "description":"YouTube.png",
    "_id":"ba152a6d-e1b9-4617-91b2-2fbfdc564db2",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.099Z",
    "description1":"Bring any YouTube video to your digital signs",
    "_updatedDate":"2020-04-06T02:10:36.099Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_e3894904abb6444d92cd702b3e9bd8af~mv2.png/v1/fill/w_392,h_392,al_c,q_85,usm_0.66_1.00_0.01/youtube.webp",
    "link":"https://www.optisigns.com/app-youtube",
    "category":"Photos & Video",
    "title":"YouTube"
    },
    {
    "description":"website.png",
    "_id":"0086d534-fd91-47d3-9316-0fbafb62a62e",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.098Z",
    "description1":"Display any website on your screens.",
    "_updatedDate":"2020-04-06T02:10:36.098Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_c4cf0e4375ff41458a1ae2b7140914f1~mv2.png/v1/fill/w_392,h_392,al_c,q_85,usm_0.66_1.00_0.01/002-chrome.webp",
    "link":"https://www.optisigns.com/app-weblink",
    "category":"Communication",
    "title":"website"
    },
    {
    "description":"YouTube live.png",
    "_id":"e1c2ad80-abd2-4e5b-a704-5f9ecad71e60",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.097Z",
    "description1":"Play live streams from YouTube Live.",
    "_updatedDate":"2020-04-06T02:10:36.097Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_fb94b8cdba38499dbef1d0492e35632d~mv2.jpg/v1/fill/w_392,h_392,al_c,q_80,usm_0.66_1.00_0.01/Youtube%20Live%20512x512.webp",
    "link":"https://www.optisigns.com/app-youtube-live",
    "category":"Photos & Video",
    "title":"YouTube live"
    },
    {
    "description":"news.png",
    "_id":"3bf6f9de-af39-4d4c-805b-54cc4a9b83a8",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.096Z",
    "description1":"News for: World, US, UK, Business, Technology, Sport, Entertainment, etc.",
    "_updatedDate":"2020-04-06T02:10:36.096Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_bc498f04cabb4ca888fd253aa4ff6f06~mv2.png/v1/fill/w_392,h_392,al_c,q_85,usm_0.66_1.00_0.01/news.webp",
    "link":"https://www.optisigns.com/app-news",
    "category":"News",
    "title":"news"
    },
    {
    "description":"RSS feeds.png",
    "_id":"9a5828eb-b580-4d03-b35b-adb068d54d8d",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.095Z",
    "description1":"Use RSS feeds from well known organizations like the New York Times or use your own RSS feeds on your screens",
    "_updatedDate":"2020-04-06T02:10:36.095Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_2c7cd3612bdc45128e3d32589a36974b~mv2.png/v1/fill/w_392,h_392,al_c,q_85,usm_0.66_1.00_0.01/rss.webp",
    "link":"https://www.optisigns.com/app-rss-feeds",
    "category":"Communication",
    "title":"RSS feeds"
    },
    {
    "description":"vimeo.png",
    "_id":"cd5b01e8-419a-4d90-b507-bef6aa0af53e",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.094Z",
    "description1":"Vimeo has a large _collection of high-quality videos in a wide range of topics.",
    "_updatedDate":"2020-04-06T02:10:36.094Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_4a06fe990d994c8abace6a2ee0704e4f~mv2.png/v1/fill/w_392,h_392,al_c,q_85,usm_0.66_1.00_0.01/001-vimeo.webp",
    "link":"https://www.optisigns.com/app-vimeo",
    "category":"Photos & Video",
    "title":"vimeo"
    },
    {
    "description":"yelp.png",
    "_id":"b6cc6b45-5ce7-4759-8472-d4d99c42ed69",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.093Z",
    "description1":"Leverage your customers' reviews and show them on your digital signs.",
    "_updatedDate":"2020-04-06T02:10:36.093Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_69400cbbd2eb4a15b5e5bd23764e52fa~mv2.png/v1/fill/w_392,h_392,al_c,q_85,usm_0.66_1.00_0.01/yelp.webp",
    "link":"https://www.optisigns.com/app-yelp",
    "category":"Social Media",
    "title":"yelp"
    },
    {
    "description":"tableau.png",
    "_id":"737c95dc-e8f3-44de-98b3-e8e1703b7beb",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.092Z",
    "description1":"Tableau is a world leader in data visualization. Display your dashboards on any screen.",
    "_updatedDate":"2020-04-06T02:10:36.092Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_9f2ad85f987446d39f3af6ee9547af92~mv2.png/v1/fill/w_392,h_392,al_c,q_85,usm_0.66_1.00_0.01/Tableau.webp",
    "link":"https://www.optisigns.com/app-tableau",
    "category":"Business",
    "title":"tableau"
    },
    {
    "description":"powerBI.png",
    "_id":"ec1138bf-d0f0-4053-b6fa-f08bae0f3fe1",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.091Z",
    "description1":"Put your PowerBI dashboard on any screen.",
    "_updatedDate":"2020-04-06T02:10:36.091Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_3e3653cf844249ee97595a025443c161~mv2.png/v1/fill/w_392,h_392,al_c,q_85,usm_0.66_1.00_0.01/powerbi.webp",
    "link":"https://www.optisigns.com/app-powerbi",
    "category":"Business",
    "title":"powerBI"
    },
    {
    "description":"Google data studio.png",
    "_id":"5af7f291-b4e4-4af8-a813-87d5bf03d4d9",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.091Z",
    "description1":"Google Data Studio is a free and easy way to create data visualizations.",
    "_updatedDate":"2020-04-06T02:10:36.092Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_862169d18dd941008a9dbaa5acd2ca0a~mv2.png/v1/fill/w_392,h_392,al_c,q_85,usm_0.66_1.00_0.01/google-data-studio.webp",
    "link":"https://www.optisigns.com/app-google-data-studio",
    "category":"Business",
    "title":"Google data studio"
    },
    {
    "description":"tripAdvisor.png",
    "_id":"42d3f515-86ce-460a-92f2-a28d8f7501f1",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.090Z",
    "description1":"Promote your business with TripAdvisor reviews",
    "_updatedDate":"2020-04-06T02:10:36.090Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_058ad78d9fc54c4aa9e4eca2bb25fee3~mv2.png/v1/fill/w_392,h_392,al_c,q_85,usm_0.66_1.00_0.01/tripadvisor.webp",
    "link":"https://www.optisigns.com/app-tripadvisor",
    "category":"Social Media",
    "title":"tripAdvisor"
    },
    {
    "description":"trello.png",
    "_id":"f0239c0f-4db3-461e-94b0-485e3a26126d",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.089Z",
    "description1":"Help your team to be more organized by displaying Trello boards.",
    "_updatedDate":"2020-04-06T02:10:36.089Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_dc5c9d580d6f4d38b0b4567b3c863960~mv2.png/v1/fill/w_392,h_392,al_c,q_85,usm_0.66_1.00_0.01/004-trello.webp",
    "link":"https://www.optisigns.com/app-trello",
    "category":"Business",
    "title":"trello"
    },
    {
    "description":"google reviews.png",
    "_id":"488b2088-1e95-48bf-8eb9-f637bfcfb563",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.088Z",
    "description1":"Improve social proof by show case your Google Reviews",
    "_updatedDate":"2020-04-06T02:10:36.088Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_038febc2e5b74ef391bc3d4b5aa26af3~mv2.png/v1/fill/w_392,h_392,al_c,q_85,usm_0.66_1.00_0.01/google-review-512.webp",
    "link":"https://www.optisigns.com/app-google-review",
    "category":"Social Media",
    "title":"google reviews"
    },
    {
    "description":"google calendar.png",
    "_id":"8a909291-5b80-4ec3-87b8-b06f2e66bdc0",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.087Z",
    "description1":"Google Calendar is a popular way to communicate schedules with your team and customers.",
    "_updatedDate":"2020-04-06T02:10:36.087Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_bd7f6114e8da4b7a8e646a792135740a~mv2.png/v1/fill/w_392,h_392,al_c,q_85,usm_0.66_1.00_0.01/google-calendar.webp",
    "link":"https://www.optisigns.com/app-google-calendar",
    "category":"Communication",
    "title":"google calendar"
    },
    {
    "description":"outlook calendar.png",
    "_id":"586be150-685c-4c35-8884-0d2809f9dcd0",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.086Z",
    "description1":"Display your office schedule with Outlook Calendar, works with Office 365 and Outlook.com calendars",
    "_updatedDate":"2020-04-06T02:10:36.086Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_3666269d320740d5a18fe1db9120ef9b~mv2.png/v1/fill/w_392,h_392,al_c,q_85,usm_0.66_1.00_0.01/outlook-calendar.webp",
    "link":"https://www.optisigns.com/app-outlook-calendar",
    "category":"Communication",
    "title":"outlook calendar"
    },
    {
    "description":"simple calendar.png",
    "_id":"c13ace3b-f497-4d64-867c-3507a0026efe",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.085Z",
    "description1":"Display a simple calendar with date, time on your Digital Signs, you can add a message to your viewers as well.",
    "_updatedDate":"2020-04-06T02:10:36.085Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_681a9ebdad964ff183d0cbe341c43bcb~mv2.png/v1/fill/w_392,h_392,al_c,q_85,usm_0.66_1.00_0.01/simple-calendar-icon.webp",
    "link":"https://www.optisigns.com/app-simplecalendar",
    "category":"Communication",
    "title":"simple calendar"
    },
    {
    "description":"embed.png",
    "_id":"b6f9e09c-2e17-43ba-baaa-e5072480cab0",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.084Z",
    "description1":"Embed app is used to display embed codes that you get from the web for sharing contents",
    "_updatedDate":"2020-04-06T02:10:36.084Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_b255bcf69eac449388f54fa5d382663c~mv2.png/v1/fill/w_392,h_392,al_c,q_85,usm_0.66_1.00_0.01/embed-app.webp",
    "link":"https://www.optisigns.com/app-embed",
    "category":"Communication",
    "title":"embed"
    },
    {
    "description":"atlassian JIRA.png",
    "_id":"99602ba3-1ec1-4165-bd77-6153fb8ba750",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.083Z",
    "description1":"Having the Atlassian JIRA sprint boards, charts on a big screens can help to improve communication and awareness of your team.",
    "_updatedDate":"2020-04-06T02:10:36.083Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_b0c2c570da514885af902848b96bb304~mv2.png/v1/fill/w_392,h_392,al_c,q_85,usm_0.66_1.00_0.01/Atlassian-Jira-Logo-512.webp",
    "link":"https://www.optisigns.com/post/putting-atlassian-jira-board-on-big-screen-tv-with-optisigns-digital-signage",
    "category":"Business",
    "title":"atlassian JIRA"
    },
    {
    "description":"CNN news.png",
    "_id":"e67bf0b8-fdb1-4791-a97a-d98dd5c8b19f",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.082Z",
    "description1":"Display CNN News on your digital signs.\n\nMost up to date Top Stories, Breaking News, World, US, EU, Business Technologies. and more ...",
    "_updatedDate":"2020-04-06T02:10:36.082Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_239b8950c84149ddbc5cde2f971971e0~mv2.png/v1/fill/w_392,h_392,al_c,q_85,usm_0.66_1.00_0.01/cnn.webp",
    "link":"https://www.optisigns.com/cnn",
    "category":"News",
    "title":"CNN news"
    },
    {
    "description":"ESPN News.png",
    "_id":"3e0ae581-dd07-46a8-9241-da52b57e0864",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.081Z",
    "description1":"Display ESPN News on your digital signs.\n\nMost up to date news, top stories, NFL, NBA, MBL, NHL, _college Footballs and more ...",
    "_updatedDate":"2020-04-06T02:10:36.081Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_eb7e31fb271e4417b7230a9539df989e~mv2.png/v1/fill/w_392,h_392,al_c,q_85,usm_0.66_1.00_0.01/espn.webp",
    "link":"https://www.optisigns.com/espn",
    "category":"News",
    "title":"ESPN News"
    },
    {
    "description":"techCrunch news.png",
    "_id":"c5daf3df-b3f2-4df0-902e-8ebd8f251fc1",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.080Z",
    "description1":"Display TechCrunch News on your digital signs. Most up to date top stories for Startups, Gadgets, Fundings & Exits, GreenTech and more ...",
    "_updatedDate":"2020-04-06T02:10:36.080Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_0d146cd2536f4186af4adaab6620f48d~mv2.png/v1/fill/w_392,h_392,al_c,q_85,usm_0.66_1.00_0.01/techcrunch.webp",
    "link":"https://www.optisigns.com/techcrunch",
    "category":"News",
    "title":"techCrunch news"
    },
    {
    "description":"countDown.png",
    "_id":"2e7da89b-d203-4293-8c02-38aa37af9fc1",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.079Z",
    "description1":"Display a Count Down clock on your Digital Signs. It's useful for counting down to an event or date relevant to your organization.",
    "_updatedDate":"2020-04-06T02:10:36.079Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_73cd1dc1e7a5414493167ef6d45a49a7~mv2.png/v1/fill/w_358,h_358,al_c,lg_1,q_85/count-down-icon.webp",
    "link":"https://www.optisigns.com/app-countdown",
    "category":"Communication",
    "title":"countDown"
    },
    {
    "description":"countUp.png",
    "_id":"b91674e8-d37d-4be6-a047-619c1c7890cb",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.078Z",
    "description1":"Display a Count Up clock on your Digital Signs. it's useful for counting up from an event or incident.",
    "_updatedDate":"2020-04-06T02:10:36.078Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_d55c85d0c0564be988cb5b2886dd6310~mv2.png/v1/fill/w_358,h_358,al_c,lg_1,q_85/countup-icon.webp",
    "link":"https://www.optisigns.com/app-countup",
    "category":"Communication",
    "title":"countUp"
    },
    {
    "description":"world clock.png",
    "_id":"335f1978-b977-4b32-acde-747de8a82225",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.077Z",
    "description1":"Display multiple clocks with multiple time zones on your screen.",
    "_updatedDate":"2020-04-06T02:10:36.077Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_2aaad63a61a54ad590d947b2b62f64ec~mv2.png/v1/fill/w_392,h_392,al_c,q_85,usm_0.66_1.00_0.01/worldclock-icon.webp",
    "link":"https://www.optisigns.com/app-worldclock",
    "category":"Miscellaneous",
    "title":"world clock"
    },
    {
    "description":"simple clock.png",
    "_id":"7b9eaa23-ea80-4173-bc8e-70b6457f9925",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-06T02:10:36.076Z",
    "description1":"Display a classic analog or digital time.",
    "_updatedDate":"2020-04-06T02:10:36.076Z",
    "thumbnail":"https://static.wixstatic.com/media/33d6d1_24fc0d5fbaa34624aaf2141775915f75~mv2.png/v1/fill/w_392,h_392,al_c,q_85,usm_0.66_1.00_0.01/simpleClock-icon.webp",
    "link":"https://www.optisigns.com/app-simple-clock",
    "category":"Miscellaneous",
    "title":"simple clock"
    },
    {
    "description":"facebook.png",
    "_id":"5031504c-7a70-4974-9bdd-8869e9dd7d4b",
    "_owner":"5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
    "_createdDate":"2020-04-05T21:09:30.180Z",
    "description1":"Create a Facebook wall and showcase your Facebook like feed.",
    "_updatedDate":"2020-04-06T02:10:05.990Z",
    "thumbnail":"https://static.wixstatic.com/media/e48f7f_004f333f2beb4940ad9ec6128df642b6~mv2.png/v1/fill/w_392,h_392,al_c,q_85,usm_0.66_1.00_0.01/facebook.webp",
    "link":"https://www.optisigns.com/app-facebook",
    "category":"Social Media",
    "title":"Facebook"
    }
]

class AppsList extends HTMLElement {
    constructor() {
        super();

        this.state = {
            active_category: 'all'
        }
    }

    static get observedAttributes() {
        return ['data'];
    }


    view_controller(el){
        el.querySelectorAll(".categories__list").forEach(cat => {
            cat.addEventListener('click', e=>{
                this.state.active_category = e.currentTarget.dataset.category                
                this.render()
            })
        });

        const search_bar = el.querySelector('.app__search')

        let typingTimer;
        search_bar.addEventListener('keyup', e => {
            clearTimeout(typingTimer)
            typingTimer = setTimeout(()=>{ this.render(e.target.value) }, 400) 
        })
        search_bar.addEventListener('keydown', e =>  clearTimeout(typingTimer) )

        return el
    }

    compiled(data, keyword=null){
        let div = document.createElement('div')
        /*html*/
        div.innerHTML = `
            <div class="_row">
                <div class="_col-lg-1 _col-lg-1 _col-sm-12 _col-xs-12"></div>
                <div id="categories" class="_col-lg-2 _col-md-2 _col-sm-12 _col-xs-12">
                    <h3><strong>Categories</strong></h3>
                    ${this.categories.map(cat=>{
                        return `<p data-category="${cat}" class="${this.state.active_category == cat ? 'active' : ''} categories__list">${cat}</p>`
                    }).join("")}
                </div>
                <div class="_col-lg-9 _col-md-9 _col-sm-12 _col-xs-12">
                    <div class="_row">
                        <div class="_col-lg-8 _col-md-8 _col-sm-12 _col-xs-12">
                            
                        </div>
                        <div class="_col-lg-4 _col-md-4 _col-sm-12 _col-xs-12">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="fad fa-search"></i>
                                    </span>
                                </div>
                                <input value="${keyword ? keyword : ''}" type="text" class="app__search">
                            </div>
                        </div>
                    </div>
                    <br>
                    <div id="apps_list" class="_row">
                        ${data.map(app=>{
                            return(/*html*/`
                            <div class="_col-lg-4 _col-md-4 _col-sm-6 _col-xs-12">
                                <a data-category="${app.category}" class="app__link" href="${app.link}">
                                    <div class="card linked_card">
                                        <div class="card-header">
                                            <div class="card-header_img_container">
                                                <img alt="${app.description}" src="${app.thumbnail}">
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <span class="app__title">${app.title}</span>
                                            <p class="app__desc">${app.description1}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            `)
                        }).join("")}
                    </div>
                </div>
            </div>
            
        `

        return div
    }

    render(keyword=null){
        let data;
        !keyword
        ?   data = this.state.active_category != 'all'
                ? this.data.filter(item=>item.category.toLowerCase() == this.state.active_category)
                : this.data
        :   data = this.data.filter(app=>app.title.toLowerCase().includes(keyword.toLowerCase()))

        this.innerHTML = ""

        this.appendChild(styles())
        this.appendChild(this.view_controller(this.compiled(data, keyword)))

        const input = this.querySelector('input')
        input.focus()
        let tmpStr = input.value
        input.value = '';
        input.value = tmpStr;
    }

    attributeChangedCallback(value, old, new_val) {
        this.data = JSON.parse(new_val.items)

        let temp_arr = [],
            categories = [];
        for (let app of this.data){
            temp_arr.push(app.category)
            if (temp_arr.filter(cat=>cat == app.category).length <= 1) categories.push(app.category.toLowerCase())
        }

        this.categories = [...categories, 'all'].sort()
        this.render()
    }

    connectedCallback() {
        
    }
}


customElements.define('apps-list', AppsList);