import Carousel from "react-bootstrap/Carousel";
import archery from '../assets/images/archery.jpg';
import bike from '../assets/images/bike.jpg';
import diving from '../assets/images/diving.jpg';
import fencing from '../assets/images/fencing.jpg';
import hockey from '../assets/images/hockey.jpg';
import lacrosse from '../assets/images/lacrosse.jpg';
import rugby from '../assets/images/rugby.jpg';
import shooting from '../assets/images/shooting.jpg';
import skateboard from '../assets/images/skateboard.jpg';
import skeleton from '../assets/images/skeleton.jpg';
import dirtbike from '../assets/images/dirtbike.jpg';
import snowboard from '../assets/images/snowboard.jpg';
import skii from '../assets/images/skii.jpg';
import swim from '../assets/images/swim.jpg';
import track from '../assets/images/Track.jpg';
import surf from '../assets/images/Surf.jpg';

const Slideshow = () => {

    return (
        <Carousel className="rounded border border-primary">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={archery}
                    alt="Archery"
                />
                <Carousel.Caption>
                    <h3 className="text-danger fst-italic fw-bold"><i className="fa-solid fa-bullseye"></i> Archery</h3>
                    <p className="text-danger">Competitors use a bow and arrow to hit the intended target with red equaling 10 points.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bike}
                    alt="Bike"
                />
                <Carousel.Caption>
                    <h3 className="text-dark"><i className="fa-solid fa-person-biking"></i> Cycling BMX Freestyle</h3>
                    <p className="text-dark">Bicycle motocross stunt riding on BMX bikes that can be held on streets, at parks, trails, and flatland.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={diving}
                    alt="Diving"
                />
                <Carousel.Caption>
                    <h3 className="text-dark"><i className="iconfont-diving-goggle"></i> Diving</h3>
                    <p className="text-dark">This activity involves jumping off a board head-first into a pool a water.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={fencing}
                    alt="Fencing"
                />
                <Carousel.Caption>
                    <h3 className="text-light"><i className="fa-solid fa-table"></i> Fencing</h3>
                    <p className="text-light">A combat sport with 2 athletes who use swords as weapons to attack one another for points.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={hockey}
                    alt="Hockey"
                />
                <Carousel.Caption>
                    <h3 className="text-primary"><i className="fa-solid fa-hockey-puck"></i> Hockey</h3>
                    <p className="text-primary">A game of 11 players with sticks on ice who's intentions are to knock a put into the other team's net to score points while skating.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={lacrosse}
                    alt="Lacrosse"
                />
                <Carousel.Caption>
                    <h3 className="text-light"><i className="fa-solid fa-hockey-puck"></i> Lacrosse</h3>
                    <p className="text-light">A game of 11 players with sticks in a field who's intentions are to knock a put into the other team's net to score points.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={rugby}
                    alt="Rugby"
                />
                <Carousel.Caption>
                    <h3 className="text-light"><i className="fa-solid fa-futbol"></i> Rugby</h3>
                    <p className="text-light">An activity that consists of players without shoulder pads or helmets in intentions to get past the opponents goal line to score a point.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-50"
                    src={shooting}
                    alt="Shooting"
                />
                <Carousel.Caption>
                    <h3 className="text-light"><i className="fa-solid fa-crosshairs"></i> Shooting</h3>
                    <p className="text-light">The use of a firearm to aim at a non-moving or moving target with a bullet.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={skateboard}
                    alt="Skateboard"
                />
                <Carousel.Caption>
                    <h3 className="text-light"><i className="fa-solid fa-person-snowboarding"></i> Skateboarding</h3>
                    <p className="text-light">A sport that consists of performing tricks with footwork, airbourne and riding on a skateboard.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={skeleton}
                    alt="Skeleton"
                />
                <Carousel.Caption>
                    <h3 className="text-primary"><i className="fa-solid fa-snowflake"></i> Skeleton</h3>
                    <p className="text-primary">The world's first sliding sport, requires to plunge head-first down an ice track on a tiny sled.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={dirtbike}
                    alt="Dirtbike"
                />
                <Carousel.Caption>
                    <h3 className="text-primary"><i className="fa-regular fa-person-biking"></i> Dirtbike</h3>
                    <p className="text-light fw-bold">This sport consists of riding a dirtbike through mud and over hills with helmet gear.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={snowboard}
                    alt="Snowboard"
                />
                <Carousel.Caption>
                    <h3 className="text-light"><i className="fa-solid fa-snowflake"></i> Snowboard</h3>
                    <p className="text-light">A winter activity where an individual rides a board through the snow.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={skii}
                    alt="Skiing"
                />
                <Carousel.Caption>
                    <h3 className="text-primary"><i className="fa-solid fa-person-skiing"></i>Skii</h3>
                    <p className="text-primary">An activity of jumping at great distances with pikes and two seperate sleds through the snow.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={swim}
                    alt="Swim"
                />
                <Carousel.Caption>
                    <h3 className="text-light"><i className="fa-solid fa-person-swimming"></i>Swim</h3>
                    <p className="text-light">An activity that consists of competitors swimming to one end of the pool and back better known as a lap. First one to complete the lap wins.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={track}
                    alt="Track"
                />
                <Carousel.Caption>
                    <h3 className="text-light"><i className="fa-solid fa-person-running"></i>Track</h3>
                    <p className="text-light">An activity of competitors running or jumping hurdles first one make it across the finish line wins.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={surf}
                    alt="Surf"
                />
                <Carousel.Caption>
                    <h3 className="text-light"><i className="fa-solid fa-water"></i>Surf</h3>
                    <p className="text-light">An activity of individuals riding tidal waves of water on a board.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slideshow;