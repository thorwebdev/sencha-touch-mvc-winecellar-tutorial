/*!
* Sencha Touch Winecellar MVC Tutorial
*
* Copyright 2014, Thorsten Schaeff
* Licensed under MIT license.
*
*/

Ext.define('Winecellar.view.Detailview', {
    extend: 'Ext.form.Panel',
    xtype: 'detailview',
    requires:['Ext.form.FieldSet','Ext.field.DatePicker'],

    config: {
        title: 'Winedetails',
/*Make sure to name the textfields exactly like the key names in the model,
so the controller can fill in the values automatically from the model*/
        items: [//TODO add image //TODO Yearpicker
            {
            xtype:'fieldset',
            title:'Winedetails',
            items:[{
                name: 'id',
                xtype: 'textfield',
                label: 'ID',
                disabled:true
            },{
                    name: 'name',
                    xtype: 'textfield',
                    label: 'Name',
                    disabled:true
                },{
                name: 'region',
                xtype: 'textfield',
                label: 'Region',
                disabled:true
            },{
                name: 'country',
                xtype: 'textfield',
                label: 'Country',
                disabled:true
            },{
                xtype: 'textfield',
                name: 'year',
                label:'Year',
                disabled:true
            },/*{
                xtype:'datepickerfield',
                name:'year',
                label:'Year',
                picker:{xtype:'datepicker', slotOrder:["year"], yearFrom:1990},
                disabled: true,
                dateFormat:"Y"
            },*/{
                name: 'grapes',
                xtype: 'textfield',
                label: 'Grapes',
                disabled:true
            },{
                name: 'description',
                xtype: 'textareafield',
                label: 'Description',
                disabled:true
            },{
                name: 'picture',
                xtype: 'textfield',
                disabled:true,
                hidden: true
            }]
        },{
/*We create a container with three buttons: Save, Edit and Delete.
The save button should only be visible when we're in editing mode,
so we need to hide it in the beginning*/
            xtype:'container',
            defaults:{
                xtype:'button',
                style:'margin: .5em',
                flex:1
            },
            layout:{type:'hbox'},
            items:[{
                text: 'Save',
                action: 'save',
                hidden: true
            },{
                text: 'Edit',
                action: 'edit'
            },{
                text: 'Delete',
                action: 'delete'
            }]
        }]
    }
});