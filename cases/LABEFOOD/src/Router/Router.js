import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Cart from '../Pages/Cart/cart'
import Feed from '../Pages/Feed/feed'
import Login from '../Pages/Login/login'
import Profile from '../Pages/Profile/profile'
import Restaurant from '../Pages/Restaurant/restaurant'
import Signup from '../Pages/SignUp/signUp'
import SignUpAdress from '../Pages/SignUpAdress/signUpAdress'

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element = {<Login/>}/>
                <Route path= '/signup'element = {<Signup/>}/>
                <Route path= '/signup/adress'element = {<SignUpAdress/>}/>
                <Route path= '/feed'element = {<Feed/>}/>
                <Route path= '/feed/restaurant/:id'element = {<Restaurant/>}/>
                <Route path= '/cart'element = {<Cart/>}/>
                <Route path= '/profile'element = {<Profile/>}/>                
            </Routes>
        </BrowserRouter>
    )
}

export default Router