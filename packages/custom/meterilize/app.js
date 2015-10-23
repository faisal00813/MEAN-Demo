'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Meterilize = new Module('meterilize');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
// Meterilize.register(function(app, auth, database) {

//   //We enable routing. By default the Package Object is passed to the routes
//   Meterilize.routes(app, auth, database);

//   //We are adding a link to the main menu for all authenticated users
//   Meterilize.menus.add({
//     title: 'meterilize example page',
//     link: 'meterilize example page',
//     roles: ['authenticated'],
//     menu: 'main'
//   });
  
//   Meterilize.aggregateAsset('css', 'meterilize.css');

//   *
//     //Uncomment to use. Requires meanio@0.3.7 or above
//     // Save settings with callback
//     // Use this for saving data from administration pages
//     Meterilize.settings({
//         'someSetting': 'some value'
//     }, function(err, settings) {
//         //you now have the settings object
//     });

//     // Another save settings example this time with no callback
//     // This writes over the last settings.
//     Meterilize.settings({
//         'anotherSettings': 'some value'
//     });

//     // Get settings. Retrieves latest saved settigns
//     Meterilize.settings(function(err, settings) {
//         //you now have the settings object
//     });
    

//   return Meterilize;
// });
Meterilize.register(function(app, auth, database,system) {
    // app.set('views', __dirname + '/server/views');
 
    //We enable routing. By default the Package Object is passed to the routes
  Meterilize.routes(app, auth, database);
 
 
    // Meterilize.aggregateAsset('css', 'materializetheme.css');
    // Meterilize.aggregateAsset('js', '../lib/materialize/bin/materialize.js');
    // Meterilize.aggregateAsset('css', '../lib/materialize/bin/materialize.css');
 
 
  return Meterilize;
});