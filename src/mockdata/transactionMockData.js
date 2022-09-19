// export const transactionMockData = {
//     abc: [
//         {
//             date: new Date("May 10, 2022 ").toDateString(),
//             amount: 100
//         },
//         {
//             date: new Date("June 10, 2022 ").toDateString(),
//             amount: 10
//         },
//         {
//             date: new Date("July 10, 2022 ").toDateString(),
//             amount: 200
//         },
//     ],
//     def: [
//         {
//             date: new Date("May 10, 2022 ").toDateString(),
//             amount: 100
//         },
//         {
//             date: new Date("June 10, 2022 ").toDateString(),
//             amount: 10
//         },
//         {
//             date: new Date("July 10, 2022 ").toDateString(),
//             amount: 200
//         },
//     ],
//     ghk: [
//         {
//             date: new Date("May 10, 2022 ").toDateString(),
//             amount: 100
//         },
//         {
//             date: new Date("June 10, 2022 ").toDateString(),
//             amount: 10
//         },
//         {
//             date: new Date("July 10, 2022 ").toDateString(),
//             amount: 200
//         },
//     ],
// };

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
        purchasedDate: new Date("July 01, 22 00:20:18").toDateString(),
    },
    {
        transactionId: 2,
        customerID: 456,
        price: 60,
        rewardPoints: calculateRewardPoints(60),
        purchasedDate: new Date("June 19, 22 00:20:18").toDateString(),
    },
    {
        transactionId: 3,
        customerID: 789,
        price: 175,
        rewardPoints: calculateRewardPoints(175),
        purchasedDate: new Date("May 23, 22 00:20:18").toDateString(),
    },
    {
        transactionId: 3,
        customerID: 123,
        price: 55,
        rewardPoints: calculateRewardPoints(55),
        purchasedDate: new Date("May 21, 22 00:20:18").toDateString(),
    },
    {
        transactionId: 3,
        customerID: 456,
        price: 125,
        rewardPoints: calculateRewardPoints(125),
        purchasedDate: new Date("May 11, 22 00:20:18").toDateString(),
    },
    //
    {
        transactionId: 1,
        customerID: 789,
        price: 100,
        rewardPoints: calculateRewardPoints(100),
        purchasedDate: new Date("June 25, 22 00:20:18").toDateString(),
    },
    {
        transactionId: 2,
        customerID: 123,
        price: 45,
        rewardPoints: calculateRewardPoints(45),
        purchasedDate: new Date("July 14, 22 00:20:18").toDateString(),
    },
    {
        transactionId: 3,
        customerID: 456,
        price: 203,
        rewardPoints: calculateRewardPoints(203),
        purchasedDate: new Date("May 15, 22 00:20:18").toDateString(),
    },
    {
        transactionId: 3,
        customerID: 789,
        price: 126,
        rewardPoints: calculateRewardPoints(126),
        purchasedDate: new Date("May 15, 22 00:20:18").toDateString(),
    },
];

export const fetchTransactionMockData = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(transactionMockData)
        }, 1000);
    })
}