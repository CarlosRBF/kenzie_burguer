import Product from "../Product"
import { Lists } from "./style"

const ProductList = ({ products, inputText, handleClick }) => {
  const lowerInputText = inputText.toLowerCase()

  const actualproducts = products.filter((product) =>
    product.name.toLowerCase().includes(lowerInputText)
  )

  return (
    <>
      <Lists>
        {actualproducts.map((product) => (
          <Product handleClick={handleClick} product={product} key={product.id} />
        ))}
      </Lists>
    </>
  )
}

export default ProductList
