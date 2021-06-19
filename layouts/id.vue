<template>
  <amp-body>
    <div class="main-content columns is-fullheight">
      <amp-sidebar id="sidebar1" layout="nodisplay" side="left" on="sidebarOpen:focusOnMe.focus">
        <amp-img
          alt="Seme Framework Logo"
          :src="logo"
          layout="responsive"
          width="240"
          height="40"
        >
        </amp-img>
        <div class="badges">
          <amp-img layout="fixed" width="90px" height="20px" src='https://img.shields.io/badge/version-4.0.0-ed6f75' alt="version"></amp-img>
          <amp-img layout="fixed" width="90px" height="20px" src='https://travis-ci.org/drosanda/seme-framework.svg?branch=master' alt="build status"></amp-img>
          <amp-img layout="fixed" width="90px" height="20px" src='https://img.shields.io/badge/lang-id-e9bd2e' alt="language"></amp-img>
        </div>

        <ul class="menu-list">
          <li><nuxt-link to="/id/">Seme Framework</nuxt-link></li>
          <li><nuxt-link to="/id/requirements/">Persyaratan</nuxt-link></li>
          <li><nuxt-link to="/id/downloads/">Download &amp; Install</nuxt-link></li>
          <li>
            <nuxt-link to="/id/configuration/">Pengaturan</nuxt-link>
            <ul>
              <li><nuxt-link to="/id/configuration/url/">URL</nuxt-link></li>
              <li><nuxt-link to="/id/configuration/db-connection/">Koneksi DB</nuxt-link></li>
              <li><nuxt-link to="/id/configuration/development/">Development</nuxt-link></li>
              <li><nuxt-link to="/id/configuration/staging/">Staging</nuxt-link></li>
              <li><nuxt-link to="/id/configuration/production/">Production</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/id/tutorial/">Tutorial</nuxt-link>
            <ul>
              <li><nuxt-link to="/id/tutorial/introduction/">Perkenalan</nuxt-link></li>
              <li><nuxt-link to="/id/tutorial/get-data/">Get data</nuxt-link></li>
              <li><nuxt-link to="/id/tutorial/basic-api/">Pembuatan API</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/id/uri_routing/">Perutean URI</nuxt-link>
            <ul>
              <li><nuxt-link to="/id/uri_routing/admin/">Perutean URI Admin</nuxt-link></li>
            </ul>
          </li>
          <li><nuxt-link to="/id/constants/">Konstanta</nuxt-link></li>
          <li>
            <nuxt-link to="/id/globals/">Variabel Global</nuxt-link>
          </li>

          <li><nuxt-link to="/id/model/">Model</nuxt-link>
            <ul>
              <li><nuxt-link to="/id/model/select/">Model::select</nuxt-link></li>
              <li><nuxt-link to="/id/model/select_as/">Model::select_as</nuxt-link></li>
              <li><nuxt-link to="/id/model/from/">Model::from</nuxt-link></li>
              <li><nuxt-link to="/id/model/join/">Model::join</nuxt-link></li>
              <li><nuxt-link to="/id/model/join_composite/">Model::join_composite</nuxt-link></li>
              <li><nuxt-link to="/id/model/composite_create/">Model::composite_create</nuxt-link></li>
              <li><nuxt-link to="/id/model/where/">Model::where</nuxt-link></li>
              <li><nuxt-link to="/id/model/where_as/">Model::where_as</nuxt-link></li>
              <li><nuxt-link to="/id/model/between/">Model::between</nuxt-link></li>
              <li><nuxt-link to="/id/model/group_by/">Model::group_by</nuxt-link></li>
              <li><nuxt-link to="/id/model/order_by/">Model::order_by</nuxt-link></li>
              <li><nuxt-link to="/id/model/limit/">Model::limit</nuxt-link></li>
              <li><nuxt-link to="/id/model/get/">Model::get</nuxt-link></li>
              <li><nuxt-link to="/id/model/get_first/">Model::get_first</nuxt-link></li>
              <li><nuxt-link to="/id/model/insert/">Model::insert</nuxt-link></li>
              <li><nuxt-link to="/id/model/insert_multi/">Model::insert_multi</nuxt-link></li>
              <li><nuxt-link to="/id/model/insert_batch/">Model::insert_batch</nuxt-link></li>
              <li><nuxt-link to="/id/model/update/">Model::update</nuxt-link></li>
              <li><nuxt-link to="/id/model/update_as/">Model::update_as</nuxt-link></li>
              <li><nuxt-link to="/id/model/delete/">Model::delete</nuxt-link></li>
              <li><nuxt-link to="/id/model/exec/">Model::exec</nuxt-link></li>
              <li><nuxt-link to="/id/model/query/">Model::query</nuxt-link></li>
              <li><nuxt-link to="/id/model/last_id/">Model::last_id</nuxt-link></li>
              <li><nuxt-link to="/id/model/page/">Model::page</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/id/view/">View</nuxt-link>
            <ul>
              <li><nuxt-link to="/id/view/theme/">Membuat Tema</nuxt-link></li>
              <li><nuxt-link to="/id/view/layout/">Tata letak (layout)</nuxt-link></li>
              <li>
                <nuxt-link to="/id/view/theme-content/">Isi</nuxt-link>
                <ul>
                  <li><nuxt-link to="/id/view/theme-content/js/">Javascript</nuxt-link></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/id/controller/">Controller</nuxt-link>
            <ul>
              <li><nuxt-link to="/id/controller/constructor/">constructor</nuxt-link></li>
              <li><nuxt-link to="/id/controller/getkey/">getKey</nuxt-link></li>
              <li><nuxt-link to="/id/controller/input/">input</nuxt-link></li>
              <li><nuxt-link to="/id/controller/lib/">lib</nuxt-link></li>
              <li><nuxt-link to="/id/controller/load/">load</nuxt-link></li>
              <li><nuxt-link to="/id/controller/loadcss/">loadCss</nuxt-link></li>
              <li><nuxt-link to="/id/controller/loadlayout/">loadLayout</nuxt-link></li>
              <li><nuxt-link to="/id/controller/putthemecontent/">putThemeContent</nuxt-link></li>
              <li><nuxt-link to="/id/controller/putjscontent/">putJsContent</nuxt-link></li>
              <li><nuxt-link to="/id/controller/session/">session</nuxt-link></li>
              <li><nuxt-link to="/id/controller/setkey/">setKey</nuxt-link></li>
              <li><nuxt-link to="/id/controller/settheme/">setTheme</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/id/database/">Database</nuxt-link>
            <ul>
              <li><nuxt-link to="/id/database/setup/">Setup</nuxt-link></li>
              <li><nuxt-link to="/id/database/quick-start/">Memulai</nuxt-link></li>
              <li><nuxt-link to="/id/database/query-builder/">Query Builder</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/id/library/">Library</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/id/cli/">CLI (command line interface)</nuxt-link>
          </li>
        </ul>
      </amp-sidebar>

      <button
        class="hamburger"
        on='tap:sidebar1.toggle'
        aria-label="Click to open sidebar"
        >
        <div class="hamburger"></div>
      </button>
      <div class="container column is-9">
        <nuxt />
      </div>
    </div>
    <footer class="footer">
      <footer class="footer">
        <div class="container">
          <div class="content has-text-centered">
            <p class="">Copyright &copy; 2014-2021. Dibuat sepenuh cinta di Bandung, Indonesia oleh Daeng Rosanda, S.Kom.</p>
            <p><small>Diperbarui tanggal 1 Juni 2021</small></p>
          </div>
        </div>
      </footer>
    </footer>
    <amp-analytics type="googleanalytics" id="analytics1" :config="ga">
    </amp-analytics>
  </amp-body>
</template>

<script>
export default {
  data() {
    return {
      logo: require('~/static/logo.png'),
      ga: process.env.BASE_URL+'ga.json',
    }
  }
}
</script>
