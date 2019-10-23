import React from "react";
import { connect } from "react-redux";
import DateRangePicker from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import {
  setTextFilter,sortByName,sortByDate
} from "../actions/filters";

export class PostListFilters extends React.Component {
  
  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };


  onSortChange = e => {
    if (e.target.value === "date") {
      this.props.sortByDate();
    } else if (e.target.value === "name") {
      this.props.sortByName();
    }

  }



  render() {
    return (
      <div className="post-filters">
    <input
              placeholder="Search Posts"
              className="text-input"
              type="text"
              value={this.props.filters.text}
              onChange={this.onTextChange}
        />
      <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="date">Date</option>
              <option value="name">Name</option>
            </select>
</div>

    )
  }
  
  
}

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByName: () => dispatch(sortByName())

  
});


export default connect(mapStateToProps,mapDispatchToProps)(PostListFilters);
