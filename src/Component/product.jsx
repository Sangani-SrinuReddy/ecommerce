
import "./product.css";
import Productdetail from './productDetail';
import { AiOutlineCloseCircle, AiOutlineShoppingCart } from "react-icons/ai"
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import "./product.css"


const Product = ({ product, setProduct, detail, view, close, setClose ,addcart}) => {
    const filtterproduct = (product) => {
        const update = Productdetail.filter((ele) => {
            return ele.Cat === product;
        })
        setProduct(update)
    }
    const AllProducts = () => {
        setProduct(Productdetail)
    }
    return (
        <>
            {
                close ?
                    <div className="product_detail">
                        <div className="container">
                            <button onClick={() => setClose(false)}className="closebtn"><AiOutlineCloseCircle />
                            </button>
                            {
                                detail.map((ele) => {
                                    return (
                                        <div className="productbox">
                                            <div className="img-box">
                                                <img src={ele.Img} alt={ele.title} />
                                            </div>
                                            <div className="detail">
                                                <h4>{ele.Cat}</h4>
                                                <h3>{ele.title}</h3>
                                                <p>A Screen Everyone Will Love: Whether your family is streaming or video chatting</p>
                                                <h3>{ele.Price}</h3>
                                                <button>Add To Cart</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="productbox"></div>
                        </div>
                    </div> : null
            }


            <div className="products">
                <h2># Products</h2>
                <p>Home products</p>
                <div className="container">
                    <div className="filter">
                        <div className="categories">
                            <h3>Categories</h3>
                            <ul>
                                <li onClick={() => AllProducts()}>All Products</li>
                                <li onClick={() => filtterproduct("Mobile")}>Mobile</li>
                                <li onClick={() => filtterproduct("Shirt")}>Shirt</li>
                                <li onClick={() => filtterproduct("Pant")}>Pant</li>
                                <li onClick={() => filtterproduct("TV")}>TV</li>
                                <li onClick={() => filtterproduct("Headphone")}>Headphone</li>
                                <li onClick={() => filtterproduct("Laptop")}>Laptop</li>
                                <li onClick={() => filtterproduct("Shoe")}>Shoe</li>
                                <li onClick={() => filtterproduct("Homediator")}>Homediator</li>

                            </ul>

                        </div>
                    </div>

                    <div className="productbox">
                        <div className="contant">
                            {
                                product.map((ele) => {
                                    return (
                                        <div className="box" key={ele.id}>
                                            <div className="img-box">
                                                <img src={ele.Img} alt={ele.title} className="img" />
                                                <div className="icon">
                                                    <li onClick={()=>addcart(ele)}><AiOutlineShoppingCart /></li>
                                                    <li onClick={() => view(ele)}><BsEye /></li>
                                                    <li><AiOutlineHeart /></li>
                                                </div>
                                            </div>
                                            <div className="detail">
                                                <p>{ele.Cat}</p>
                                                <h3>{ele.title}</h3>
                                                <h4>${ele.Price}</h4>
                                            </div>
                                        </div>


                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;