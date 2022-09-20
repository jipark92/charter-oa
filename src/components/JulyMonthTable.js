import React from 'react'

export default function JulyMonthTable({ sortedJulyTable, calculateJulyTotalRewards }) {
    return (
        <div>
            <h1>JULY</h1>
            {/* customer 123 */}
            <table border="1">
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Transaction ID</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Rewards</th>
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
                        <td><b>{calculateJulyTotalRewards(123)}</b></td>
                    </tr>
                </tbody>
            </table>

            {/* customer 456 */}
            <table border="1">
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Transaction ID</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Rewards</th>
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
                        <td><b>{calculateJulyTotalRewards(456)}</b></td>
                    </tr>
                </tbody>
            </table>

            {/* customer 789 */}
            <table border="1">
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Transaction ID</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Rewards</th>
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
                        <td><b>{calculateJulyTotalRewards(789)}</b></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
