import React, { Component } from 'react';

class SearchResults extends Component {
    render() {
            const results = !this.props.results.length ? '' : (
                this.props.results.map(item => (
                    <div key={item.clientId}>
                        <table border = "1">
                            <tbody>
                            <tr>
                                <th>clientId</th>
                                <th>b2cId</th>
                                <th>accountNumber</th>
                                <th>cisId</th>
                                <th>aacountId</th>
                            </tr>
                                <tr>
                                    <td>{item.clientId}</td>
                                    <td>{item.b2cId}</td>
                                    <td>{item.accountNumber}</td>
                                    <td>{item.cisId}</td>
                                    <td>{item.aacountId}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))
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