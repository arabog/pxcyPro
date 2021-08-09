import { Search } from "@material-ui/icons"

export default function Topbar() {

          return (
                    <div className="topbarContainer">
                              <div className="topbarLeft">
                                        <div className="logo">Rx</div>
                              </div>

                              <div className="topbarCenter">
                                        <ul className="nav-item">
                                                  <li className="nav-list">Home</li>
                                                  <li className="nav-list">Pharmacist Page</li>
                                                  <li className="nav-list">Sign out</li>
                                        </ul>
                              </div>
                              
                              <div className="topbarRight">

                                        <div className="searchBar">
                                                  <Search />

                                                  <input 
                                                            type="text" 
                                                            placeholder="Looking for drug(s)" 
                                                  />

                                        </div>

                                        <img className="userImg" src="assets/Babatunde" alt="" />
                              </div>
                    </div>
          )
}