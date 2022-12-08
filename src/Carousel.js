import pink from "./images/pink.jpeg";
import cube from "./images/cube.jpeg";
import playdoh from "./images/playdoh.jpeg";

function Carousel() {
    return (
        <div id="carouselDiv">
            <div id="carouselImage1" className="carouselItem slide">
                <img src={pink} alt="carousel image1" />
                <div className="imgOverlay"></div>
                <div className="carouselQuote">
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum illo dolorum tempora tenetur, quidem voluptas, quos molestias, possimus architecto veniam voluptatem! Ratione facilis ipsa officia est obcaecati perferendis ducimus consequuntur.</h4>
                    <p>Joe Dow</p>
                </div>
            </div>

            <div id="carouselImage2" className="carouselItem slide" >
                <img src={cube} alt="carousel image2" />
                <div className="imgOverlay"></div>
                <div className="carouselQuote">
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum illo dolorum tempora tenetur, quidem voluptas, quos molestias, possimus architecto veniam voluptatem! Ratione facilis ipsa officia est obcaecati perferendis ducimus consequuntur.</h4>
                    <p>Joe Dow</p>
                </div>
            </div>

            <div id="carouselImage3" className="carouselItem slide">
                <img src={playdoh} alt="carousel image3" />
                <div className="imgOverlay"></div>
                <div className="carouselQuote">
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum illo dolorum tempora tenetur, quidem voluptas, quos molestias, possimus architecto veniam voluptatem! Ratione facilis ipsa officia est obcaecati perferendis ducimus consequuntur.</h4>
                    <p>Joe Dow</p>
                </div>
            </div>
        </div>
    )
}

export default Carousel;