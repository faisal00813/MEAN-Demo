'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var InspiniaTheme = new Module('inspinia_theme');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
// InspiniaTheme.register(function(app, auth, database) {

//   //We enable routing. By default the Package Object is passed to the routes
//   InspiniaTheme.routes(app, auth, database);

//   //We are adding a link to the main menu for all authenticated users
//   InspiniaTheme.menus.add({
//     title: 'inspiniaTheme example page',
//     link: 'inspiniaTheme example page',
//     roles: ['authenticated'],
//     menu: 'main'
//   });
  
//   InspiniaTheme.aggregateAsset('css', 'inspiniaTheme.css');

//   *
//     //Uncomment to use. Requires meanio@0.3.7 or above
//     // Save settings with callback
//     // Use this for saving data from administration pages
//     InspiniaTheme.settings({
//         'someSetting': 'some value'
//     }, function(err, settings) {
//         //you now have the settings object
//     });

//     // Another save settings example this time with no callback
//     // This writes over the last settings.
//     InspiniaTheme.settings({
//         'anotherSettings': 'some value'
//     });

//     // Get settings. Retrieves latest saved settigns
//     InspiniaTheme.settings(function(err, settings) {
//         //you now have the settings object
//     });
    

//   return InspiniaTheme;
// });
InspiniaTheme.register(function(app, auth, database,system) {
  //   app.set('views', __dirname + '/server/views');
 
    //We enable routing. By default the Package Object is passed to the routes
  InspiniaTheme.routes(app, auth, database);
 
 
    InspiniaTheme.aggregateAsset('css', 'inspiniaTheme.css');
    InspiniaTheme.aggregateAsset('js', '../lib/inspinia/js/inspinia.js');
    InspiniaTheme.aggregateAsset('css', '../lib/inspinia/assets/css/bootstrap.min.css');
    InspiniaTheme.aggregateAsset('css', '../lib/inspinia/assets/font-awesome/css/font-awesome.css');
    InspiniaTheme.aggregateAsset('css', '../lib/inspinia/assets/css/animate.css');
    InspiniaTheme.aggregateAsset('css', '../lib/inspinia/assets/css/style.css');
    InspiniaTheme.aggregateAsset('css', '../lib/inspinia/assets/css/plugins/toastr/toastr.min.css');
    InspiniaTheme.aggregateAsset('css', '../lib/inspinia/assets/js/plugins/gritter/jquery.gritter.css');
    InspiniaTheme.aggregateAsset('css', '../lib/inspinia/assets/js/plugins/metisMenu/jquery.metisMenu.js');
    InspiniaTheme.aggregateAsset('css', '../lib/inspinia/assets/js/plugins/slimscroll/jquery.slimscroll.min.js');
    InspiniaTheme.aggregateAsset('css', '../lib/inspinia/assets/js/plugins/peity/jquery.peity.min.js');
    InspiniaTheme.aggregateAsset('css', '../lib/inspinia/assets/js/plugins/pace/pace.min.js');
    InspiniaTheme.aggregateAsset('css', '../lib/inspinia/assets/js/plugins/iCheck/icheck.min.js');
    InspiniaTheme.aggregateAsset('css', '../lib/inspinia/assets/js/demo/peity-demo.js');
 
  return InspiniaTheme;
});