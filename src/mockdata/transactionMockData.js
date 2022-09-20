export const calculateRewardPoints = (price) => {
    const moreThan50 = 1
    const moreThan100 = 2
    if (price > 100) {
        return (price - 100) * moreThan100 + 50 * moreThan50
    } else if (price > 50) {
        return (price - 50) * moreThan50
    } else {
        return 0
    }
}

const transactionMockData = [
    {
        transactionId: 1,
        customerID: 123,
        price: 100,
        rewardPoints: calculateRewardPoints(100),
        purchasedDate: new Date("July 01, 22 ").toDateString(),
    },
    {
        transactionId: 2,
        customerID: 456,
        price: 60,
        rewardPoints: calculateRewardPoints(60),
        purchasedDate: new Date("June 19, 22 ").toDateString(),
    },
    {
        transactionId: 3,
        customerID: 789,
        price: 175,
        rewardPoints: calculateRewardPoints(175),
        purchasedDate: new Date("May 23, 22 ").toDateString(),
    },
    {
        transactionId: 3,
        customerID: 123,
        price: 55,
        rewardPoints: calculateRewardPoints(55),
        purchasedDate: new Date("May 21, 22 ").toDateString(),
    },
    {
        transactionId: 3,
        customerID: 456,
        price: 125,
        rewardPoints: calculateRewardPoints(125),
        purchasedDate: new Date("May 11, 22 ").toDateString(),
    },
    //
    {
        transactionId: 1,
        customerID: 789,
        price: 100,
        rewardPoints: calculateRewardPoints(100),
        purchasedDate: new Date("June 25, 22 ").toDateString(),
    },
    {
        transactionId: 2,
        customerID: 123,
        price: 45,
        rewardPoints: calculateRewardPoints(45),
        purchasedDate: new Date("June 14, 22 ").toDateString(),
    },
    {
        transactionId: 3,
        customerID: 456,
        price: 203,
        rewardPoints: calculateRewardPoints(203),
        purchasedDate: new Date("July 15, 22 ").toDateString(),
    },
    {
        transactionId: 3,
        customerID: 789,
        price: 126,
        rewardPoints: calculateRewardPoints(126),
        purchasedDate: new Date("July 15, 22 ").toDateString(),
    },
    {
        transactionId: 2,
        customerID: 123,
        price: 500,
        rewardPoints: calculateRewardPoints(500),
        purchasedDate: new Date("May 14, 22 ").toDateString(),
    },
    {
        transactionId: 3,
        customerID: 456,
        price: 75,
        rewardPoints: calculateRewardPoints(75),
        purchasedDate: new Date("June 15, 22 ").toDateString(),
    },
    {
        transactionId: 3,
        customerID: 789,
        price: 89,
        rewardPoints: calculateRewardPoints(89),
        purchasedDate: new Date("July 15, 22 ").toDateString(),
    },
    {
        transactionId: 3,
        customerID: 123,
        price: 152,
        rewardPoints: calculateRewardPoints(152),
        purchasedDate: new Date("May 15, 22 ").toDateString(),
    },
];

export const fetchTransactionMockData = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(transactionMockData)
        }, 1000);
    })
}