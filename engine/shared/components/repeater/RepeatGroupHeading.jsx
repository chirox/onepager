const React     = require("react");
const PureMixin = require('../../mixins/PureMixin.js');

import "./style.less";

let RepeatGroupHeading = React.createClass({
  mixins: [PureMixin],

  propTypes: {
    id       : React.PropTypes.string,
    parentId : React.PropTypes.string,
    title    : React.PropTypes.string,
    remove   : React.PropTypes.func,
    duplicate: React.PropTypes.func,
  },

  handleClick(){
    React.findDOMNode(this).scrollIntoView();
  },

  render(){
    console.log("rendering repeat group heading");

    return (
      <div className="repeat-group-heading panel-heading" role="tab">
        <h4 className="panel-title">
          <span className="handle fa fa-ellipsis-v pull-left"/>
          <a href={"#"+this.props.id}
             data-toggle="collapse"
             ref="title"
             data-parent={"#"+this.props.parentId}>{this.props.title}</a>

          <div className="repeater-action-btns">
            <span onClick={this.props.duplicate} className="fa fa-copy" data-toggle="tooltip" title="Duplicate"></span>
            <span onClick={this.props.remove} className="fa fa-trash-o" data-toggle="tooltip" title="Delete"></span>
          </div>
        </h4>
      </div>
    );
  }
});

module.exports = RepeatGroupHeading;
