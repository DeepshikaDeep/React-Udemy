import c1 from "../images/c1.jpg"
import c2 from "../images/c2.jpg"
import c3 from "../images/c3.jpg"
import c4 from "../images/c4.jpg"



function Recommended(){
    return(
        <div class="recommended">
        <h1 class="recommended__title">Recommended for you</h1>
        <p>pick the best fit</p>
        <div class="recommended__container">
            <div class="course-card">
                <img src={c1} alt="c1"></img>
                <h3>2023 Web Development</h3>
                <p>Col Steele</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>449<del>1999</del></p>
            </div>
            <div class="course-card">
            <img src={c2} alt="c1"></img>
                <h3>2023 Web Development</h3>
                <p>Col Steele</p>
                <p>3.4⭐⭐⭐</p>
                <p>449<del>2999</del></p>
            </div>
            <div class="course-card">
            <img src={c3} alt="c1"></img>
                <h3>2023 Programing in C</h3>
                <p>Col Steele</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>449<del>1899</del></p>
            </div>
            <div class="course-card">
            <img src={c4} alt="c1"></img>
                <h3>2023 UI/UX</h3>
                <p>Col Steele</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>449<del>1999</del></p>
            </div>
        </div>
    </div>
    )
}

export default Recommended