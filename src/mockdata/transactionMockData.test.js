import '@testing-library/jest-dom';
import { calculateRewardPoints } from './transactionMockData';


describe('transaction mock data reward calculator functions', () => {
    it('calculateRewardPoints should return expected rewards', () => {

        const moreThan100 = calculateRewardPoints(101)
        expect(moreThan100).toBe(52)

        const equalTo100 = calculateRewardPoints(100)
        expect(equalTo100).toBe(50)

        const moreThan50 = calculateRewardPoints(51)
        expect(moreThan50).toBe(1)

        const equalTo50 = calculateRewardPoints(50)
        expect(equalTo50).toBe(0)

        const lessThan50 = calculateRewardPoints(49)
        expect(lessThan50).toBe(0)
    })
})