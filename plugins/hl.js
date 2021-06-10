import Vue from "vue";
import VueHighlightJS from "vue-highlight.js";

import javascript from "highlight.js/lib/languages/javascript";
import plaintext from "highlight.js/lib/languages/plaintext";
import phpt from "highlight.js/lib/languages/php-template";
import scss from "highlight.js/lib/languages/scss";
import php from "highlight.js/lib/languages/php";
import json from "highlight.js/lib/languages/json";
import shell from "highlight.js/lib/languages/shell";
import sql_more from "highlight.js/lib/languages/sql_more";
import sql from "highlight.js/lib/languages/sql_more";

import "highlight.js/styles/obsidian.css";

Vue.use(VueHighlightJS, {
  languages: {
    javascript,
    plaintext,
    sql_more,
    shell,
    json,
    scss,
    phpt,
    php,
    sql
  }
});
