import { Aside, ProductRender } from "./style"
import { RiShoppingBag3Fill } from "react-icons/ri"
import { ButtonRemoveAll } from "../Buttons"

const Card = ({ currentSale, setCurrentSale }) => {
  const total = currentSale.reduce((value1, value2) => value1 + value2.price, 0)

const removeItem = (productId) => {
  const deleteItem = currentSale.filter((product) => product.id !== productId)
  setCurrentSale(deleteItem)
  console.log(deleteItem)
}

  return (
    <Aside>
      <h3 className="heading3 text">Carrinho de compras</h3>
      <div className="cartRender">
        <ul className="ulProducts">
          {currentSale.length > 0 ? (
            <>
              {currentSale?.map((product, id) => (
                <ProductRender key={id}>
                  <div className="imgList">
                    <figure>
                      <img src={product.img} alt="" />
                    </figure>
                  </div>
                  <div className="infoList">
                    <p className="heading4">{product.name}</p>
                    <p className="caption">{product.category}</p>
                  </div>
                  <button onClick={() => removeItem(product.id)} className="caption buttonRemoveItem">Remover</button>
                </ProductRender>
              ))}
              <div className="info-Price">
                <span className="body-600">Total</span>
                <span className="caption">
                  R$ {total.toFixed(2).replace(".", ",")}
                </span>
              </div>
              <ButtonRemoveAll
                onClick={() => setCurrentSale([])}
                text={"Remover Todos"}
              />
            </>
          ) : (
            <div className="emptyCart">
              <RiShoppingBag3Fill className="bagIcon" />
              <span className="heading3">Sua sacola está vazia</span>
              <span className="body">Adicione itens</span>
            </div>
          )}
        </ul>
      </div>
    </Aside>
  )
}

export default Card
