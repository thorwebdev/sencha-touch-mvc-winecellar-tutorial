/*!
* Sencha Touch Winecellar MVC Tutorial
*
* Copyright 2014, Thorsten Schaeff
* Licensed under MIT license.
*
*/

Ext.define('Winecellar.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
/*Get references to the different view elements.
The selection is similar to element selection in css*/
            mainView: 'main',
            listView: 'listview',
            detailView: 'detailview',
            btnEdit:'detailview button[action=edit]',
            btnSave:'detailview button[action=save]',
            btnDelete:'detailview button[action=delete]',
            idTxt:'detailview textfield[name=id]',

           btnBack: 'main button[action=back]',
           btnAdd: 'main button[action=add]',
           listClick: 'listview dataview'

        },
        control: {
/*Map the different events to the functions which are declared further down*/
            'btnBack': {
                tap: 'onBackBtnTap'
            },
            'btnAdd': {
                tap: 'onAddBtnTap'
            },
            'btnEdit': {
                tap: 'onEditBtnTap'
            },
            'btnSave': {
                tap: 'onSaveBtnTap'
            },
            'btnDelete': {
                tap: 'onDeleteBtnTap'
            },
            'listClick': {
                itemtap: 'onListClick'
            },
            'mainView': {
                activeitemchange: 'onCarouselChange'
            }
        },
        stores: ['Winecellar.store.Wines']
    },

     /* Based on the carousel change (drag up or down), it knows
     * to show and hide the back button and update the titlebar
     */
    onCarouselChange: function(carousel, newVal, oldVal) {
        if (newVal.getItemId() == "listview") {
            this.getBtnBack().hide();
            this.getBtnEdit().show();
            this.getBtnSave().hide();
            this.getDetailView().disable();
            Ext.ComponentQuery.query('titlebar')[0].setTitle('Sencha Winecellar');
        } else {
            this.getBtnBack().show();
        }
    },
   onBackBtnTap: function() {
        this.getMainView().setActiveItem(0);
    },
    onEditBtnTap: function() {
        this.getBtnEdit().hide();
        this.getBtnSave().show();
/*Enable all form elements*/
        this.getDetailView().enable();
/*Disable id textfield, since this is hadled by the database*/
        this.getIdTxt().disable();
    },
    onDeleteBtnTap: function() {
/*Get the model which is currently bound to the detailview*/
        var rec = this.getDetailView().getRecord();
/*Remove the record from our store*/
        Ext.getStore('Wines').removeAt(rec.data.xindex);
/*Return to the listview*/
        this.getMainView().setActiveItem(0);
    },
    onSaveBtnTap: function() {
/*Get the model which is currently bound to the detailview*/
        var rec = this.getDetailView().getRecord();
/*Get values from the form panel*/
        var values = this.getDetailView().getValues();
/*Apply the form values to the record*/
        rec.setData(values);
/*check if the record is already bound to a store*/
        if(!rec.stores.length) {
/*if not we need to add it to our store*/
            Ext.getStore('Wines').add(rec);
        }
        else {
/*if it's already in our store we set the record to dirty so our store nows that it needs to be updated*/
            rec.setDirty();
            Ext.getStore('Wines').sync();
        }
/*Return to the Listview*/
        this.getMainView().setActiveItem(0);
    },
    onAddBtnTap: function() {
        this.getBtnEdit().hide();
        this.getBtnSave().show();
/*Reset to form so that it's empty*/
        this.getDetailView().reset();
        this.getDetailView().enable();
        this.getIdTxt().disable();
/*Create a new model*/
        var rec = Ext.create('Winecellar.model.Wine');
/*Apply the newly created model to the form panel*/
        this.getDetailView().setRecord(rec);
        Ext.ComponentQuery.query('titlebar')[0].setTitle('New Wine');
/*Change to detailview*/
        this.getMainView().setActiveItem(1);
    },
    onListClick: function(view, index, item, e){
//get corresponding model from store
        var rec = view.getStore().getAt(index);
//apply model to detailview
        this.getDetailView().setRecord(rec);
//set title to wine name
        Ext.ComponentQuery.query('titlebar')[0].setTitle(rec.data.name);
//change view to detailview
        this.getMainView().setActiveItem(1);
    }
});