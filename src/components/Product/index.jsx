import { ButtonMidPrimary } from "../Buttons"
import { ProductItem } from "./style"

const Product = ({ product, handleClick }) => {
  return (
    <ProductItem>
      <figure>
        <img src={product.img} alt="" />
      </figure>
      <div>
        <span className="heading3">{product.name}</span>
        <span className="caption">{product.category}</span>
        <span className="body-600 colorPrice">
          R$ {product.price.toFixed(2).replace(".", ",")}
        </span>
        <ButtonMidPrimary
          onclick={() => handleClick(product.id)}
          text={"Adicionar"}
        />
      </div>
    </ProductItem>
  )
}

export default Product
