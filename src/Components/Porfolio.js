import React from 'react'

export default function Porfolio() {
      return (
            <>
                  <div className="container-fluid mt-0 pb-5" id="portfolio" style={{ minHeight: "100vh", backgroundColor: "#083749" }}>
                        <br /><br />
                        <div className="container-md">


                              <h1 className="h1 text-center mt-md-3" style={{ color: "#26B69F", fontSize: "2.4rem" }}>Portfolio</h1><br />
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
                                          {/* Check out : <a href="https://udayvara.github.io/Currency--Convertor/" target="_blank">View site</a> */}
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
                                          {/* Check out : <a href="https://udayvara.github.io/Currency--Convertor/" target="_blank">View site</a> */}
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      )
}
