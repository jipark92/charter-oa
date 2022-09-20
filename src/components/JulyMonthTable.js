import React from 'react'

export default function JulyMonthTable({ sortedJulyTable }) {
    return (
        <div>
            <h1>JUNE</h1>
            {/* customer 123 */}
            <table border="1">
                <thead>
                    <tr>
                        <th>Customer ID</th>
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
                                    <td>{data.purchasedDate}</td>
                                    <td>${data.price}</td>
                                    <td>{data.rewardPoints}</td>
                                </tr>
                            )
                        }
                    })}
                    <tr>
                        <td colSpan="3">TOTAL REWARDS</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>

            {/* customer 456 */}
            <table border="1">
                <thead>
                    <tr>
                        <th>Customer ID</th>
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
                                    <td>{data.purchasedDate}</td>
                                    <td>${data.price}</td>
                                    <td>{data.rewardPoints}</td>
                                </tr>
                            )
                        }
                    })}
                    <tr>
                        <td colSpan="3">TOTAL REWARDS</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>

            {/* customer 789 */}
            <table border="1">
                <thead>
                    <tr>
                        <th>Customer ID</th>
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
                                    <td>{data.purchasedDate}</td>
                                    <td>${data.price}</td>
                                    <td>{data.rewardPoints}</td>
                                </tr>
                            )
                        }
                    })}
                    <tr>
                        <td colSpan="3">TOTAL REWARDS</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
