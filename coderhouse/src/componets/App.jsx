import Button from "./Button/Button"
import Card from "./Card/Card"
import ItemListContainer from "./ItemListContainer/ItemListContainer"
import NavBar from "./NavBar/NavBar"

function App() {
  
  return (
    <>
      <NavBar />
      <ItemListContainer greeting = 'Hi Guest' />
      {/* <Card /> */}
    </>
  )
}

export default App
