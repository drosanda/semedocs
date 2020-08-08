<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class="unavailable">Tutorial</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Tutorial</h1>
            <p>This tutorial is intended to introduce you to the Seme Framework and the basic principles of MVC architecture. It will show you how a basic Seme Framework application is constructed in step-by-step fashion.</p>
            <p>In this tutorial, you will be creating a basic news application. You will begin by writing the code that can load static pages. Next, you will create a news section that reads news items from a database. Finally, you’ll add a form to create news items in the database.</p>

            <p>This tutorial will primarily focus on:</p>
            <ul>
            <li>Model-View-Controller basics</li>
            <li>Routing basics</li>
            <li>Form validation</li>
            <li>Performing basic database queries using “Query Builder”</li>
          </ul>
          <p>The entire tutorial is split up over several pages, each explaining a small part of the functionality of the Seme Framework. You’ll go through the following pages:</p>
          <ul>
            <li><NuxtLink to="tutorial/introduction.html">Introduction</NuxtLink>, which gives you an overview of what to expect.</li>
            <li><NuxtLink to="tutorial/view.html">Theme and layout</NuxtLink>, which will teach you the basics of creating view using Seme Framework.</li>
            <li>Building API, this will introduce more about database, controller, and model.</li>
          </ul>
          <p>Enjoy your exploration of the Seme Framework.</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
