import React from 'react'

export default function JulyMonthTable({ sortedJulyTable, calculateJulyTotalRewards }) {
    return (
        <div>
            <h1 data-testid='header-july'>JULY</h1>
            {/* customer 123 */}
            <table border="1">
                <thead>
                    <tr>
                        <th data-testid='th-customerid'>Customer ID</th>
                        <th data-testid='th-transactionid'>Transaction ID</th>
                        <th data-testid='th-date'>Date</th>
                        <th data-testid='th-price'>Price</th>
                        <th data-testid='th-rewards'>Rewards</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedJulyTable().map((data, i) => {
                        if (data.customerID === 123) {
                            return (
                                <tr key={i}>
                                    <td>{data.customerID}</td>
                                    <td>{data.transactionID}</td>
                                    <td>{data.purchasedDate}</td>
                                    <td>${data.price}</td>
                                    <td>{data.rewardPoints}</td>
                                </tr>
                            )
                        }
                    })}
                    <tr>
                        <td colSpan="4"><b>TOTAL REWARDS</b></td>
                        <td data-testid='customer123Total'><b><i>{calculateJulyTotalRewards(123)}</i></b></td>
                    </tr>
                </tbody>
            </table>

            {/* customer 456 */}
            <table border="1">
                <thead>
                    <tr>
                        <th data-testid='th-customerid'>Customer ID</th>
                        <th data-testid='th-transactionid'>Transaction ID</th>
                        <th data-testid='th-date'>Date</th>
                        <th data-testid='th-price'>Price</th>
                        <th data-testid='th-rewards'>Rewards</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedJulyTable().map((data, i) => {
                        if (data.customerID === 456) {
                            return (
                                <tr key={i}>
                                    <td>{data.customerID}</td>
                                    <td>{data.transactionID}</td>
                                    <td>{data.purchasedDate}</td>
                                    <td>${data.price}</td>
                                    <td>{data.rewardPoints}</td>
                                </tr>
                            )
                        }
                    })}
                    <tr>
                        <td colSpan="4"><b>TOTAL REWARDS</b></td>
                        <td data-testid='customer456Total'><b><i>{calculateJulyTotalRewards(456)}</i></b></td>
                    </tr>
                </tbody>
            </table>

            {/* customer 789 */}
            <table border="1">
                <thead>
                    <tr>
                        <th data-testid='th-customerid'>Customer ID</th>
                        <th data-testid='th-transactionid'>Transaction ID</th>
                        <th data-testid='th-date'>Date</th>
                        <th data-testid='th-price'>Price</th>
                        <th data-testid='th-rewards'>Rewards</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedJulyTable().map((data, i) => {
                        if (data.customerID === 789) {
                            return (
                                <tr key={i}>
                                    <td>{data.customerID}</td>
                                    <td>{data.transactionID}</td>
                                    <td>{data.purchasedDate}</td>
                                    <td>${data.price}</td>
                                    <td>{data.rewardPoints}</td>
                                </tr>
                            )
                        }
                    })}
                    <tr>
                        <td colSpan="4"><b>TOTAL REWARDS</b></td>
                        <td data-testid='customer789Total'><b><i>{calculateJulyTotalRewards(789)}</i></b></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
