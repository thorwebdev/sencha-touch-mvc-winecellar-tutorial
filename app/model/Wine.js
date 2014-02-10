/*!
* Sencha Touch Winecellar MVC Tutorial
*
* Copyright 2014, Thorsten Schaeff
* Licensed under MIT license.
*
*/

/*Define a new model within our Winecellar namespace*/
Ext.define('Winecellar.model.Wine', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.identifier.Uuid'],
    config: {
        fields: [
            /*Make sure that the names in the fields array match the column names in the database*/
            { name: 'id', type: 'auto' },
            { name: 'name', type: 'auto' },
            { name: 'year', type: 'auto' },
            { name: 'grapes', type: 'auto' },
            { name: 'country', type: 'auto' },
            { name: 'region', type: 'auto' },
            { name: 'description', type: 'auto' },
            { name: 'picture', type: 'auto' , defaultValue: 'default.png'}

        ],
       proxy: {
           /*The proxy tells the model where it gets its data. Since we are using a REST API we define a rest proxy*/
            type: 'rest',
           /*The url defines the root url of our API*/
            url: '../backbone-cellar/tutorial/api/wines',
            reader: {
                type: 'json',
                /*The root of the reader is the root node of the API response.
                Since our response consists of an array with all the different models and isn’t wrapped in a JS object the root is left blank*/
                root: ''
            },
            writer: {
                type: 'json'
            }
        }
    }
});
