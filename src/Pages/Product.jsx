import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Product.modules.css"
import { Link } from 'react-router-dom';

function Product() {
  const [arr,setArr] = useState([]);

  useEffect(()=>{
    axios('https://fakestoreapi.com/products')
    .then((res)=>{
      setArr(res.data);
      console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  },[])

  console.log(arr);

  
  

  return (
    <div>
      <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Our products</h4>
                            <p className="text-muted para-desc mx-auto mb-0">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                  {
                    arr.map((val)=>{
                      return(
                        
                        <div className="col-md-3 col-sm-6">
                            <Link to={`/product/${val.id}`}>
                        <div className="product-grid">
                            <div className="product-image">
                                <a href="#" className="image">
                                    <img className="pic-1" src={val.image}/>
                                    <img className="pic-2" src={val.image}/>
                                </a>
                                <a href="#" className="product-like-icon" data-tip="Add to Wishlist">
                                    <i className="far fa-heart"></i>
                                </a>
                                <ul className="product-links">
                                    <li><a href="#"><i className="fa fa-search"></i></a></li>
                                    <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
                                    <li><a href="#"><i className="fa fa-random"></i></a></li>
                                </ul>
                            </div>
                            <div className="product-content">
                                <h3 className="title"><a href="#">{val.title}</a></h3>
                                <div className="price">${val.price}</div>
                            </div>
                        </div>
                        </Link>
                    </div>
                         
                      )
                    })
                  }
                    
                    
                </div>
            </div>
    </div>
  )
}

export default Product