/*!
* Sencha Touch Winecellar MVC Tutorial
*
* Copyright 2014, Thorsten Schaeff
* Licensed under MIT license.
*
*/

Ext.define('Winecellar.store.Wines', {
    extend: 'Ext.data.Store',
    requires: ['Winecellar.model.Wine'],
    config: {
        /*This is the store for our Wine model*/
        model: 'Winecellar.model.Wine',
        /*Get the data from the API when app is starting*/
        autoLoad: true,
        /*Automatically sync our models with the API*/
        autoSync: true
    }
});