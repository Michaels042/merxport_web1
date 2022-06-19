<template>
  <div>
    <nav class="navbar">
        <a href="/" class="navbar__logo">
            <img :src="`${$baseImageUrl}/MerxLogo.svg`" alt="MerxLogo">
        </a>
        <div class="navbar__bars">
            <i class="fas fa-bars"></i>
        </div>
        <div class="navbar__menu">
            <a href="index.html" class="nav-item link active">Home</a>
            <a href="marketplace-BuyerRequests.html" class="nav-item link">Marketplace</a>
            <a href="blog.html" class="nav-item link">Blog</a>
            <a href="contact.html" class="nav-item link">Contact</a>
            <router-link class="link btn" :to="{ name: 'Login' }">Login/Register</router-link>
            <!-- <a href="login.html" class="btn">Login/Register</a>  -->
        </div>
  </nav> 

    <div class="hero">
        <div class="hero__container">
                <div class="hero__home">
                    <img :src="`${$baseImageUrl}/Hero-image.svg`" alt="hero__home">
                    <!-- <img src="./images/Hero-image.svg" alt="hero__home"> -->
                    <div class="left">
                        <h3>Source Commodities with ease</h3>
                        <p>Buyers make requests and Merxport brings the suppliers. 
                            Different prices, different sellers, same product -best value.
                        </p>
                    </div>
                </div>

                <div class="search_filter">
                    <form action="/" method="post">   
                        <div class="row">
                            <span class="col-4">
                                <label for="productName">Product Name</label><br>
                                <input type="text" id="productName" placeholder="Type here">
                            </span>
                            <span class="col-4">
                                <label for="category">Category</label><br>
                                <select name="category" id="category">
                                    <option value="Choose Category">Choose Category</option>
                                    <option value="Agro products">Agro products</option>
                                    <option value="Electronics">Electronics</option>
                                </select>
                            </span>
                            <span class="col-4">
                                <label for="budget">Budget</label><br>
                                <select name="budget" id="budget">
                                    <option value="number">0-₦10000000</option>
                                    <option value="number">₦10000000-₦15000000</option>
                                    <option value="number">₦15000000-₦20000000</option>
                                </select>
                            </span>
                        </div>
                        <input type="submit" class="btn" value="Search For Products">
                    </form>
                </div> 
        </div>

        <section class="scroll-info">
            <div class="row">
                <span class="far-left">
                    <p>Live Market Prices</p>
                </span>
                <span class="center">
                    <ul>
                        <li>
                            <P>Cashew</P>
                            <span class="price-arrow">
                                <P>₦20,000</P>
                                <img :src="`${$baseImageUrl}/arrow-up(1).svg`" alt="arrow-up">
                                <!-- <img src="./images/arrow-up (1).svg" alt="arrow-up"> -->
                            </span>
                        </li>
    
                        <li>
                            <P>Soybeans</P>
                            <span class="price-arrow">
                                <P>₦20,000</P>
                                <img :src="`${$baseImageUrl}/arrow-down(2).svg`" alt="arrow-down">
                                <!-- <img src="./images/arrow-down(2).svg" alt="arrow-up"> -->
                            </span>
                        </li>
    
                        <li>
                            <P>Coconut</P>
                            <span class="price-arrow">
                                <P>₦20,000</P>
                                <img :src="`${$baseImageUrl}/arrow-down(2).svg`" alt="arrow-down">
                                <!-- <img src="./images/arrow-down(2).svg" alt="arrow-up"> -->
                            </span>
                        </li>
                        <li>
                            <P>Apples</P>
                            <span class="price-arrow">
                                <P>₦20,000</P>
                                <img :src="`${$baseImageUrl}/arrow-up(1).svg`" alt="arrow-up">
                                <!-- <img src="./images/arrow-up (1).svg" alt="arrow-up"> -->
                            </span>
                        </li>
                        <li>
                            <P>Aluminium</P>
                            <span class="price-arrow">
                                <P>₦20,000</P>
                                <img :src="`${$baseImageUrl}/arrow-up(1).svg`" alt="arrow-up">
                                <!-- <img src="./images/arrow-up (1).svg" alt="arrow-up"> -->
                            </span>
                        </li>
    
                        <li>
                            <P>Steel</P>
                            <span class="price-arrow">
                                <P>₦20,000</P>
                                <img :src="`${$baseImageUrl}/arrow-up(1).svg`" alt="arrow-up">
                                <!-- <img src="./images/arrow-up (1).svg" alt="arrow-up"> -->
                            </span>
                        </li>
                        <li>
                            <P>Beetroot</P>
                            <span class="price-arrow">
                                <P>₦20,000</P>
                                <img :src="`${$baseImageUrl}/arrow-down(2).svg`" alt="arrow-down">
                                <!-- <img src="./images/arrow-down (2).svg" alt="arrow-up"> -->
                            </span>
                        </li>
    
                        <li>
                            <P>Ugu</P>
                            <span class="price-arrow">
                                <P>₦20,000</P>
                                <img :src="`${$baseImageUrl}/arrow-up(1).svg`" alt="arrow-up">
                                <!-- <img src="./images/arrow-up (1).svg" alt="arrow-up"> -->
                            </span>
                        </li>

                        <li>
                            <P>Onions</P>
                            <span class="price-arrow">
                                <P>₦20,000</P>
                                <img :src="`${$baseImageUrl}/arrow-down(2).svg`" alt="arrow-down">
                                <!-- <img src="./images/arrow-down (2).svg" alt="arrow-up"> -->
                            </span>
                        </li>

                        <li>
                            <P>Cabbage</P>
                            <span class="price-arrow">
                                <P>₦20,000</P>
                                <img :src="`${$baseImageUrl}/arrow-down(2).svg`" alt="arrow-down">
                                <!-- <img src="./images/arrow-down (2).svg" alt="arrow-up"> -->
                            </span>
                        </li>

                        <li>
                            <P>Pepper</P>
                            <span class="price-arrow">
                                <P>₦20,000</P>
                                <img :src="`${$baseImageUrl}/arrow-up(1).svg`" alt="arrow-up">
                                <!-- <img src="./images/arrow-up (1).svg" alt="arrow-up"> -->
                            </span>
                        </li>

                        <li>
                            <P>Cocoa</P>
                            <span class="price-arrow">
                                <P>₦20,000</P>
                                <img :src="`${$baseImageUrl}/arrow-up(1).svg`" alt="arrow-up">
                                <!-- <img src="./images/arrow-up (1).svg" alt="arrow-up"> -->
                            </span>
                        </li>

                        <li>
                            <P>Iroko</P>
                            <span class="price-arrow">
                                <P>₦20,000</P>
                                <img :src="`${$baseImageUrl}/arrow-up(1).svg`" alt="arrow-up">
                                <!-- <img src="./images/arrow-up (1).svg" alt="arrow-up"> -->
                            </span>
                        </li>

                        <!-- ........................................... -->

                        <li>
                            <P>Cashew</P>
                            <span class="price-arrow">
                                <P>₦20,000</P>
                                <img :src="`${$baseImageUrl}/arrow-up(1).svg`" alt="arrow-up">
                                <!-- <img src="./images/arrow-up (1).svg" alt="arrow-up"> -->
                            </span>
                        </li>
    
                        <li>
                            <P>Soybeans</P>
                            <span class="price-arrow">
                                <P>₦20,000</P>
                                <img :src="`${$baseImageUrl}/arrow-down(2).svg`" alt="arrow-down">
                                <!-- <img src="./images/arrow-down (2).svg" alt="arrow-up"> -->
                            </span>
                        </li>
    
                        <li>
                            <P>Coconut</P>
                            <span class="price-arrow">
                                <P>₦20,000</P>
                                <img :src="`${$baseImageUrl}/arrow-down(2).svg`" alt="arrow-down">
                                <!-- <img src="./images/arrow-down (2).svg" alt="arrow-up"> -->
                            </span>
                        </li>
                        
                    </ul>
    
                </span>
                <span class="far-right"></span>
            </div>
    
        </section>
    </div>

      <section class="hero-two">
        <div class="row">
            <div class="left">
                <h3>See what buyers are requesting for</h3>
                <p>Buyers on Merxport submit Requests for Quotes 
                    which can be bid on by our verified suppliers
                </p>
                <button class="btn">See All</button>
            </div>

            <div class="right">
                <div class="marquee">
                    <ul class="marquee-content">
                        <li class="marquee-item card">
                            <div>
                                <img :src="`${$baseImageUrl}/SoyBeans.png`" alt="SoyBeans">
                                <!-- <img src="./images/SoyBeans.png" alt="SoyBeans"> -->
                            </div>
                            <div class="prod-name">
                                <p class="units">120 Tonne(s)</p>
                                <h6>Soya beans and Chick Peas</h6>
                            </div>
                            <div  class="prod-price">
                                <p  class="price">₦150,000 - 160,000</p>
                                <p class="units">Per Tonne</p>
                            </div>
                            <div class="card-post">
                                <span class="left thumbnail">
                                    <img :src="`${$baseImageUrl}/team-1.jpg`" alt="team-1">
                                    <!-- <img src="./images/team-1.jpg" alt="supplier"> -->
                                </span>
                                <span class="rightt">
                                    <p class="dealer">Olayinka Ifunaya Mutahir</p>
                                    <p class="time">Posted 3 hours ago</p>
                                </span>
                            </div>
                            
                        </li>

                        <li class="marquee-item card two">
                            <div>
                                    <img :src="`${$baseImageUrl}/Cocoa.png`" alt="Cocoa">
                                <!-- <img src="./images/Cocoa.png" alt="Cocoa"> -->
                            </div>
                            <div class="prod-name">
                                <p class="units">600kg</p>
                                <h6>Fresh Cocoa Pods</h6>
                            </div>
                            <div  class="prod-price">
                                <p  class="price">₦70,000 - 75,000</p>
                                <p class="units">Per Kilogram</p>
                            </div>
                            <div class="card-post">
                                <span class="left thumbnail">
                                    <img :src="`${$baseImageUrl}/team-1.jpg`" alt="supplier">
                                    <!-- <img src="./images/team-1.jpg" alt="supplier"> -->
                                </span>
                                <span class="rightt">
                                    <p class="dealer">Samuel Emmanuel</p>
                                    <p class="time">Posted 4 hours ago</p>
                                </span>

                            </div>
                            
                        </li>

                        <li class="marquee-item card three">
                            <div> 
                                <img :src="`${$baseImageUrl}/Iroko.png`" alt="Iroko">
                                <!-- <img src="./images/Iroko.png" alt="SoyBeans"> -->
                            </div>
                            <div class="prod-name">
                                <p class="units">250 Tonne(s)</p>
                                <h6>Fresh Cut Iroko andPalm Tree</h6>
                            </div>
                            <div  class="prod-price">
                                <p  class="price">₦300,000 - 400,000</p>
                                <p class="units">Per Tonne</p>
                            </div>
                            <div class="card-post">
                                <span class="left thumbnail">
                                    <img :src="`${$baseImageUrl}/team-1.jpg`" alt="supplier">                                  
                                    <!-- <img src="./images/team-1.jpg" alt="supplier"> -->
                                </span>
                                <span class="rightt">
                                    <p class="dealer">Chisom Bello</p>
                                    <p class="time">Posted yesterday</p>
                                </span>

                            </div>
                            
                        </li>

                        <li class="marquee-item card">
                            <div>
                                <img :src="`${$baseImageUrl}/SoyBeans.png`" alt="SoyBeans">
                                <!-- <img src="./images/SoyBeans.png" alt="SoyBeans"> -->
                            </div>
                            <div class="prod-name">
                                <p class="units">120 Tonne(s)</p>
                                <h6>Soya beans and Chick Peas</h6>
                            </div>
                            <div  class="prod-price">
                                <p  class="price">₦150,000 - 160,000</p>
                                <p class="units">Per Tonne</p>
                            </div>
                            <div class="card-post">
                                <span class="left thumbnail">
                                <img :src="`${$baseImageUrl}/team-1.jpg`" alt="supplier">
                                 <!-- <img src="./images/team-1.jpg" alt="supplier"> -->
                                </span>
                                <span class="rightt">
                                    <p class="dealer">Olayinka Ifunaya Mutahir</p>
                                    <p class="time">Posted 3 hours ago</p>
                                </span>

                            </div>
                            
                        </li>

                        <li class="marquee-item card two">
                            <div>
                                <img :src="`${$baseImageUrl}/Cocoa.png`" alt="Cocoa">
                                <!-- <img src="./images/Cocoa.png" alt="Cocoa"> -->
                            </div>
                            <div class="prod-name">
                                <p class="units">600kg</p>
                                <h6>Fresh Cocoa Pods</h6>
                            </div>
                            <div  class="prod-price">
                                <p  class="price">₦70,000 - 75,000</p>
                                <p class="units">Per Kilogram</p>
                            </div>
                            <div class="card-post">
                                <span class="left thumbnail">
                                    <img :src="`${$baseImageUrl}/team-1.jpg`" alt="supplier">
                                    <!-- <img src="./images/team-1.jpg" alt="supplier"> -->
                                </span>
                                <span class="rightt">
                                    <p class="dealer">Samuel Emmanuel</p>
                                    <p class="time">Posted 4 hours ago</p>
                                </span>

                            </div>
                            
                        </li>

                        <li class="marquee-item card three">
                            <div>
                                <img :src="`${$baseImageUrl}/Iroko.png`" alt="iroko">
                                <!-- <img src="./images/Iroko.png" alt="SoyBeans"> -->
                            </div>
                            <div class="prod-name">
                                <p class="units">250 Tonne(s)</p>
                                <h6>Fresh Cut Iroko andPalm Tree</h6>
                            </div>
                            <div  class="prod-price">
                                <p  class="price">₦300,000 - 400,000</p>
                                <p class="units">Per Tonne</p>
                            </div>
                            <div class="card-post">
                                <span class="left thumbnail">
                                    <img :src="`${$baseImageUrl}/team-1.jpg`" alt="supplier">                                  
                                    <!-- <img src="./images/team-1.jpg" alt="supplier"> -->
                                </span>
                                <span class="rightt">
                                    <p class="dealer">Chisom Bello</p>
                                    <p class="time">Posted yesterday</p>
                                </span>

                            </div>
                            
                        </li>
                    </ul>

                </div>

            </div>
        </div>

      </section>
       <section class="hero-three">
        <div class="row">
            <div class="left-text">
                <h3>Seller offerings available with a click</h3>
                <p>Buyers on Merxport submit Requests for Quotes 
                    which can be bid on by our verified suppliers
                </p>
                <button class="btn">See All</button>
            </div>

            <div class="slide">
                <div class="marquee">
                    <ul class="marquee-content">
                        <li class="marquee-item card">
                            <div>
                                <img :src="`${$baseImageUrl}/SoyBeans.png`" alt="SoyBeans">
                                <!-- <img src="./images/SoyBeans.png" alt="SoyBeans"> -->
                            </div>
                            <div class="prod-name">
                                <p class="units">120 Tonne(s)</p>
                                <h6>Soya beans and Chick Peas</h6>
                            </div>
                            <div  class="prod-price">
                                <p  class="price">₦150,000 - 160,000</p>
                                <p class="units">Per Tonne</p>
                            </div>
                            <div class="card-post">
                                <span class="left thumbnail">
                                    <img :src="`${$baseImageUrl}/team-1.jpg`" alt="team-1">
                                    <!-- <img src="./images/team-1.jpg" alt="supplier"> -->
                                </span>
                                <span class="rightt">
                                    <p class="dealer">Olayinka Ifunaya Mutahir</p>
                                    <p class="time">Posted 3 hours ago</p>
                                </span>
                            </div>
                            
                        </li>

                        <li class="marquee-item card two">
                            <div>
                                    <img :src="`${$baseImageUrl}/Cocoa.png`" alt="Cocoa">
                                <!-- <img src="./images/Cocoa.png" alt="Cocoa"> -->
                            </div>
                            <div class="prod-name">
                                <p class="units">600kg</p>
                                <h6>Fresh Cocoa Pods</h6>
                            </div>
                            <div  class="prod-price">
                                <p  class="price">₦70,000 - 75,000</p>
                                <p class="units">Per Kilogram</p>
                            </div>
                            <div class="card-post">
                                <span class="left thumbnail">
                                    <img :src="`${$baseImageUrl}/team-1.jpg`" alt="supplier">
                                    <!-- <img src="./images/team-1.jpg" alt="supplier"> -->
                                </span>
                                <span class="rightt">
                                    <p class="dealer">Samuel Emmanuel</p>
                                    <p class="time">Posted 4 hours ago</p>
                                </span>

                            </div>
                            
                        </li>

                        <li class="marquee-item card three">
                            <div> 
                                <img :src="`${$baseImageUrl}/Iroko.png`" alt="Iroko">
                                <!-- <img src="./images/Iroko.png" alt="SoyBeans"> -->
                            </div>
                            <div class="prod-name">
                                <p class="units">250 Tonne(s)</p>
                                <h6>Fresh Cut Iroko andPalm Tree</h6>
                            </div>
                            <div  class="prod-price">
                                <p  class="price">₦300,000 - 400,000</p>
                                <p class="units">Per Tonne</p>
                            </div>
                            <div class="card-post">
                                <span class="left thumbnail">
                                    <img :src="`${$baseImageUrl}/team-1.jpg`" alt="supplier">                                  
                                    <!-- <img src="./images/team-1.jpg" alt="supplier"> -->
                                </span>
                                <span class="rightt">
                                    <p class="dealer">Chisom Bello</p>
                                    <p class="time">Posted yesterday</p>
                                </span>

                            </div>
                            
                        </li>

                        <li class="marquee-item card">
                            <div>
                                <img :src="`${$baseImageUrl}/SoyBeans.png`" alt="SoyBeans">
                                <!-- <img src="./images/SoyBeans.png" alt="SoyBeans"> -->
                            </div>
                            <div class="prod-name">
                                <p class="units">120 Tonne(s)</p>
                                <h6>Soya beans and Chick Peas</h6>
                            </div>
                            <div  class="prod-price">
                                <p  class="price">₦150,000 - 160,000</p>
                                <p class="units">Per Tonne</p>
                            </div>
                            <div class="card-post">
                                <span class="left thumbnail">
                                <img :src="`${$baseImageUrl}/team-1.jpg`" alt="supplier">
                                 <!-- <img src="./images/team-1.jpg" alt="supplier"> -->
                                </span>
                                <span class="rightt">
                                    <p class="dealer">Olayinka Ifunaya Mutahir</p>
                                    <p class="time">Posted 3 hours ago</p>
                                </span>

                            </div>
                            
                        </li>

                        <li class="marquee-item card two">
                            <div>
                                <img :src="`${$baseImageUrl}/Cocoa.png`" alt="Cocoa">
                                <!-- <img src="./images/Cocoa.png" alt="Cocoa"> -->
                            </div>
                            <div class="prod-name">
                                <p class="units">600kg</p>
                                <h6>Fresh Cocoa Pods</h6>
                            </div>
                            <div  class="prod-price">
                                <p  class="price">₦70,000 - 75,000</p>
                                <p class="units">Per Kilogram</p>
                            </div>
                            <div class="card-post">
                                <span class="left thumbnail">
                                    <img :src="`${$baseImageUrl}/team-1.jpg`" alt="supplier">
                                    <!-- <img src="./images/team-1.jpg" alt="supplier"> -->
                                </span>
                                <span class="rightt">
                                    <p class="dealer">Samuel Emmanuel</p>
                                    <p class="time">Posted 4 hours ago</p>
                                </span>

                            </div>
                            
                        </li>

                        <li class="marquee-item card three">
                            <div>
                                <img :src="`${$baseImageUrl}/Iroko.png`" alt="iroko">
                                <!-- <img src="./images/Iroko.png" alt="SoyBeans"> -->
                            </div>
                            <div class="prod-name">
                                <p class="units">250 Tonne(s)</p>
                                <h6>Fresh Cut Iroko andPalm Tree</h6>
                            </div>
                            <div  class="prod-price">
                                <p  class="price">₦300,000 - 400,000</p>
                                <p class="units">Per Tonne</p>
                            </div>
                            <div class="card-post">
                                <span class="left thumbnail">
                                    <img :src="`${$baseImageUrl}/team-1.jpg`" alt="supplier">                                  
                                    <!-- <img src="./images/team-1.jpg" alt="supplier"> -->
                                </span>
                                <span class="rightt">
                                    <p class="dealer">Chisom Bello</p>
                                    <p class="time">Posted yesterday</p>
                                </span>

                            </div>
                            
                        </li>
                    </ul>

                </div>

            </div>
        </div>

      </section>

       <section class="hero-four">
        <div class="subscribe-container">
            <div class="img"></div>
            <div class="overlay"></div>

            <div class="newsletter">
                <h2>Subscribe to our newsletters</h2>
                <p>Get information amaizing deals, 
                    offers and more when you subscribe to our newsletter
                </p>
                <form action="/" method="post">
                    <input type="text" id="email" class="form-control" placeholder="Email Address">
                    <button type="submit" class="button">Submit</button>
                </form>
            </div>
        </div>

        <div class="foot-menu">

            <div class="foot-logo"><img :src="`${$baseImageUrl}/MerxLogo.svg`" alt=""></div>
              <!-- <img src="./images/MerxLogo.svg" alt=""> -->
              

            <div class="foot-items">
                <ul>
                    <li>
                        <h5>Company</h5>
                        <a href="/">Home</a>
                        <a href="/">Blog</a>
                        <a href="/">Contact</a>
                    </li>
                     
                    <li>
                        <h5>People</h5>
                        <!-- <a href="/">Login</a> -->
                        <router-link class="link btn" :to="{ name: 'Login' }">Login/Register</router-link>
                        <a href="/">Register</a>
                    </li>
               
                    <li>
                        <h5>Contact</h5>
                        <a href="/">01-12345678</a>
                        <a href="/">+234 123 456 7890</a>
                        <a href="/">hello@merxport.com</a>
                        <span class="social-icons">
                            <a href="#"> <i class="fab fa-facebook-f"></i> </a>
                            <a href="#"> <i class="fab fa-twitter"></i> </a>
                            <a href="#"> <i class="fab fa-instagram"></i> </a>
                            <a href="#"> <i class="fab fa-linkedin"></i> </a>
                        </span>
                    </li>
                    
                    <li>
                        <img :src="`${$baseImageUrl}/storegoogle.jpeg`" alt="">
                        <img :src="`${$baseImageUrl}/storeapple.jpeg`" alt="">
                        <!-- <img src="./images/storegoogle.jpeg" alt=""> -->
                        <!-- <img src="./images/storeapple.jpeg" alt="">-->
                    </li>
                </ul>

            </div>
            


        </div>
    </section>
    
  </div>
  
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue';

    export default {
    name: 'Home',
    components: {
        HelloWorld,
    },
    };
</script>
