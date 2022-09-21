import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { transactionMockData } from '../mockdata/transactionMockData'
import JuneMonthTable from './JuneMonthTable';


//categorized table array
const juneTable = []

//find june data
const findJuneDateAndCustomerID = (() => {
    transactionMockData.map((data) => {
        if (data.customerID && new Date(data.purchasedDate).getMonth() + 1 === 6) {
            juneTable.push(data)
        }
    })
})()
const sortedJuneTable = () => juneTable.sort((a, b) => new Date(a.purchasedDate) - new Date(b.purchasedDate))

//calcualte june total reward points
const calculateJuneTotalRewards = (customer) => {
    const juneRewardPointsArr = []
    juneTable.map((data) => {
        if (data.customerID === customer) {
            juneRewardPointsArr.push(data.rewardPoints)
        }
    })
    return juneRewardPointsArr.reduce((total, pointsArr) => {
        return total + pointsArr
    }, 0)
}

//test
describe(`JuneMonthTable should render customer's June information in tables`, () => {

    it('should match snapshot', () => {
        const { asFragment } = render(<JuneMonthTable
            sortedJuneTable={sortedJuneTable}
            calculateJuneTotalRewards={calculateJuneTotalRewards}
        />)
        expect(asFragment()).toMatchSnapshot()
    })

    it('header should be June', () => {
        render(<JuneMonthTable
            sortedJuneTable={sortedJuneTable}
            calculateJuneTotalRewards={calculateJuneTotalRewards}
        />)
        const headerJune = screen.getByTestId('header-june').textContent
        expect(headerJune).toBe('JUNE')
    })

    it('there should be 3 TableHeaders in June because there are 3 customers', () => {
        render(<JuneMonthTable
            sortedJuneTable={sortedJuneTable}
            calculateJuneTotalRewards={calculateJuneTotalRewards}
        />)

        expect(screen.getAllByTestId('th-customerid').length).toEqual(3)
        expect(screen.getAllByTestId('th-transactionid').length).toEqual(3)
        expect(screen.getAllByTestId('th-date').length).toEqual(3)
        expect(screen.getAllByTestId('th-price').length).toEqual(3)
        expect(screen.getAllByTestId('th-rewards').length).toEqual(3)
    })

    it('total for customer 123 should be 0', () => {
        render(<JuneMonthTable
            sortedJuneTable={sortedJuneTable}
            calculateJuneTotalRewards={calculateJuneTotalRewards}
        />)
        const customer123Total = screen.getByTestId('customer123Total').textContent
        expect(customer123Total).toBe('0')
    })

    it('total for customer 456 should be 35', () => {
        render(<JuneMonthTable
            sortedJuneTable={sortedJuneTable}
            calculateJuneTotalRewards={calculateJuneTotalRewards}
        />)
        const customer456Total = screen.getByTestId('customer456Total').textContent
        expect(customer456Total).toBe('35')
    })

    it('total for customer 789 should be 50', () => {
        render(<JuneMonthTable
            sortedJuneTable={sortedJuneTable}
            calculateJuneTotalRewards={calculateJuneTotalRewards}
        />)
        const customer789Total = screen.getByTestId('customer789Total').textContent
        expect(customer789Total).toBe('50')
    })


})