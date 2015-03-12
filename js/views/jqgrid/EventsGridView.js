/** @jsx React.DOM */
define([
  'jquery',
  'underscore', 
  'backbone',  
  'react',
  'libs/jqgrid/grid.locale-en',
  'libs/jqgrid/jquery.jqGrid.src',
  'stores/appStore'
], function($, _, Backbone, React, jqGrid, TodoStore, Events){
	var EventsGridView = React.createClass({
		componentDidMount: function() {
			var element = this.getDOMNode();
			this.initJQueryPlugin();
		},
		initJQueryPlugin: function () {
			var element = this.getDOMNode();
			var context = this;
			$(element).find("#eventsgrid").jqGrid({
				datatype: "local",
				colNames: ['Title'],
				colModel: [
					{ name: 'title', index: 'title', sortable: true, key: true }
				],
				rowNum: 3,
				sortname: '',
				viewrecords: true,
				sortorder: "desc",
				caption: "",
				pager: '#eventsgridpager',
				autowidth: true,
				loadOnce: true,
				scrollOffset: false,
				height: '',
				subGrid: false,
				onSelectRow: function (rowid, status, e) {
					Events.emit("selectRow", rowid, status, e);
				},
				loadComplete: function (maingrid_id) {
					//alert(maingrid_id);
				},
				onPaging: function (pgButton, records) {
					var nextPage = 1;

					if (pgButton.indexOf("next") != -1) {
						nextPage = context.props.gridData.page + 1;
					}
					else {
						nextPage = context.props.gridData.page - 1;
					}

					Events.emit("changeGridData", {filters: {}, order: { sortname: "", sortorder: context.props.gridData.order.sortorder}, page: nextPage});
				},
				onSortCol: function (index, columnIndex, sortOrder) {
			        
					Events.emit("changeGridData", {filters: {}, order: { sortname: "", sortorder: sortOrder}, page: context.props.gridData.page});

			        return 'stop';
			    }
			});
			$(element).find("#eventsgrid")[0].addJSONData(this.props.eventsModel.attributes);
			$(element).find("#eventsgrid").jqGrid('setSelection', this.props.eventModel.attributes.title, false); 
			//$(element).find("#eventsgrid").jqGrid('sortGrid', 'title', false, context.props.gridData.order.sortorder); Bool not fired?¿?¿¿ -> Obrir cas a tirand!!!!!!
		},
		componentWillUpdate: function(){
			var element = this.getDOMNode();
			$(element).find("#eventsgrid").GridUnload();
		},
		componentDidUpdate: function(prevProps, prevState) {
			var element = this.getDOMNode();
			this.initJQueryPlugin();		
		},
		componentWillUnmount: function(){
			var element = this.getDOMNode();
			$(element).find("#eventsgrid").GridUnload();
		},
		render : function() {
			return (
				<div><table id="eventsgrid" /><div id="eventsgridpager"></div></div>
			);
		}
	});

	return EventsGridView;
});
