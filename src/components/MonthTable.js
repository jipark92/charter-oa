import React from 'react'
import '../css/monthTable.css'

export default function MonthTable({ sortedMayTable }) {
    return (
        <>
            <section>
                <h1>MAY</h1>
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
                        {sortedMayTable().map((data, i) => {
                            if (data.customerID === 101) {
                                return (
                                    <tr key={i}>
                                        <td>{data.customerID}</td>
                                        <td>{data.purchasedDate}</td>
                                        <td>${data.price}</td>
                                        <td>0</td>
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
                {/* customer 102 */}
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
                        {sortedMayTable().map((data, i) => {
                            if (data.customerID === 102) {
                                return (
                                    <tr key={i}>
                                        <td>{data.customerID}</td>
                                        <td>{data.purchasedDate}</td>
                                        <td>${data.price}</td>
                                        <td>0</td>
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
            </section>
        </>
    )
}
