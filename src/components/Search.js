import React, { Component } from 'react';
import SearchResults from './SearchResults';

class Search extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            filteredData: []
        }
        this.b2cId = React.createRef();
        this.clientId = React.createRef();
        this.cisId = React.createRef();
    }

    componentDidMount() {
        fetch('/data.json')
            .then(res => res.json())
            .then(this.onLoad);
    }

    onLoad = (data) => {
        this.setState({ data });
    }

    submitHandler = (evt) => {
        evt.preventDefault();
        const b2cId = this.b2cId.current.value;
        const clientId = this.clientId.current.value;
        const cisId = this.cisId.current.value;
        const filteredData = this.filterByVal(b2cId, clientId, cisId)
        this.setState({filteredData});
    }

    filterByVal = (b2cId, clientId, cisId) => {
        var query = {b2cId, clientId, cisId};
        const rawData = this.state.data.length ? this.state.data : [];
        let results = [];
        if(rawData.length) {
            if (b2cId !== '') {
                results = rawData.filter(data => data.b2cId === b2cId);
                if (clientId !== '') {
                    results = results.filter(data => data.clientId === clientId);
                    if (cisId !== '') {
                        results = results.filter(data => data.cisId === cisId);
                    }
                }
                else if(cisId !== '') {
                    results = results.filter(data => data.cisId === cisId);
                }
            }
            else if (clientId !== '') {
                results = rawData.filter(data => data.clientId === clientId);
                if (cisId !== '') {
                    results = results.filter(data => data.cisId === cisId);
                }
            }
            else if (cisId !== '') {
                results = rawData.filter(data => data.cisId === cisId);
            }
        }
        return results;
    }

    render() {
        const results = this.state.filteredData.length ? this.state.filteredData : [];
        return (
            <div>
                <div className="-oneX-container">
                    <div className="-oneX-col-md-12">
                        <h3> bank enablement support</h3></div>
                    <div className="-oneX-col-md-3">
                        <label htmlFor="b2cid" className="-onextextfield_floatinglabel">b2c id </label>
                        <input id="b2cid" type="text" ref={this.b2cId} className="oneX-textfield--floating-input" />
                    </div>
                    <div className="-oneX-col-md-3">
                        <label htmlFor="ClientID" className="-onextextfield_floatinglabel">Client id </label>
                        <input id="b2cid" type="text" ref={this.clientId} className="oneX-textfield--floating-input" />
                    </div>
                    <div className="-oneX-col-md-3">
                        <label htmlFor="cisID" className="-onextextfield_floatinglabel">cis id </label>
                        <input id="b2cid" type="text" ref={this.cisId} className="oneX-textfield--floating-input" />
                    </div>
                    <div className="-oneX-col-md-3">
                        <button className="-oneX-btn-primary"
                            id="btnsearch"
                            value="Search"
                            onClick={this.submitHandler}
                        >Submit</button>
                    </div>
                </div >
                <SearchResults results={results} />
            </div>
        );
    }
}

export default Search;