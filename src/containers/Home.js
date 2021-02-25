import React from 'react'
import Slider from '../components/Carousel'
import Peoples from '../components/Peoples'
import Partners from '../components/Partners'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'


export class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="content">
          <img src={require('../assets/img/contents/content-001.png').default}></img>
          <div className="text">
            <h3>
              we can giv you our best user experience to your system
          </h3>
            <p>
              Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          </div>
        </div>

        <div className="content">
          <div className="text">
            <h3>
              Easy access. Whenener, wherever you want
          </h3>
            <p>
              Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          </div>
          <img src={require('../assets/img/contents/content-002.png').default}></img>
        </div>

        <Slider />
        <Peoples />
        <Partners />
        <ContactForm />

      </>
    );
  }
}

export default Home