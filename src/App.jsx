import Header from './components/Header'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Contact from './components/Contact'
import Home from './components/Home'
import Search from './components/Search'
import { createContext, useEffect, useState } from 'react'
import Wishlist from './components/Wishlist'
import Cart from './components/Cart'
import AllProducts from './components/AllProducts'
import Products from './components/MyProducts'
import Accessories from './components/productsFile/Accessories'
import Mobiles from './components/productsFile/Mobiles'
import Television from './components/productsFile/Television'
import Tablets from './components/productsFile/Tablets'
import Headphones from './components/productsFile/Headphones'
import Laptop from './components/productsFile/Laptop'
import Watches from './components/productsFile/Watches'
import SingleProduct from './components/productsFile/SingleProduct'
import SearchPro from './components/SearchPro'



export const MainContext = createContext();



function App() {

  const [products, setProducts] = useState(Products)
  let [cart, setCart] = useState([])
  let [wishlist, setWishlist] = useState([])
  let [single, setSingle] = useState({})
  let [searchPro, setSearchPro] = useState('')
  let [searchResults, setSearchResults] = useState([]);

  let navigate = useNavigate();

  const SearchProducts = (event) => {
    const term = event.target.value;
    setSearchPro(term);
    const filteredProducts = products.filter((x) =>
      x.title.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(filteredProducts);
  }

  const setSingleProduct = (id) => {
    let product = products.find((x) => x.id == id)
    setSingle(product)
    navigate('single')
  }

  useEffect(() => {
    const savedItems = localStorage.getItem('VRProducts');
    if (savedItems) {
      setCart(JSON.parse(savedItems))
    }

  }, [])

  const addToWishlist = (id) => {
    let wish = products.find((x) => x.id == id)
    let existing = wishlist.find((y) => y.id == id)
    if (existing) {
      Swal.fire({
        title: "For Your Information!",
        text: "Product already exist your Wishlist",
        icon: "info",
        confirmButtonText: 'OK',
        confirmButtonColor: "#FF7F50",
      });
    }
    else {
      setWishlist([...wishlist, wish])
      Swal.fire({
        title: "Woooooo!!!!",
        text: "Product added to your WishList",
        icon: "success",
        confirmButtonText: 'OK',
        confirmButtonColor: "#FF7F50",
      });
    }
  }

  const addToCart = (id) => {
    let obj = products.find((x) => x.id == id)
    let existing = cart.find((y) => y.id == id)
    if (existing) {
      Swal.fire({
        title: "For Your Information!",
        text: "Product already exist in Cart",
        icon: "info",
        confirmButtonText: 'OK',
        confirmButtonColor: "#FF7F50",
      });
    }
    else {
      setCart([...cart, obj])
      localStorage.setItem('VRProducts', JSON.stringify([...cart, obj]))
      Swal.fire({
        title: "Woooooo!!!!",
        text: "Product added to the Cart",
        icon: "success",
        confirmButtonText: 'OK',
        confirmButtonColor: "#FF7F50",
      });
    }
  }

  const RemovePro = (id) => {
    let obj1 = cart.filter((x) => x.id != id)
    cart = obj1
    Swal.fire({
      title: "Do you want to remove this Product",
      showCancelButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "#FF7F50",
      CancelButtonColor: '#F5F5F5',
      denyButtonText: `Don't save`
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Products is Removed',
          text: '',
          icon: 'info',
          confirmButtonText: 'OK',
          confirmButtonColor: "#FF7F50",
        });
        setCart([...cart])
        localStorage.setItem('VRProducts', JSON.stringify([...cart]))
      } else if (result.isDenied) {
        Swal.fire("Product is not removed", "", "info");
      }
    })
  }

  const Removelist = (id) => {
    let removeWish = wishlist.filter((x => x.id != id))
    wishlist = removeWish
    Swal.fire({
      title: "Do you want to remove this Product from Wishlist",
      showCancelButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "#FF7F50",
      CancelButtonColor: '#F5F5F5',
      denyButtonText: `Don't save`
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Products is Removed',
          text: '',
          icon: 'info',
          confirmButtonText: 'OK',
          confirmButtonColor: "#FF7F50",
        });
        setWishlist([...wishlist])
      } else if (result.isDenied) {
        Swal.fire("Product is not removed", "", "info");
      }
    })
  }

  const QtyIncrease = (id) => {
    let obj = cart.find((x) => x.id == id)
    obj.qty++
    setCart([...cart])
  }

  const QtyDecrease = (id) => {
    let obj = cart.find((x) => x.id == id)
    if (obj.qty <= 1) {
      Swal.fire("Product Removed!");
      RemovePro(id)
    } else {
      obj.qty--;
      setCart([...cart])
    }
  }

  const handleHover = (id) => {
    let product = products.find((x) => x.id == id)

    let mainImg = product.img
    product.img = product.img2
    product.img2 = mainImg
    setProducts([...products])
  }


  let value = { products, wishlist,searchResults, SearchProducts, searchPro, addToWishlist, Removelist, cart, addToCart, navigate, RemovePro, setSingleProduct, single, setProducts, handleHover, QtyIncrease, QtyDecrease }

  return (
    <>
      <MainContext.Provider value={value}>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='search' element={<Search />}></Route>
          <Route path='wishlist' element={<Wishlist />}></Route>
          <Route path='cart' element={<Cart />}></Route>
          <Route path='all-products' element={<AllProducts />}></Route>
          <Route path='all-products/mobiles' element={<Mobiles />}></Route>
          <Route path='all-products/televisions' element={<Television />}></Route>
          <Route path='all-products/accessories' element={<Accessories />}></Route>
          <Route path='all-products/tablets' element={<Tablets />}></Route>
          <Route path='all-products/headphones' element={<Headphones />}></Route>
          <Route path='all-products/laptops' element={<Laptop />}></Route>
          <Route path='all-products/smart-watches' element={<Watches />}></Route>
          <Route path='single' element={<SingleProduct />}></Route>
          <Route path='search/searchpro' element={<SearchPro />}></Route>
        </Routes>
      </MainContext.Provider>
    </>
  )
}

export default App
