import React from "react";
import Footer from "../../Components/Footer/Footer";
import useProtectedPage from "../../Hooks/useProtectedPage";

const Profile = () => {
    useProtectedPage()

    return(
        <div>
            Profile
            <Footer page='profile' />
        </div>
    )
}

export default Profile 