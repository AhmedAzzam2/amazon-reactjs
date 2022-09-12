import './Header.scss';
import ReactDOM from "react-dom"
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { useState, createContext, useContext, useRef } from "react";
import { List, Cart3, Flag, Search, PersonCircle } from 'react-bootstrap-icons';
import data from '../../api/data';
import { ThemeContext } from "../../App";

let d = [...new Map(data.map(item =>
    [item['type'], item])).values()];

const navXshop = ['Today\'s Deals', 'Mobile Phones', 'Help', 'Prime', 'Electronics', 'Appliances', 'Fashion', 'Home', 'Video Games', 'Toys & Games', 'Grocery', 'Perfumes', 'Your amazon.eg', 'Coupons', 'Sell'];

export default () => {
    const navigate = useNavigate();

    const [search, setserach] = useState([]);
    const form = useRef(null)
    const txt = useRef(null)
    const theme = useContext(ThemeContext);

    const serch = () => {

        setserach(
            data.filter((item) => item.name.startsWith(form.current[1].value)).splice(0, 10)
        )
        txt.current.style.display = 'block'


    }

    const serchP = (event) => {
        event.preventDefault();
        // navigate(`/search/${form.current[1].value}`);
        navigate(`/search/${event.target[0].value}`);
    }

    return (
        <header className="App-header">
            <div id="nav-belt">
                <div className="nav-left">
                    <Link className="logo" to={'/'}>amazon</Link>
                    <div className="global">
                        <div className="global-icon"></div>
                        <div className="global-text">Global Store</div>
                    </div>
                </div>
                <div className="nav-fill">
                    <form onSubmit={(event) => serchP(event)} ref={form} onChange={serch}>
                        <select title="Search in" defaultValue={'All Categories'}>
                            <option value="All Categories">All Categories</option>
                            <option value="search-alias=amazon-devices">Amazon Devices</option>
                            <option value="search-alias=fashion">Amazon Fashion</option>
                            <option value="search-alias=arts-crafts">Arts, Crafts &amp; Sewing</option>
                            <option value="search-alias=automotive">Automotive Parts &amp; Accessories</option>
                            <option value="search-alias=baby">Baby</option>
                            <option value="search-alias=beauty">Beauty &amp; Personal Care</option>
                            <option value="search-alias=stripbooks">Books</option>
                            <option value="search-alias=electronics">Electronics</option>
                            <option value="search-alias=grocery">Grocery &amp; Gourmet Food</option>
                            <option value="search-alias=hpc">Health, Household &amp; Baby Care</option>
                            <option value="search-alias=garden">Home &amp; Garden</option>
                            <option value="search-alias=home">Home Related</option>
                            <option value="search-alias=industrial">Industrial &amp; Scientific</option>
                            <option value="search-alias=mi">Musical Instruments</option>
                            <option value="search-alias=office-products">Office Products</option>
                            <option value="search-alias=pets">Pet Supplies</option>
                            <option value="search-alias=prime-day">Prime Day</option>
                            <option value="search-alias=software">Software</option>
                            <option value="search-alias=sports">Sports</option>
                            <option value="search-alias=home-improvement">Tools &amp; Home Improvement</option>
                            <option value="search-alias=toys">Toys &amp; Games</option>
                            <option value="search-alias=videogames">Video Games</option>
                            {
                                d.map(
                                    (item, index) =>
                                        <option value="{item.type}" key={index}>{item.type}</option>

                                )
                            }
                        </select>
                        <div className="input">
                            <input type="text" />
                            <div ref={txt} onClick={() => txt.current.style.display = 'none'}>
                                {
                                    search.map((item, index) => {
                                        return (
                                            <Link to={'/product/' + item.name} key={index}>{item.name}</Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <button type="submit"><Search /></button>
                    </form>
                </div>
                <div className="nav-right">
                    <div className="county"><Flag size={22} /></div>
                    <div className="acount">
                        <div className="acount-icon">Hello, Sign in</div>
                        <div className="acount-text">Account & Lists</div>
                    </div>
                    {/* <div className="orders">orders</div> */}
                    <NavLink className="cart" to='/cart'>
                        <Cart3 size={22} />
                        <span className="cart-text">Cart <div className='count'>{theme.cart.length}</div></span>
                    </NavLink>
                </div>
            </div>
            <div className="nav-belt-mob">
                <div className="nav-logobar">
                    <div className="nav-left">
                        <a className="nav-item" onClick={() => theme.setShow(true)}><List size={25} /> </a>
                        <Link className="logo" to={'/'}>amazon</Link>
                    </div>
                    <div className="nav-right">
                        <NavLink className="cart" to='/cart'>
                            <Cart3 size={22} />
                            <span className="cart-text">Cart <div className='count'>{theme.cart.length}</div></span>
                        </NavLink>
                    </div>
                </div>

                <div className="nav-fill">
                    <form onSubmit={(event) => serchP(event)} ref={form} onChange={serch}>
               
                        <div className="input">
                            <input type="text" />
                            <div ref={txt} onClick={() => txt.current.style.display = 'none'}>
                                {
                                    search.map((item, index) => {
                                        return (
                                            <Link to={'/product/' + item.name} key={index}>{item.name}</Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <button type="submit"><Search /></button>
                    </form>
                </div>
            </div>
            <div id="nav-xshop">
                <a className="nav-item" onClick={() => theme.setShow(true)}><List size={22} /> <span>All</span></a>
                {navXshop.map((item, index) => {
                    return (
                        <a className="nav-item" key={index}>{item}</a>
                    );
                })}
            </div>

            {ReactDOM.createPortal(<Hmenu />, document.getElementById('modal'))}
        </header>
    );
}



const Hmenu = (s) => {

    const theme = useContext(ThemeContext);
    console.log(theme);
    return (
        theme.show &&
        <>
            <div className="backdrop" onClick={() => theme.setShow(false)}> </div>
            <div className="Hmenu">
                <div className="header">

                    <PersonCircle size={22} />
                    <a>Hello, Sign in</a>
                    <a className="close" onClick={() => theme.setShow(false)}>X</a>
                </div>
                {
                    s && <div className="body">
                        <ul>
                            <li style={{ fontSize: '22px', fontWeight: 'bold' }}>
                                <div> Trending</div>
                            </li>
                            <li>
                                <a>Best Sellers</a>
                            </li>
                            <li>
                                <a>New Releases</a>
                            </li>
                            <li>
                                <a>Movers & Shakers</a>
                            </li>
                            <hr />
                            <li style={{ fontSize: '22px', fontWeight: 'bold' }}>
                                <div> Shop by Category</div>
                            </li>
                            <li>
                                <a>All</a>
                            </li>
                            <li>
                                <a>Appliances</a>
                            </li>
                            <li>
                                <a>Arts, Crafts & Sewing</a>
                            </li>
                            <li>
                                <a>Automotive</a>
                            </li>
                            <li>
                                <a>Baby</a>
                            </li>
                            <li>
                                <a>Beauty</a>
                            </li>
                            <li>
                                <a>Books</a>
                            </li>
                        </ul>
                    </div>
                }

            </div>
        </>
    );
}