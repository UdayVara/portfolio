import React from 'react'

export default function Porfolio() {
      return (
            <>
                  <div className="container-fluid mt-0 pt-3 pb-5" id="portfolio" style={{ minHeight: "100vh", backgroundColor: "#083749" }}>
                        <br /><br />
                        <div className="container-md">


                              <h1 className="h1 text-center mt-md-3" style={{ color: "#26B69F", fontSize: "2.4rem" }}>Portfolio</h1><br />
                              <div className="row">
                                    <div className="col-md-5">
                                          <div className="row mb-4">
                                                <h2 className='text-center mt-4 pb-2' style={{ color: "#26B69F", borderBottom: "3px solid #26B69F" }}>I-code</h2>
                                          </div>
                                          <div className="row">
                                                <div className="col-md-9">
                                                      <img src="icode1.png" alt="" className="img-fluid" data-aos="fade-down" />
                                                </div>
                                          </div>
                                          <br />
                                          <div className="row">
                                                <div className="offset-md-3 col-md-9">
                                                      <img src="icode2.png" alt="" className="img-fluid" data-aos="fade-up" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="offset-md-1 col-md-6 mt-md-5 mt-1" style={{ fontSize: "1.5rem", color: "#26B69F" }} data-aos="fade-down">
                                          <br /><br />
                                          I-code is web based text editor where any user can just write and execute their code without setting up any runtime envirmoments. It has support for 7 languages namely C, C++, Java, Python, C#, GO and Javascript.
                                          <br /><br />
                                          It is just like vscode. It also has Command Palette which eases programming.There is one output terminal which shows the output of code or errors to debug the code.
                                          <div className="mt-5 w-100 d-flex flex-row justify-content-center ">
                                                <a href="https://udayvara.github.io/I-Code/" className='btn  rounded mx-2 ' target="_blank" style={{ fontSize: '1.1rem', backgroundColor: '#26B69F' }}>Open Site</a>
                                                <a href="https://github.com/UdayVara/I-Code" className='btn  rounded mx-2 ' target="_blank" style={{ fontSize: '1.1rem', backgroundColor: '#26B69F' }}>View Source Code</a>
                                          </div>
                                    </div>
                              </div>
                              <div className="row">
                                    <div className="col-md-5">
                                          <div className="row mb-4">
                                                <h2 className='text-center mt-4 pb-2' style={{ color: "#26B69F", borderBottom: "3px solid #26B69F" }}>Signature Stiches</h2>
                                          </div>
                                          <div className="row">
                                                <div className="col-md-9">
                                                      <img src="ss1.png" alt="" className="img-fluid" data-aos="fade-down" />
                                                </div>
                                          </div>
                                          <br />
                                          <div className="row">
                                                <div className="offset-md-3 col-md-9">
                                                      <img src="ss2.png" alt="" className="img-fluid" data-aos="fade-up" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="offset-md-1 col-md-6 mt-md-5 mt-1" style={{ fontSize: "1.5rem", color: "#26B69F" }} data-aos="fade-down">
                                          <br /><br />
                                          Signature Stiches is Ecommerce site with modern features like pincode availability check, Payment Integration, Cart functionality and much more.
                                          <br /><br />
                                          This site is built with Next JS and backend is on NODE + Express JS, for state management I have used Redux Toolkit. This site also has payment intgration using Razorpay.
                                          <div className="mt-5 w-100 d-flex flex-row justify-content-center ">
                                                <a href="https://github.com/UdayVara/Newsapp" className='btn  rounded mx-2 ' target="_blank" style={{ fontSize: '1.1rem', backgroundColor: '#26B69F' }}>View Source Code</a>
                                          </div>
                                    </div>
                              </div>
                              <div className="row">
                                    <div className="col-md-5">
                                          <div className="row mb-4">
                                                <h2 className='text-center mt-4 pb-2' style={{ color: "#26B69F", borderBottom: "3px solid #26B69F" }}>NewsApp</h2>
                                          </div>
                                          <div className="row">
                                                <div className="col-md-9">
                                                      <img src="newsapp.png" alt="" className="img-fluid" data-aos="fade-down" />
                                                </div>
                                          </div>
                                          <br />
                                          <div className="row">
                                                <div className="offset-md-3 col-md-9">
                                                      <img src="newsapp_dark.png" alt="" className="img-fluid" data-aos="fade-up" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="offset-md-1 col-md-6 mt-md-5 mt-1" style={{ fontSize: "1.5rem", color: "#26B69F" }} data-aos="fade-down">
                                          <br /><br />
                                          Newsapp is live news web application.It is bulit using Bootstrap and react JS at frontend. And it is backed by NEWSAPI . I have used free plan as this is project is for my education purpose so , it allows 100 requests per day.<br /><br />
                                          Newsapp is completely responsive website as it is built using bootstrap.There are plenty of features in newsapp like dark mode, filtered news based on category of interest.
                                          <div className="mt-5 w-100 d-flex flex-row justify-content-center ">
                                                <a href="https://github.com/UdayVara/Newsapp" className='btn  rounded mx-2 ' target="_blank" style={{ fontSize: '1.1rem', backgroundColor: '#26B69F' }}>View Source Code</a>
                                          </div>
                                    </div>
                              </div>
                              <div className="row mt-5">
                                    <div className="col-md-5">
                                          <div className="row mb-4">
                                                <h2 className='text-center mt-4 pb-2' style={{ color: "#26B69F", borderBottom: "3px solid #26B69F" }}>MovieFinder</h2>
                                          </div>
                                          <div className="row">
                                                <div className="col-md-9">
                                                      <img src="moviefinder_1.png" alt="" className="img-fluid" data-aos="fade-down" />
                                                </div>
                                          </div>
                                          <br />
                                          <div className="row">
                                                <div className="offset-md-3 col-md-9">
                                                      <img src="moviefinder_2.png" alt="" className="img-fluid" data-aos="fade-up" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="offset-md-1 col-md-6 mt-md-5 mt-1" style={{ fontSize: "1.5rem", color: "#26B69F" }} data-aos="fade-down">
                                          <br /><br />
                                          Moviefinder is web site is created to get acess to any movies or web series wheather it is bollywood, hollywood or south indian film industry.It works as a serach engine where a user needs to write a name of movie or webseries that they are looking for.
                                          <br /><br />
                                          It has two different UI modes :- dark, light to view the site according to the requirement or comfort of the user.It shows various  information about the movies such as budget, cast, turnover , release date etc.
                                          <br /><br />
                                          <div className="mt-5 w-100 d-flex flex-row justify-content-center ">
                                                <a className=' mx-2 btn  rounded ' href='https://udayvara.github.io/MovieFinder/' target="_blank" style={{fontSize:'1.1rem',backgroundColor:'#26B69F'}}>Open Site  </a>
                                                <a href="https://github.com/UdayVara/MovieFinder" className='btn  rounded mx-2 ' target="_blank" style={{fontSize:'1.1rem',backgroundColor:'#26B69F'}}>View Source Code</a>
                                          </div>

                                    </div>
                              </div>
                              <div className="row mt-5">
                                    <div className="col-md-5">
                                          <div className="row mb-4">
                                                <h2 className='text-center mt-4 pb-2' style={{ color: "#26B69F", borderBottom: "3px solid #26B69F" }}>iNotebook</h2>
                                          </div>
                                          <div className="row">
                                                <div className="col-md-9">
                                                      <img src="inotebook1.png" alt="" className="img-fluid" data-aos="fade-down" />
                                                </div>
                                          </div>
                                          <br />
                                          <div className="row">
                                                <div className="offset-md-3 col-md-9">
                                                      <img src="inotebook2.png" alt="" className="img-fluid" data-aos="fade-up" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="offset-md-1 col-md-6 mt-md-5 mt-1" style={{ fontSize: "1.5rem", color: "#26B69F" }} data-aos="fade-down">
                                          <br /><br />
                                          iNotebook is internet notebook site which is Built on MERN Stack.This site is built with purpose of storing note for exams or anything on internet under particular users acccount.This site is completely reload free that means you click on anything site will not be reloaded due to async nature.
                                          <br /><br />
                                          In this site i have used to modern authentication technology , JSON Web token to make this site secure.Password are also stored in hash format due to privacy concerns.
                                          <br /><br />
                                          <div className="mt-5 w-100 d-flex flex-row justify-content-center ">
                                                
                                                <a href="https://github.com/UdayVara/iNotebook" className='btn  rounded mx-2 ' target="_blank" style={{fontSize:'1.2rem',backgroundColor:'#26B69F'}}>View Source Code</a>
                                          </div>

                                    </div>
                              </div>
                              <div className="row mt-5">
                                    <div className="col-md-5">
                                          <div className="row mb-4">
                                                <h2 className='text-center mt-4 pb-2' style={{ color: "#26B69F", borderBottom: "3px solid #26B69F" }}>MobShop</h2>
                                          </div>
                                          <div className="row">
                                                <div className="col-md-9">
                                                      <img src="ecommerce1.png" alt="" className="img-fluid" data-aos="fade-down" />
                                                </div>
                                          </div>
                                          <br />
                                          <div className="row">
                                                <div className="offset-md-3 col-md-9">
                                                      <img src="ecommerce2.png" alt="" className="img-fluid" data-aos="fade-up" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="offset-md-1 col-md-6 mt-md-5 mt-1" style={{ fontSize: "1.5rem", color: "#26B69F" }} data-aos="fade-down">
                                          <br /><br />
                                          MobShop is Ecommerce site which is built on Django , Python Framework.This site sells smartphone of various brands.In the frontend I have used Bootstrap with javascript.In backend I have used MYSQL database.
                                          <br /><br />
                                          This site is built with so many modern features like cart which requires login , mulitple color and variants options of a same phone.Add to cart functionality.Filter for searching particular smartphone easily.
                                          <br /><br />
                                          <div className="mt-5 w-100 d-flex flex-row justify-content-center ">
                                                
                                                <a href="https://github.com/UdayVara/Ecommerce-Site-Using-Django" className='btn  rounded mx-2 ' target="_blank" style={{ fontSize: '1.1rem', backgroundColor: '#26B69F' }}>View Source Code</a>
                                          </div>
                                          {/* Check out : <a href="https://udayvara.github.io/Currency--Convertor/" target="_blank">View site</a> */}
                                    </div>
                              </div>
                              <div className="row mt-5">
                                    <div className="col-md-5">
                                          <div className="row mb-4">
                                                <h2 className='text-center mt-4 pb-2' style={{ color: "#26B69F", borderBottom: "3px solid #26B69F" }}>Currency Convertor</h2>
                                          </div>
                                          <div className="row">
                                                <div className="col-md-9">
                                                      <img src="currency_convertor_1.png" alt="" className="img-fluid" data-aos="fade-down" />
                                                </div>
                                          </div>
                                          <br />
                                          <div className="row">
                                                <div className="offset-md-3 col-md-9">
                                                      <img src="currency_convertor_2.png" alt="" className="img-fluid" data-aos="fade-up" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="offset-md-1 col-md-6 mt-md-5 mt-1" style={{ fontSize: "1.5rem", color: "#26B69F" }} data-aos="fade-down">
                                          <br /><br />
                                          This is very simple currency convertor that converts currency of one nation to the currency of another nation with just one click.This is built using free currency api.<br /><br />
                                          This app converts currency with latest currency rate and it is frequently updates the every currency according to the change.
                                          <br /><br />
                                          <div className="mt-5 w-100 d-flex flex-row justify-content-center ">
                                                <a className=' mx-2 btn  rounded ' target="_blank" href='https://udayvara.github.io/Currency--Convertor/' style={{fontSize:'1.1rem',backgroundColor:'#26B69F'}}>Open Site  </a>
                                                <a href="https://github.com/UdayVara/Currency--Convertor"  className='btn  rounded mx-2 ' target="_blank" style={{fontSize:'1.1rem',backgroundColor:'#26B69F'}}>View Source Code</a>
                                          </div>
                                          {/* Check out : <a href="https://udayvara.github.io/Currency--Convertor/" target="_blank">View site</a> */}
                                    </div>
                              </div>
                              <div className="row mt-5">
                                    <div className="col-md-5">
                                          <div className="row mb-4">
                                                <h2 className='text-center mt-4 pb-2' style={{ color: "#26B69F", borderBottom: "3px solid #26B69F" }}>Cv maker</h2>
                                          </div>
                                          <div className="row">
                                                <div className="col-md-9">
                                                      <img src="cvmkr_1.png" alt="" className="img-fluid" data-aos="fade-down" />
                                                </div>
                                          </div>
                                          <br />
                                          <div className="row">
                                                <div className="offset-md-3 col-md-9">
                                                      <img src="cvmkr_2.png" alt="" className="img-fluid" data-aos="fade-up" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="offset-md-1 col-md-6 mt-md-5 mt-1" style={{ fontSize: "1.5rem", color: "#26B69F" }} data-aos="fade-down">
                                          <br /><br />
                                          cvmkr is very useful and interactive website which is specially made for students who do not have experience with making their resume and they don't know how to design, what fields to add in resume etc.
                                          <br /><br />
                                          Using this site a user can make cv within minutes without desinging it.A user just have to fill the fields which they want to add in their resume.User can even disable or remove some of the fields from the resume if they want.
                                          <div className="mt-5 w-100 d-flex flex-row justify-content-center ">
                                                <a className=' mx-2 btn  rounded ' target="_blank" href='https://udayvara.github.io/cvmkr/' style={{fontSize:'1.1rem',backgroundColor:'#26B69F'}}>Open Site  </a>
                                                <a href="https://github.com/UdayVara/cvmkr"  className='btn  rounded mx-2 ' target="_blank" style={{fontSize:'1.1rem',backgroundColor:'#26B69F'}}>View Source Code</a>
                                          </div>
                                          {/* Check out : <a href="https://udayvara.github.io/Currency--Convertor/" target="_blank">View site</a> */}
                                    </div>
                              </div>
                              <div className="row mt-5">
                                    <div className="col-md-5">
                                          <div className="row mb-4">
                                                <h2 className='text-center mt-4 pb-2' style={{ color: "#26B69F", borderBottom: "3px solid #26B69F" }}>Calculator</h2>
                                          </div>
                                          <div className="row">
                                                <div className="col-md-9">
                                                      <img src="calc.png" alt="" className="img-fluid" data-aos="fade-down" />
                                                </div>
                                          </div>
                                          <br />
                                          <div className="row">
                                                <div className="offset-md-3 col-md-9">
                                                      <img src="calc1.png" alt="" className="img-fluid" data-aos="fade-up" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="offset-md-1 col-md-6 mt-md-5 mt-1" style={{ fontSize: "1.5rem", color: "#26B69F" }} data-aos="fade-down">
                                          <br /><br />
                                          It is simple calculator which is made from pure javascript and it it used to perform the calculation like arithmetic operations like addition , subtraction and multiplication.
                                          <br /><br />
                                          It can work on any devices ranging from smartphones to tablets to pc.It is made without any backend support and it uses eval function available in javascript.
                                          <div className="mt-5 w-100 d-flex flex-row justify-content-center ">
                                                <a className=' mx-2 btn  rounded ' target="_blank" href='https://udayvara.github.io/calculator/' style={{fontSize:'1.1rem',backgroundColor:'#26B69F'}}>Open Site  </a>
                                                <a href="https://github.com/UdayVara/calculator"  className='btn  rounded mx-2 ' target="_blank" style={{fontSize:'1.1rem',backgroundColor:'#26B69F'}}>View Source Code</a>
                                          </div>
                                          {/* Check out : <a href="https://udayvara.github.io/Currency--Convertor/" target="_blank">View site</a> */}
                                    </div>
                              </div>
                              <div className="row mt-5">
                                    <div className="col-md-5">
                                          <div className="row mb-4">
                                                <h2 className='text-center mt-4 pb-2' style={{ color: "#26B69F", borderBottom: "3px solid #26B69F" }}>Quote Generator</h2>
                                          </div>
                                          <div className="row">
                                                <div className="col-md-9">
                                                      <img src="quote1.png" alt="" className="img-fluid" data-aos="fade-down" />
                                                </div>
                                          </div>
                                          <br />
                                          <div className="row">
                                                <div className="offset-md-3 col-md-9">
                                                      <img src="quote2.png" alt="" className="img-fluid" data-aos="fade-up" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="offset-md-1 col-md-6 mt-md-5 mt-1" style={{ fontSize: "1.5rem", color: "#26B69F" }} data-aos="fade-down">
                                          <br /><br />
                                          This is beautifully designed site that gives new and amazing quotes everytime.This site is backed by an randomquotes API which provides about 10000 quotes.
                                          <br /><br />
                                          This quote generator has a button 'new quotes' that generates a new quote for the user.It also has the copy button which is used to copy quote directly to the clipboard.
                                          <div className="mt-5 w-100 d-flex flex-row justify-content-center ">
                                                <a className=' mx-2 btn  rounded ' target="_blank" href='https://udayvara.github.io/QuoteGenerator/' style={{fontSize:'1.1rem',backgroundColor:'#26B69F'}}>Open Site  </a>
                                                <a href="https://github.com/UdayVara/QuoteGenerator"  className='btn  rounded mx-2 ' target="_blank" style={{fontSize:'1.1rem',backgroundColor:'#26B69F'}}>View Source Code</a>
                                          </div>
                                          {/* Check out : <a href="https://udayvara.github.io/Currency--Convertor/" target="_blank">View site</a> */}
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      )
}
