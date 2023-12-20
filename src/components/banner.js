import banner from "../images/banner.jpg"

function Banner(){
    return(
        <div class="sale-image">
        <img src={banner}></img>
        <div class="sale-image__offer">
            <h2> Udemy flash sale 24 hours to save.</h2>
            <p>get the top course just 499. just one day to save a lifetime to learn</p>
        </div>
    </div>
    )
}

export default Banner