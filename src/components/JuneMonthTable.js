import React from 'react'

export default function JuneMonthTable({ sortedJuneTable, calculateJuneTotalRewards }) {
    return (
        <div>
            <h1>JUNE</h1>
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
                    {sortedJuneTable().map((data, i) => {
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
                        <td><b><i>{calculateJuneTotalRewards(123)}</i></b></td>
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
                    {sortedJuneTable().map((data, i) => {
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
                        <td><b><i>{calculateJuneTotalRewards(456)}</i></b></td>
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
                    {sortedJuneTable().map((data, i) => {
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
                        <td><b><i>{calculateJuneTotalRewards(789)}</i></b></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
