import './App.css';
import MayMonthTable from './components/MayMonthTable';
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
  const sortedMayTable = () => mayTable.sort((a, b) => new Date(a.purchasedDate) - new Date(b.purchasedDate))

  console.log(sortedMayTable())
  return (
    <div className="App">
      <MayMonthTable
        sortedMayTable={sortedMayTable}
      />
    </div>
  );
}

export default App;
