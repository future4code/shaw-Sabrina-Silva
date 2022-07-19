import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Cart from '../Pages/Cart/cart'
import Feed from '../Pages/Feed/feed'
import Login from '../Pages/Login/login'
import Profile from '../Pages/Profile/profile'
import Restaurant from '../Pages/Restaurant/restaurant'
import Singup from '../Pages/SingUp/singup'
import SingUpAdress from '../Pages/SingUpAdress/singUpAdress'

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element = {<Login/>}/>
                <Route path= '/singup'element = {<Singup/>}/>
                <Route path= '/singup/adress'element = {<SingUpAdress/>}/>
                <Route path= '/feed'element = {<Feed/>}/>
                <Route path= '/restaurant'element = {<Restaurant/>}/>
                <Route path= '/cart'element = {<Cart/>}/>
                <Route path= '/profile'element = {<Profile/>}/>                
            </Routes>
        </BrowserRouter>
    )
}

export default Router