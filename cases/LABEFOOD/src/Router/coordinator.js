export const goToLogin = (navigate) => {
    navigate('/')
}

export const goToFeed = (navigate) => {
    navigate('/feed')
}

export const goToRestaurantDetail = (navigate, id) => {
    navigate(`/feed/restaurant/${id}`)
}

export const goToSignUp = (navigate) => {
    navigate('/signup')
}

export const goToSignUpAdress = (navigate) => {
    navigate('/signup/adress')
}

export const goBack = (navigate) => {
    navigate(-1)
}

export const goToCart = (navigate) => {
    navigate('/cart')
}

export const goToProfile = (navigate) => {
    navigate('/profile')
}