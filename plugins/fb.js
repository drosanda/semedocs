/* eslint-disable */

export default ({ app }) => {
  /*
   ** Only run on client-side and only in production mode
   */
  //if (process.env.NODE_ENV !== 'production')return;
     /*
     ** Include facebook Analytics Script
     */
  ;(function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

   /*
    ** Set the current page
    */


  /*
   ** Every time the route changes (fired on initialization too)
   */
  app.router.afterEach((to, from) => {
    /*
     ** We tell Facebook Analytics to log pageview
     */
     window.fbAsyncInit = function() {
      FB.init({
        appId      : '626835541386275',
        cookie     : true,
        xfbml      : true,
        version    : 'v8.0'
      });
      FB.AppEvents.logPageView();
    };
  })
}
