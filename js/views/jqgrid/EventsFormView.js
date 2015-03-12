/** @jsx React.DOM */
define([
  'jquery', 
  'underscore', 
  'backbone',  
  'react',
  'models/jqgrid/EventModel',
  'models/jqgrid/EventsModel',
  'jsx!views/jqgrid/EventsGridView',
  'stores/appStore'
], function($, _, Backbone, React, EventModel, EventsModel, EventsGridView, Events){
	var EventsFormView = React.createClass({
      componentDidMount: function() {
        var context = this;
        console.log(1);
        Events.on("changeGridData", function(gridData) {
            context.props.gridData.page = gridData.page;
            context.props.gridData.order.sortorder = gridData.order.sortorder;
            var result = context.ajaxCall();
            context.props.eventsModel.set(result);            
            context.setProps({eventsModel: context.props.eventsModel, gridData: context.props.gridData});          
        });

        Events.on("selectRow", function(rowid, status, e) {
          var filteredEvents = _.where(context.props.eventsModel.attributes.rows, {title: rowid});
          context.props.eventModel.set("title", filteredEvents[0].title);
          context.setProps({eventsModel: context.props.eventsModel});
        });
      },
      ajaxCall: function() {
        var result = {
              "rows":[{'title':'Daniel'},{'title':'Comas'}, {title: "Fernández"}],
              "records":3,
              "total":2,
              "page":1
            };

            if(this.props.gridData.page == 2) {
              result = {
              "rows":[{'title':'Ingens'},{'title':'Networks'}],
              "records":5,
              "total":2,
              "page":2
              };
            }

           if (this.props.gridData.page == 1 && this.props.gridData.order.sortorder == "asc") {
            result = {
            "rows":[{'title':'Fernández'},{'title':'Comas'}, {title: "Daniel"}],
            "records":3,
            "total":2,
            "page":1
            };
           }

        return result;
      },
      render : function() {
        console.log(2);

        if(!this.props.gridData) {
          this.props.gridData = {filters: {}, order: { sortname: "", sortorder: ""}, page: 1};
        }

        if(!this.props.eventModel) {
          this.props.eventModel = new EventModel();
        }

        if(!this.props.eventsModel) {
          this.props.eventsModel = new EventsModel();

          var result = this.ajaxCall();

          this.props.eventsModel.set(result);
        }        

        return (
          <div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="title">Title</label>
                  <input type="text" class="form-control" id="title" placeholder="Name" value={this.props.eventModel.attributes.title} />
                </div>
              </div>
            </div>
            <div class="row">
              <EventsGridView eventsModel={this.props.eventsModel} eventModel={this.props.eventModel} gridData={this.props.gridData} />
            </div>
          </div>
        )
      }
    });

  return EventsFormView;
});

