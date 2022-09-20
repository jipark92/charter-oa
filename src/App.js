import './css/App.css';
import MayMonthTable from './components/MayMonthTable';
import JuneMonthTable from './components/JuneMonthTable';
import JulyMonthTable from './components/JulyMonthTable';
import { useIsLoadingAndFetchData } from './hooks/useIsLoadingAndFetchData'

function App() {

  //custom hook loading and fetch 
  const { isLoading, transactionMockData } = useIsLoadingAndFetchData()

  //categorize table array
  const mayTable = []
  const juneTable = []
  const julyTable = []

  //find may data
  const findMayDateAndCustomerID = (() => {
    transactionMockData.map((data) => {
      if (data.customerID && new Date(data.purchasedDate).getMonth() + 1 === 5) {
        mayTable.push(data)
      }
    })
  })()
  const sortedMayTable = () => mayTable.sort((a, b) => new Date(a.purchasedDate) - new Date(b.purchasedDate))

  //find june data
  const findJuneDateAndCustomerID = (() => {
    transactionMockData.map((data) => {
      if (data.customerID && new Date(data.purchasedDate).getMonth() + 1 === 6) {
        juneTable.push(data)
      }
    })
  })()
  const sortedJuneTable = () => juneTable.sort((a, b) => new Date(a.purchasedDate) - new Date(b.purchasedDate))

  //find july data
  const findJulyDateAndCustomerID = (() => {
    transactionMockData.map((data) => {
      if (data.customerID && new Date(data.purchasedDate).getMonth() + 1 === 7) {
        julyTable.push(data)
      }
    })
  })()
  const sortedJulyTable = () => julyTable.sort((a, b) => new Date(a.purchasedDate) - new Date(b.purchasedDate))

  return (
    <div className="App">
      {!isLoading ?
        <section>
          <MayMonthTable
            sortedMayTable={sortedMayTable}
          />
          <JuneMonthTable
            sortedJuneTable={sortedJuneTable}
          />
          <JulyMonthTable
            sortedJulyTable={sortedJulyTable}
          />
        </section> : <p>LOADING DATA......</p>}
    </div>
  );
}

export default App;
