import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MayMonthTable from "./MayMonthTable";
import { transactionMockData } from '../mockdata/transactionMockData'

//categorized table array
const mayTable = []

//find may data
const findMayDateAndCustomerID = (() => {
    transactionMockData?.map((data) => {
        if (data.customerID && new Date(data.purchasedDate).getMonth() + 1 === 5) {
            mayTable.push(data)
        }
    })
})()
const sortedMayTable = () => mayTable.sort((a, b) => new Date(a.purchasedDate) - new Date(b.purchasedDate))

//calcualte may total reward points
const calculateMayTotalRewards = (customer) => {
    const mayRewardPointsArr = []
    mayTable.map((data) => {
        if (data.customerID === customer) {
            mayRewardPointsArr.push(data.rewardPoints)
        }
    })
    return mayRewardPointsArr.reduce((total, pointsArr) => {
        return total + pointsArr
    }, 0)
}

describe(`MayMonthTable should render customer's may information in tables`, () => {

    it('should match snapshot', () => {
        const { asFragment } = render(<MayMonthTable
            sortedMayTable={sortedMayTable}
            calculateMayTotalRewards={calculateMayTotalRewards}

        />)
        expect(asFragment()).toMatchSnapshot()
    })


})