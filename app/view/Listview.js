/*!
* Sencha Touch Winecellar MVC Tutorial
*
* Copyright 2014, Thorsten Schaeff
* Licensed under MIT license.
*
*/

Ext.define('Winecellar.view.Listview',{
    extend: 'Ext.Container',
    xtype: 'listview',
    requires: ['Winecellar.model.Wine','Winecellar.store.Wines','Ext.dataview.DataView'],
    config:{
        layout:'fit',
        cls:'listview',
        items:[{
/*We are using the dataview to render a simple list*/
            xtype:'dataview',
            scrollable:{
                direction:'vertical'
            },
            cls:'wines-listview',
/*This template is used to create every listitem for each single wine in the model*/
            itemTpl:'<div style="padding-bottom:17px;clear:both;border-bottom: 1px solid #C2C2C2;"><div style="float: left;" class="img"><img width="50px" src="img/{picture}" /></div><div class="name">{name} <br> {region}, {country}</div></div>',
/*We simply tell the dataview where it can find our models, that's it*/
            store:'Wines'
        }]
    }
});