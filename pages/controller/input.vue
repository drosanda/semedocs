<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class=""><NuxtLink to="/controller">Controller</NuxtLink></li>
          <li class="unavailable">Handling Form Input</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Controller: Handling Form Input</h1>
            <p>Seme Framework comes with bultin onput manager which can handled $_POST, $_GET, and $_REQUEST. Here is the example</p>
            <pre>
class Home extends Sene_Controller{
  public function __construct(){
    parent::__construct();
  }
  public function index(){
    $input_get = $this->input->get('id'); //localhost/seme/?id=100
    $input_post = $this->input->post('email'); //handling by form-data post
    $input_request = $this->input->request('token'); //handling get or post form-data.
  }

}
            </pre>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
