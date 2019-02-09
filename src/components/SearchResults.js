import React, { Component } from 'react';

class SearchResults extends Component {
    render() {
        const tableOne = !this.props.results.length ? '' : (
            this.props.results.map((item, index) => (
                <tr key={index}>
                    <td>{item.clientId}</td>
                    <td>{item.b2cId}</td>
                    <td>{item.registrationTS}</td>
                    <td>{item.cisId}</td>
                </tr>
            ))
        );

        const tableTwo = !this.props.results.length ? '' : (
            this.props.results.map((item, index) => (
                <tr key={index}>
                    <td>{item.accountNumber}</td>
                    <td>{item.productLongName}</td>
                    <td>{item.productShortName}</td>
                    <td>{item.customerRole}</td>
                    <td>{item.accountId}</td>
                    <td>{item.agreementId}</td>
                </tr>
            ))
        );

        const results = !this.props.results.length ? '' : (
            <div>
                <table className="tableOne" border="1">
                    <tbody>
                        <tr><td colSpan="4">User Identity Results</td></tr>
                        <tr>
                            <th>Client ID</th>
                            <th>B2CID</th>
                            <th>Registration Timestamp</th>
                            <th>CIS ID</th>
                        </tr>
                        {tableOne}
                    </tbody>
                </table>
                <table className="tableTwo" border="1">
                    <tbody>
                        <tr><td colSpan="6">Online Qualified Products</td></tr>
                        <tr>
                            <th>Account Number</th>
                            <th>Product Long Name</th>
                            <th>Product Short Name</th>
                            <th>Customer Role</th>
                            <th>Account ID</th>
                            <th>Agreement ID</th>
                        </tr>
                        {tableTwo}
                    </tbody>
                </table>
            </div>
        );

        return (
            <div className="-oneX-container">
                <div className="-oneX-col-md-12">
                    <h3> bank enablement support</h3>
                    {results}
                </div>
            </div>
        );
    }
}

export default SearchResults;