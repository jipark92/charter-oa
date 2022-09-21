import React, { useEffect, useState } from "react"
import { fetchTransactionMockData } from "../mockdata/transactionMockData"

//loading status and fetch data
export const useIsLoadingAndFetchData = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [transactionMockData, setTransactionMockData] = useState([])

    useEffect(() => {
        fetchTransactionMockData()
            .then(res => {
                setTransactionMockData(res)
                setIsLoading(false)
            })
    }, [])

    return { isLoading, transactionMockData }
}