import React, { Component } from 'react';

class SearchResults extends Component {
    render() {
        const { results } = this.props;
        const tableTwo = !results.length ? '' : (
            results.map((item, index) => (
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
        const resultsTable = !results.length ? '' : (
            <div>
                <table className="tableOne" border="1">
                    <tbody>
                        <tr><td colSpan="2">User Identity Results</td></tr>
                        <tr><td>Client ID</td><td>{results[0].clientId}</td></tr>
                        <tr><td>B2CID</td><td>{results[0].b2cId}</td></tr>
                        <tr><td>CIS ID</td><td>{results[0].cisId}</td></tr>
                        <tr><td>Registration Timestamp</td><td>{results[0].registrationTS}</td></tr>
                        <tr><td>Verification Status</td><td>{results[0].varificationStatus}</td></tr>
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
                    {resultsTable}
                </div>
            </div>
        );
    }
}

export default SearchResults;