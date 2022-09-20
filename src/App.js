import './css//App.css';
import MayMonthTable from './components/MayMonthTable';
import { useState, useEffect } from 'react'
import { fetchTransactionMockData } from './mockdata/transactionMockData';
import JuneMonthTable from './components/JuneMonthTable';
import JulyMonthTable from './components/JulyMonthTable';


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

  //find may data
  const findMayDateAndCustomerID = (() => {
    transactionData.map((data) => {
      if (data.customerID && new Date(data.purchasedDate).getMonth().toString() === "4") {
        mayTable.push(data)
      }
    })
  })()
  const sortedMayTable = () => mayTable.sort((a, b) => new Date(a.purchasedDate) - new Date(b.purchasedDate))

  //find june data
  const findJuneDateAndCustomerID = (() => {
    transactionData.map((data) => {
      if (data.customerID && new Date(data.purchasedDate).getMonth().toString() === "5") {
        juneTable.push(data)
      }
    })
  })()
  const sortedJuneTable = () => juneTable.sort((a, b) => new Date(a.purchasedDate) - new Date(b.purchasedDate))


  //find july data
  const findJulyDateAndCustomerID = (() => {
    transactionData.map((data) => {
      if (data.customerID && new Date(data.purchasedDate).getMonth().toString() === "6") {
        julyTable.push(data)
      }
    })
  })()
  const sortedJulyTable = () => julyTable.sort((a, b) => new Date(a.purchasedDate) - new Date(b.purchasedDate))

  return (
    <div className="App">
      <MayMonthTable
        sortedMayTable={sortedMayTable}
      />
      <JuneMonthTable
        sortedJuneTable={sortedJuneTable}
      />
      <JulyMonthTable
        sortedJulyTable={sortedJulyTable}
      />
    </div>
  );
}

export default App;
