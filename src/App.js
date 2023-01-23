import "./App.css"
import "./components/Style/reset.css"
import "./components/Style/styles.css"
import { useEffect, useState } from "react"

import Header from "./components/Header"
import ProductList from "./components/ProductList"
import Cart from "./components/Cart"

function App() {
  const [products, setProducts] = useState([])
  const [currentSale, setCurrentSale] = useState([])
  const [inputText, setInputText] = useState("")

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.error(err))
  })

  const handleClick = (productId) => {
    const findIndex = currentSale.findIndex(
      (product) => product.id === productId
    )

    if (findIndex === -1) {
      const click = products.find((product) => product.id === productId)
      setCurrentSale([...currentSale, click])
    }
  }

  return (
    <div className="App">
      <Header inputText={inputText} setInputText={setInputText} />
      <section className="sectionContent">
        <ProductList
          handleClick={handleClick}
          products={products}
          inputText={inputText}
        />
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
      </section>
    </div>
  )
}

export default App
