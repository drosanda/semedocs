<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0">4.0.3</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0/core/">Core</NuxtLink></li>
          <li class="unavailable">sene_mysqli_engine Class</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">sene_mysqli_engine Class</h1>
            <p>
              The <code>sene_mysqli_engine</code> class is a custom-built engine for interacting with MySQL and MariaDB databases. It provides a set of methods to perform various database operations such as querying, inserting, updating, and deleting data.
            </p>

            <h2>Class Synopsis</h2>
            
            <div class="macwindow">
              <div class="titlebar">
                <div class="buttons">
                  <div class="close">
                    <a class="closebutton" href="#"><span><strong>x</strong></span></a>
                    <!-- close button link -->
                  </div>
                  <div class="minimize">
                    <a class="minimizebutton" href="#"><span><strong>&ndash;</strong></span></a>
                    <!-- minimize button link -->
                  </div>
                  <div class="zoom">
                    <a class="zoombutton" href="#"><span><strong>+</strong></span></a>
                    <!-- zoom button link -->
                  </div>
                </div>
              </div>
              <div class="maccontent">
                <highlight-code lang="php">class SENE_MySQLi_Engine
{
    // properties
    protected static $__instance;
    public $__mysqli;
    protected $koneksi;
    protected $fieldname = array();
    protected $fieldvalue = array();
    public $last_id = 0;
    public $in_select = &#x27;&#x27;;
    public $in_where = &#x27;&#x27;;
    public $in_order = &#x27;&#x27;;
    public $in_group = &#x27;&#x27;;
    public $table = &#x27;&#x27;;
    public $is_flush = &#x27;&#x27;;
    public $is_cache = &#x27;&#x27;;
    public $page = &#x27;&#x27;;
    public $pagesize = &#x27;&#x27;;
    public $cache_save = &#x27;&#x27;;
    public $cache_flush = &#x27;&#x27;;
    public $is_limit=0;
    public $tis_limit=0;
    public $limit_a=0;
    public $limit_b=0;
    public $as_from=0;
    public $join=0;
    public $in_join=0;
    public $join_multi=0;
    public $in_join_multi=0;
    public $query_last;
    public $union;
    public $is_debug;

    //methods
    public function __construct();

    private function has_bracket_open(int $flag): self;
    private function has_bracket_close(int $flag): self;

    public function autocommit(int $var): int;
    public function begin(): int;
    public function commit(): int;
    public function rollback(): int;
    public function savepoint(): int;

    public function exec(string $sql): int;
    public function query(string $sql): array;

    public function lastId(): int;
    public function esc(string $value): string;
    
    public function insert(string $table_name, array $data_to_insert, [int $array_of_array_flag = 0 [, int $debug_flag=0]]): string;
    public function update(string $table_name, array $data_to_update [, int $debug_flag=0]): string;
    public function delete(string $table_name [, int $debug_flag=0]): string;

    public function select(string $column_name [, string $column_name_alias]): self;
    public function select_as(string $column_name, string $column_name_alias): self;
    public function from(string $table_name [, string $table_name_alias]): self;
    public function join(string $table2, string $table2_alias, string $table2_column_to_joined, string $table1_alias, string $table1_column_to_joined [, string $join_type=&#x27;&#x27;]): self;

    public function between(string $column_name, string $value_from, string $value_to): self;
    public function where(string $column_name, mixed $filter_value [, string $operator = &#x27;AND&#x27; [, string $relation_operator = &#x27;=&#x27; [, int $bracket_open = 0 [, int $bracket_close = 0 ]]]]): self;
    public function where_as(string $column_name, mixed $filter_value [, string $operator = &#x27;AND&#x27; [, string $relation_operator = &#x27;=&#x27; [, int $bracket_open = 0 [, int $bracket_close = 0 ]]]]): self;
    public function where_in(string $column_name, array $array_selector[, int $where_not_in_flag=0]): self;
    public function order_by(string $column_name, string $sort_direction): self;
    public function limit(int $offset, int $count): self;
    public function page(int $page, int $page_size): self;
    public function flushQuery(): self;

    public function get(string $result_type [, int $debug_flag=0]): self;
    public function get_first(int $result_type [, int $debug_flag=0]): self;
}
                </highlight-code>
              </div>
            </div>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/4.0/core/sene_model-class/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  sene_model class
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/4.0/core//" class="btn">
                  Core
                  <i class="fa fa-chevron-right"></i>
                </nuxt-link>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  layout: 'v4.0',
  data (){
    return {
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4',
      title: 'SENE_MySQLi_Engine Class',
      description: 'Learn more about properti and method of SENE_MySQLi_Engine Class on Seme Framework 4.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0',
          text: '4.0'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0/core',
          text: 'core'
        }
      ],
    }
  },
  head() {
    return {
      title: this.title+this.suffix,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.name+': '+this.title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description
        }
      ]
    }
  },
  jsonld() {
    this.breadcrumbs.push({url: (process.env.BASE_URL || 'http://localhost:3001')+this.$route.path, text: this.title });
    const items = this.breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': item.url,
        name: item.text,
      },
    }));
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items,
      },
      {
        "@type": "NewsArticle",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": (process.env.BASE_URL || 'http://localhost:3001')+this.$route.path.replace(/\/+$/, '') + '/'
        },
        "headline": (this.headline || this.title),
        "image": [
          (process.env.CDN_URL || 'http://localhost:3001')+'/logo.png'
        ],
        "dateCreated": "2024-08-26T02:57:00+07:00",
        "datePublished": "22024-08-26T02:57:00+07:00",
        "dateModified": "2024-08-26T02:57:00+07:00",
        "author": {
          "@type": "Person",
          "gender": "Male",
          "name": "Daeng Rosanda, S.Kom",
          "alternateName": "Daeng Rosanda",
          "jobTitle": "Founder",
          "worksFor": {
            "@type": "Organization",
            "name": "Cipta Esensi Merenah",
            "email": "hi@cenah.co.id"
          }
        },
        "publisher": {
          "@type": "Organization",
          "name": "Cipta Esensi Merenah",
          "description": "Cipta Esensi Merenah (Cenah) is software house company focused on developing web-based application from Bandung, Indonesia.",
          "logo": {
            "@type": "ImageObject",
            "name": "logo Cipta Esensi Merenah",
            "url": "https://cdn.cenah.co.id/_nuxt/img/logo-wide.5420183.png",
            "width": "256px",
            "height": "62px"
          }
        },
        "description": this.description
      }
    ];
  }
}
</script>
