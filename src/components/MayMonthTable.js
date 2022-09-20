import React from 'react'

export default function MayMonthTable({ sortedMayTable, calculateTotalRewards }) {
    return (
        <div>
            <h1>MAY</h1>
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
                    {sortedMayTable().map((data, i) => {
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
                        <td><b>{calculateTotalRewards(123)}</b></td>
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
                    {sortedMayTable().map((data, i) => {
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
                        <td><b>{calculateTotalRewards(456)}</b></td>
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
                    {sortedMayTable().map((data, i) => {
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
                        <td><b>{calculateTotalRewards(789)}</b></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
