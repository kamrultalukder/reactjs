import React from 'react';

var Search = React.createClass({
    changeSearch: function(e){
        this.setState({
            search: e.target.value
        });
    },
    handleSubmit: function(e){
        e.preventDefault();
        var search = this.state.search.trim();
        this.props.onSubmitSearch(search);
    },
    render: function(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter keyword"
                    defaultValue={this.props.search}
                    onChange={this.changeSearch}
                />
                <input
                    type="submit"
                    value="Search"
                />
            </form>
        );
    }
});

export default Search;
