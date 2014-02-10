/*!
* Sencha Touch Winecellar MVC Tutorial
*
* Copyright 2014, Thorsten Schaeff
* Licensed under MIT license.
*
*/

Ext.define('Winecellar.view.Main', {
/*We use a carousel to easyly switch between both views*/
    extend: 'Ext.Carousel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar','Winecellar.view.Listview','Winecellar.view.Detailview'
    ],
    config: {items: [
            {
/*We want to have a titlebar at the top*/
                xtype: 'titlebar',
                cls: 'title',
                docked: 'top',
                title: 'Sencha Winecellar',
/*This titlebar should have a back button which is hidden in the beginning*/
                items: [{
                    cls: 'back',
                    hidden: true,
                    ui: 'back',
                    action: 'back',
                    align: 'left',
                    text: 'back'
                },{
/*And we want to have a little add button to add new models*/
                    iconCls: 'add',
                    cls: 'new_wine',
                    ui: 'plain',
                    action: 'add',
                    align: 'right'
                }]
            },
/*Now we can easily add our views using the declared xtype*/
            {
                itemId: 'listview',
                xtype:'listview'
            },
            {
                itemId: 'detailsview',
                xtype:'detailview'
            }
        ]
    }
});
