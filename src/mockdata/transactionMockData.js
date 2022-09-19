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

const transactionMockData = [
    {
        transactionId: 1,
        customerID: 101,
        price: 100,
        purchasedDate: new Date("July 01, 22 00:20:18").toDateString(),
    },
    {
        transactionId: 2,
        customerID: 103,
        price: 60,
        purchasedDate: new Date("June 19, 22 00:20:18").toDateString(),
    },
    {
        transactionId: 3,
        customerID: 102,
        price: 175,
        purchasedDate: new Date("May 23, 22 00:20:18").toDateString(),
    },
    {
        transactionId: 3,
        customerID: 101,
        price: 55,
        purchasedDate: new Date("May 21, 22 00:20:18").toDateString(),
    },
    {
        transactionId: 3,
        customerID: 101,
        price: 125,
        purchasedDate: new Date("May 11, 22 00:20:18").toDateString(),
    },
    //
    {
        transactionId: 1,
        customerID: 101,
        price: 100,
        purchasedDate: new Date("June 25, 22 00:20:18").toDateString(),
    },
    {
        transactionId: 2,
        customerID: 103,
        price: 60,
        purchasedDate: new Date("July 14, 22 00:20:18").toDateString(),
    },
    {
        transactionId: 3,
        customerID: 102,
        price: 203,
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