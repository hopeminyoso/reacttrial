import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Nairobi", "Kitale", "Tala", "Kitui", "Thika"];

 const handleSelectItem = (item: string) => {
  console.log(item);
 }
  return(
  <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>
  );
}

export default App;