import React from 'react';
import { Card } from 'react-bootstrap'
import InfiniteCarousel from 'react-leaf-carousel';

var breakpoint = [
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        },
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
        },
    },
]

const items = [
    {
        name: "David Champion",
        pp_src: require("../../assets/img/peoples/david-campion.jpg").default,
        job_position: "CEO of iCloud",
        comments: "System is exccelent. It has made my system user experience to become one of the easiest! "
    },
    {
        name: "David Frank van Hord",
        pp_src: require("../../assets/img/peoples/vincent-joignie.jpg").default,
        job_position: "CEO of Marks.Co",
        comments: "I just wanted to share a quick note and let you know that you guts do a really good job."
    },
    {
        name: "Lucas Bond",
        pp_src: require("../../assets/img/peoples/jerome-boudot.jpg").default,
        job_position: "BOD of skyscanner",
        comments: "Now it's almost like having a designer right now . I just choose the page , make the change . "
    },
    {
        name: "David Champion",
        pp_src: require("../../assets/img/peoples/david-campion.jpg").default,
        job_position: "CEO of iCloud",
        comments: "System is exccelent. It has made my system user experience to become one of the easiest! "
    },
    {
        name: "Romane Regad",
        pp_src: require("../../assets/img/peoples/romane-regad.jpg").default,
        job_position: "CEO of iCloud",
        comments: "System is exccelent. It has made my system user experience to become one of the easiest! "
    },
    {
        name: "Tania ferreira",
        pp_src: require("../../assets/img/peoples/tania-ferreira.jpg").default,
        job_position: "CEO of iCloud",
        comments: "System is exccelent. It has made my system user experience to become one of the easiest! "
    },
];
function Slider() {
    return (
        <div className="container">
            <div className="content-header">
                <div className="icon">
                    <img src={require('../../assets/icons/heart.svg').default}>
                    </img>
                </div>
                <h2>What other people say about our servic.</h2>
            </div>

            <InfiniteCarousel
                breakpoints={breakpoint}
                dots={true}
                prevArrow={null}
                sideSize={.1}
                slidesToScroll={3}
                slidesToShow={3}
                scrollOnDevice={true}
                animationDuration={900}
                scrollOnDevice={true}
            >
                {items.map((item) => (
                    <div className="slider-items">
                        <Card>
                            <div className="slider-title">
                                <img src={item.pp_src}></img>
                                <div className="slider-desc">
                                    <p>{item.name}</p>
                                    <p id="job-pos">{item.job_position}</p>
                                </div>
                            </div>
                            <div className="slider-comment">
                                <p>
                                    "{item.comments}"
                       </p>
                            </div>
                        </Card>
                    </div>
                ))}
            </InfiniteCarousel>
        </div>
    )
}

export default Slider