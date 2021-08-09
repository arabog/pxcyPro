import { Search } from "@material-ui/icons"
import "./topbar.css"

export default function Topbar() {

          return (
                    <div className="topbarContainer">
                              <div className="topbarLeft">
                                        <div className="logoContainer">
                                                  <img className="logo" src="/assets/img/logo.jpg" alt="" />
                                        </div>
                              </div>

                              <div className="topbarCenter">     
                                        <div className="searchBar">
                                                            <Search  className="searchIcon"/>

                                                            <input 
                                                                      type="text" 
                                                                      placeholder="Looking for drug(s)?" 
                                                                      className="searchInput"
                                                            />

                                        </div>       
                                                                      
                                        <select name="" id="" className="selection" >
                                                  <option value="price">Price</option>
                                                  <option value="date">Date</option>
                                                  <option value="location">Location</option>
                                        </select>
                              </div>
                              
                              <div className="topbarRight">
                                        

                                        <ul className="signout">
                                                  <li className="nav-list">Sign out</li>
                                        </ul>

                                        <img className="userImg" src="/assets/img/Babatunde1.png" alt="" />
                              </div>
                    </div>
          )
}