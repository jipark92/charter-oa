import { render, screen } from '@testing-library/react';
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

//test
describe(`MayMonthTable should render customer's May information in tables`, () => {

    it('should match snapshot', () => {
        const { asFragment } = render(<MayMonthTable
            sortedMayTable={sortedMayTable}
            calculateMayTotalRewards={calculateMayTotalRewards}
        />)
        expect(asFragment()).toMatchSnapshot()
    })

    it('header should be MAY', () => {
        render(<MayMonthTable
            sortedMayTable={sortedMayTable}
            calculateMayTotalRewards={calculateMayTotalRewards}
        />)
        const headerMay = screen.getByTestId('header-may').textContent
        expect(headerMay).toBe('MAY')
    })

    it('there should be 3 TableHeaders in May because there are 3 customers', () => {
        render(<MayMonthTable
            sortedMayTable={sortedMayTable}
            calculateMayTotalRewards={calculateMayTotalRewards}
        />)

        expect(screen.getAllByTestId('th-customerid').length).toEqual(3)
        expect(screen.getAllByTestId('th-transactionid').length).toEqual(3)
        expect(screen.getAllByTestId('th-date').length).toEqual(3)
        expect(screen.getAllByTestId('th-price').length).toEqual(3)
        expect(screen.getAllByTestId('th-rewards').length).toEqual(3)
    })

    it('total for customer 123 should be 1009', () => {
        render(<MayMonthTable
            sortedMayTable={sortedMayTable}
            calculateMayTotalRewards={calculateMayTotalRewards}
        />)
        const customer123Total = screen.getByTestId('customer123Total').textContent
        expect(customer123Total).toBe('1009')
    })

    it('total for customer 456 should be 100', () => {
        render(<MayMonthTable
            sortedMayTable={sortedMayTable}
            calculateMayTotalRewards={calculateMayTotalRewards}
        />)
        const customer456Total = screen.getByTestId('customer456Total').textContent
        expect(customer456Total).toBe('100')
    })

    it('total for customer 789 should be 2512', () => {
        render(<MayMonthTable
            sortedMayTable={sortedMayTable}
            calculateMayTotalRewards={calculateMayTotalRewards}
        />)
        const customer789Total = screen.getByTestId('customer789Total').textContent
        expect(customer789Total).toBe('2512')
    })

})