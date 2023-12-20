function Navbar(){
    return(
        <nav>
        <div class="navbar">
                <div class="navbar__s1">
                    <h1 class="navbar__s1__title">Udemy</h1>
                </div>
        
                <div class="navbar__s2">
                    <i class="fa-solid fa-magnifying-glass" style={{color: "#00040a"}}></i>
                    <input placeholder="Search for anything here... Tech,Business,Art...."></input>
                </div>
        
                <div class="navbar__s3">
                    <p>Course</p>
                    <div class="mylearning">
                        <p>My learning</p>
                        <div class="mylearning__popup">
                            <p>you did not purchase anything yet</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-cart-shopping" style={{color:" #00060f"}}></i>
                    <i class="fa-solid fa-bell" style={{color:" #00060f"}}></i>
                    <i class="fa-solid fa-user" style={{color:" #00060f"}}></i>
                </div>
                <div class="navbar__s4">
                    <i class="fa-solid fa-bars" style={{color: "#000000"}}></i>
                </div>
            </div>
            
        </nav>
        )
}

export default Navbar