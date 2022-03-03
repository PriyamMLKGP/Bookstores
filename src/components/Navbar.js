import React, {Component} from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
export default function Navbar() {
    return (
        <div>
            <Router>
            <header className="header">

    <div className="header-1">

        {/* <a href="#" className="logo"><i className="fas fa-book"></i> bookly</a> */}

        <form action="" className="search-form">
            <input type="search" name="" placeholder="search here..." id="search-box"/>
            <label for="search-box" className="fas fa-search"></label>
        </form>

        <div className="icons">
            <div id="search-btn" className="fas fa-search"></div>
            <a href="#home" className="fas fa-heart">HH</a>
            <a href="#home" className="fas fa-shopping-cart">HH</a>
            <div id="login-btn" className="fas fa-user"></div>
        </div>

    </div>

    <div className="header-2">
        <nav className="navbar">
            <a href="#home">home</a>
            <a href="#featured">featured</a>
            <a href="#arrivals">arrivals</a>
            <a href="#reviews">reviews</a>
            <a href="#blogs">blogs</a>
        </nav>
    </div>

</header>


<nav className="bottom-navbar">
    <a href="https://dare2compete.com/api/competition/get-attachment/601d8b976a574_Problem_Statement__2_.pdf" className="fas fa-home">hh</a>
    <a href="https://dare2compete.com/api/competition/get-attachment/601d8b976a574_Problem_Statement__2_.pdf" className="fas fa-list">hh</a>
    <a href="https://dare2compete.com/api/competition/get-attachment/601d8b976a574_Problem_Statement__2_.pdf" className="fas fa-tags">hh</a>
    <a href="https://dare2compete.com/api/competition/get-attachment/601d8b976a574_Problem_Statement__2_.pdf" className="fas fa-comments">hh</a>
    <a href="#blogs" className="fas fa-blog">hh</a>
</nav>


<div className="login-form-container">

    <div id="close-login-btn" className="fas fa-times"></div>

    <form action="">
        <h3>sign in</h3>
        <span>username</span>
        <input type="email" name="" className="box" placeholder="enter your email" id=""/>
        <span>password</span>
        <input type="password" name="" className="box" placeholder="enter your password" id=""/>
        <div className="checkbox">
            <input type="checkbox" name="" id="remember-me"/>
            <label for="remember-me"> remember me</label>
        </div>
        <input type="submit" value="sign in" className="btn"/>
        <p>forget password ? <a href="#">click here</a></p>
        <p>don't have an account ? <a href="#">create one</a></p>
    </form>

</div>


<section className="home" id="home">

    <div className="row">

        <div className="content">
            <h3>upto 75% off</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid ex minima at!</p>
            <a href="#" className="btn">shop now</a>
        </div>

        <div className="swiper books-slider">
            <div className="swiper-wrapper">
                <a href="#" className="swiper-slide"><img src="image/book-1.png" alt=""/></a>
                <a href="#" className="swiper-slide"><img src="image/book-2.png" alt=""/></a>
                <a href="#" className="swiper-slide"><img src="image/book-3.png" alt=""/></a>
                <a href="#" className="swiper-slide"><img src="image/book-4.png" alt=""/></a>
                <a href="#" className="swiper-slide"><img src="image/book-5.png" alt=""/></a>
                <a href="#" className="swiper-slide"><img src="image/book-6.png" alt=""/></a>
            </div>
            <img src="image/stand.png" className="stand" alt=""/>
        </div>

    </div>

</section>


<section className="icons-container">

    <div className="icons">
        <i className="fas fa-shipping-fast"></i>
        <div className="content">
            <h3>free shipping</h3>
            <p>order over $100</p>
        </div>
    </div>

    <div className="icons">
        <i className="fas fa-lock"></i>
        <div className="content">
            <h3>secure payment</h3>
            <p>100 secure payment</p>
        </div>
    </div>

    <div className="icons">
        <i className="fas fa-redo-alt"></i>
        <div className="content">
            <h3>easy returns</h3>
            <p>10 days returns</p>
        </div>
    </div>

    <div className="icons">
        <i className="fas fa-headset"></i>
        <div className="content">
            <h3>24/7 support</h3>
            <p>call us anytime</p>
        </div>
    </div>

</section>


<section className="featured" id="featured">

    <h1 className="heading"> <span>featured books</span> </h1>

    <div className="swiper featured-slider">

        <div className="swiper-wrapper">

            <div className="swiper-slide box">
                <div className="icons">
                    <a href="#" className="fas fa-search"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-eye"></a>
                </div>
                <div className="image">
                    <img src="image/book-1.png" alt=""/>
                </div>
                <div className="content">
                    <h3>featured books</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <a href="#" className="btn">add to cart</a>
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="icons">
                    <a href="#" className="fas fa-search"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-eye"></a>
                </div>
                <div className="image">
                    <img src="image/book-2.png" alt=""/>
                </div>
                <div className="content">
                    <h3>featured books</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <a href="#" className="btn">add to cart</a>
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="icons">
                    <a href="#" className="fas fa-search"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-eye"></a>
                </div>
                <div className="image">
                    <img src="image/book-3.png" alt=""/>
                </div>
                <div className="content">
                    <h3>featured books</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <a href="#" className="btn">add to cart</a>
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="icons">
                    <a href="#" className="fas fa-search"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-eye"></a>
                </div>
                <div className="image">
                    <img src="image/book-4.png" alt=""/>
                </div>
                <div className="content">
                    <h3>featured books</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <a href="#" className="btn">add to cart</a>
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="icons">
                    <a href="#" className="fas fa-search"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-eye"></a>
                </div>
                <div className="image">
                    <img src="image/book-5.png" alt=""/>
                </div>
                <div className="content">
                    <h3>featured books</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <a href="#" className="btn">add to cart</a>
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="icons">
                    <a href="#" className="fas fa-search"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-eye"></a>
                </div>
                <div className="image">
                    <img src="image/book-6.png" alt=""/>
                </div>
                <div className="content">
                    <h3>featured books</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <a href="#" className="btn">add to cart</a>
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="icons">
                    <a href="#" className="fas fa-search"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-eye"></a>
                </div>
                <div className="image">
                    <img src="image/book-7.png" alt=""/>
                </div>
                <div className="content">
                    <h3>featured books</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <a href="#" className="btn">add to cart</a>
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="icons">
                    <a href="#" className="fas fa-search"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-eye"></a>
                </div>
                <div className="image">
                    <img src="image/book-8.png" alt=""/>
                </div>
                <div className="content">
                    <h3>featured books</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <a href="#" className="btn">add to cart</a>
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="icons">
                    <a href="#" className="fas fa-search"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-eye"></a>
                </div>
                <div className="image">
                    <img src="image/book-9.png" alt=""/>
                </div>
                <div className="content">
                    <h3>featured books</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <a href="#" className="btn">add to cart</a>
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="icons">
                    <a href="#" className="fas fa-search"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-eye"></a>
                </div>
                <div className="image">
                    <img src="image/book-10.png" alt=""/>
                </div>
                <div className="content">
                    <h3>featured books</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <a href="#" className="btn">add to cart</a>
                </div>
            </div>

        </div>

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>

    </div>

</section>


<section className="newsletter">

    <form action="">
        <h3>subscribe for latest updates</h3>
        <input type="email" name="" placeholder="enter your email" id="" className="box"/>
        <input type="submit" value="subscribe" className="btn"/>
    </form>

</section>


<section className="arrivals" id="arrivals">

    <h1 className="heading"> <span>new arrivals</span> </h1>

    <div className="swiper arrivals-slider">

        <div className="swiper-wrapper">

            <a href="#" className="swiper-slide box">
                <div className="image">
                    <img src="image/book-1.png" alt=""/>
                </div>
                <div className="content">
                    <h3>new arrivals</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </a>

            <a href="#" className="swiper-slide box">
                <div className="image">
                    <img src="image/book-2.png" alt=""/>
                </div>
                <div className="content">
                    <h3>new arrivals</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </a>

            <a href="#" className="swiper-slide box">
                <div className="image">
                    <img src="image/book-3.png" alt=""/>
                </div>
                <div className="content">
                    <h3>new arrivals</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </a>

            <a href="#" className="swiper-slide box">
                <div className="image">
                    <img src="image/book-4.png" alt=""/>
                </div>
                <div className="content">
                    <h3>new arrivals</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </a>

            <a href="#" className="swiper-slide box">
                <div className="image">
                    <img src="image/book-5.png" alt=""/>
                </div>
                <div className="content">
                    <h3>new arrivals</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </a>

        </div>

    </div>

    <div className="swiper arrivals-slider">

        <div className="swiper-wrapper">

            <a href="#" className="swiper-slide box">
                <div className="image">
                    <img src="image/book-6.png" alt=""/>
                </div>
                <div className="content">
                    <h3>new arrivals</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </a>

            <a href="#" className="swiper-slide box">
                <div className="image">
                    <img src="image/book-7.png" alt=""/>
                </div>
                <div className="content">
                    <h3>new arrivals</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </a>

            <a href="#" className="swiper-slide box">
                <div className="image">
                    <img src="image/book-8.png" alt=""/>
                </div>
                <div className="content">
                    <h3>new arrivals</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </a>

            <a href="#" className="swiper-slide box">
                <div className="image">
                    <img src="image/book-9.png" alt=""/>
                </div>
                <div className="content">
                    <h3>new arrivals</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </a>

            <a href="#" className="swiper-slide box">
                <div className="image">
                    <img src="image/book-10.png" alt=""/>
                </div>
                <div className="content">
                    <h3>new arrivals</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </a>

        </div>

    </div>

</section>


<section className="deal">

    <div className="content">
        <h3>deal of the day</h3>
        <h1>upto 50% off</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis in atque dolore tempora quaerat at fuga dolorum natus velit.</p>
        <a href="#" className="btn">shop now</a>
    </div>

    <div className="image">
        <img src="image/deal-img.jpg" alt=""/>
    </div>

</section>


<section className="reviews" id="reviews">

    <h1 className="heading"> <span>client's reviews</span> </h1>

    <div className="swiper reviews-slider">

        <div className="swiper-wrapper">

            <div className="swiper-slide box">
                <img src="image/pic-1.png" alt=""/>
                <h3>john deo</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>

            <div className="swiper-slide box">
                <img src="image/pic-2.png" alt=""/>
                <h3>john deo</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>

            <div className="swiper-slide box">
                <img src="image/pic-3.png" alt=""/>
                <h3>john deo</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>
            <div className="swiper-slide box">
                <img src="image/pic-4.png" alt=""/>
                <h3>john deo</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>

            <div className="swiper-slide box">
                <img src="image/pic-5.png" alt=""/>
                <h3>john deo</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>

            <div className="swiper-slide box">
                <img src="image/pic-6.png" alt=""/>
                <h3>john deo</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>

        </div>

    </div>
    
</section>


<section className="blogs" id="blogs">

    <h1 className="heading"> <span>our blogs</span> </h1>

    <div className="swiper blogs-slider">

        <div className="swiper-wrapper">

            <div className="swiper-slide box">
                <div className="image">
                    <img src="image/blog-1.jpg" alt=""/>
                </div>
                <div className="content">
                    <h3>blog title goes here</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                    <a href="#" className="btn">read more</a>
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="image">
                    <img src="image/blog-2.jpg" alt=""/>
                </div>
                <div className="content">
                    <h3>blog title goes here</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                    <a href="#" className="btn">read more</a>
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="image">
                    <img src="image/blog-3.jpg" alt=""/>
                </div>
                <div className="content">
                    <h3>blog title goes here</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                    <a href="#" className="btn">read more</a>
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="image">
                    <img src="image/blog-4.jpg" alt=""/>
                </div>
                <div className="content">
                    <h3>blog title goes here</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                    <a href="#" className="btn">read more</a>
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="image">
                    <img src="image/blog-5.jpg" alt=""/>
                </div>
                <div className="content">
                    <h3>blog title goes here</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                    <a href="#" className="btn">read more</a>
                </div>
            </div>

        </div>

    </div>

</section>


<section className="footer">

    <div className="box-container">

        <div className="box">
            <h3>our locations</h3>
            <a href="#"> <i className="fas fa-map-marker-alt"></i> india </a>
            <a href="#"> <i className="fas fa-map-marker-alt"></i> USA </a>
            <a href="#"> <i className="fas fa-map-marker-alt"></i> russia </a>
            <a href="#"> <i className="fas fa-map-marker-alt"></i> france </a>
            <a href="#"> <i className="fas fa-map-marker-alt"></i> japan </a>
            <a href="#"> <i className="fas fa-map-marker-alt"></i> africa </a>
        </div>

        <div className="box">
            <h3>quick links</h3>
            <a href="#"> <i className="fas fa-arrow-right"></i> home </a>
            <a href="#"> <i className="fas fa-arrow-right"></i> featured </a>
            <a href="#"> <i className="fas fa-arrow-right"></i> arrivals </a>
            <a href="#"> <i className="fas fa-arrow-right"></i> reviews </a>
            <a href="#"> <i className="fas fa-arrow-right"></i> blogs </a>
        </div>

        <div className="box">
            <h3>extra links</h3>
            <a href="#"> <i className="fas fa-arrow-right"></i> account info </a>
            <a href="#"> <i className="fas fa-arrow-right"></i> ordered items </a>
            <a href="#"> <i className="fas fa-arrow-right"></i> privacy policy </a>
            <a href="#"> <i className="fas fa-arrow-right"></i> payment method </a>
            <a href="#"> <i className="fas fa-arrow-right"></i> our serivces </a>
        </div>

        <div className="box">
            <h3>contact info</h3>
            <a href="#"> <i className="fas fa-phone"></i> +123-456-7890 </a>
            <a href="#"> <i className="fas fa-phone"></i> +111-222-3333 </a>
            <a href="#"> <i className="fas fa-envelope"></i> shaikhanas@gmail.com </a>
            <img src="image/worldmap.png" className="map" alt=""/>
        </div>
        
    </div>

    <div className="share">
        <a href="#" className="fab fa-facebook-f"></a>
        <a href="#" className="fab fa-twitter"></a>
        <a href="#" className="fab fa-instagram"></a>
        <a href="#" className="fab fa-linkedin"></a>
        <a href="#" className="fab fa-pinterest"></a>
    </div>

    <div className="credit"> created by <span>mr. web designer</span> | all rights reserved! </div>

</section>


<div className="loader-container">
    <img src="image/loader-img.gif" alt=""/>
</div>

</Router>
        </div>
    )
}