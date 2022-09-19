import logo from './logo.svg';
import './App.css';
import MonthTable from './components/MonthTable';
import { useState, useEffect } from 'react'
import { fetchTransactionMockData } from './mockdata/transactionMockData';

function App() {

  const [transactionData, setTransactionData] = useState([])

  useEffect(() => {
    fetchTransactionMockData()
      .then((res) => {
        setTransactionData(res)
      })
  }, [])


  const mayTable = []
  const juneTable = []
  const julyTable = []

  const findMayDateAndcustomerID = (() => {
    transactionData.map((data) => {
      if (data.customerID && new Date(data.purchasedDate).getMonth().toString() === "4") {
        mayTable.push(data)
      }
    })
  })()
  const sortedMayTable = () => mayTable.sort((a, b) => a.customerID - b.customerID)

  console.log(sortedMayTable())
  return (
    <div className="App">
      <MonthTable
        sortedMayTable={sortedMayTable}
      />
    </div>
  );
}

export default App;
