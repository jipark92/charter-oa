import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { transactionMockData } from '../mockdata/transactionMockData'
import JulyMonthTable from './JulyMonthTable';

//categorized table array
const julyTable = []

//find july data
const findJulyDateAndCustomerID = (() => {
    transactionMockData.map((data) => {
        if (data.customerID && new Date(data.purchasedDate).getMonth() + 1 === 7) {
            julyTable.push(data)
        }
    })
})()
const sortedJulyTable = () => julyTable.sort((a, b) => new Date(a.purchasedDate) - new Date(b.purchasedDate))

//calcualte july total reward points
const calculateJulyTotalRewards = (customer) => {
    const julyRewardPointsArr = []
    julyTable.map((data) => {
        if (data.customerID === customer) {
            julyRewardPointsArr.push(data.rewardPoints)
        }
    })
    return julyRewardPointsArr.reduce((total, pointsArr) => {
        return total + pointsArr
    }, 0)
}

//test
describe(`JulyMonthTable should render customer's July information in tables`, () => {

    it('should match snapshot', () => {
        const { asFragment } = render(<JulyMonthTable
            sortedJulyTable={sortedJulyTable}
            calculateJulyTotalRewards={calculateJulyTotalRewards}
        />)

        expect(asFragment()).toMatchSnapshot()
    })

    it('header should be July', () => {
        render(<JulyMonthTable
            sortedJulyTable={sortedJulyTable}
            calculateJulyTotalRewards={calculateJulyTotalRewards}
        />)

        const headerJuly = screen.getByTestId('header-july').textContent
        expect(headerJuly).toBe('JULY')
    })

    it('there should be 3 TableHeaders in July because there are 3 customers', () => {
        render(<JulyMonthTable
            sortedJulyTable={sortedJulyTable}
            calculateJulyTotalRewards={calculateJulyTotalRewards}
        />)

        expect(screen.getAllByTestId('th-customerid').length).toEqual(3)
        expect(screen.getAllByTestId('th-transactionid').length).toEqual(3)
        expect(screen.getAllByTestId('th-date').length).toEqual(3)
        expect(screen.getAllByTestId('th-price').length).toEqual(3)
        expect(screen.getAllByTestId('th-rewards').length).toEqual(3)
    })

    it('total for customer 123 should be 1009', () => {
        render(<JulyMonthTable
            sortedJulyTable={sortedJulyTable}
            calculateJulyTotalRewards={calculateJulyTotalRewards}
        />)

        const customer123Total = screen.getByTestId('customer123Total').textContent
        expect(customer123Total).toBe('1630')
    })

    it('total for customer 456 should be 100', () => {
        render(<JulyMonthTable
            sortedJulyTable={sortedJulyTable}
            calculateJulyTotalRewards={calculateJulyTotalRewards}
        />)

        const customer456Total = screen.getByTestId('customer456Total').textContent
        expect(customer456Total).toBe('256')
    })

    it('total for customer 789 should be 2512', () => {
        render(<JulyMonthTable
            sortedJulyTable={sortedJulyTable}
            calculateJulyTotalRewards={calculateJulyTotalRewards}
        />)

        const customer789Total = screen.getByTestId('customer789Total').textContent
        expect(customer789Total).toBe('141')
    })

    it('Calculate July Total Function should return expected values', () => {
        const cust123TotalRewardValue = calculateJulyTotalRewards(123)
        expect(cust123TotalRewardValue).toEqual(1630)

        const cust456TotalRewardValue = calculateJulyTotalRewards(456)
        expect(cust456TotalRewardValue).toEqual(256)

        const cust789TotalRewardValue = calculateJulyTotalRewards(789)
        expect(cust789TotalRewardValue).toEqual(141)
    })

})