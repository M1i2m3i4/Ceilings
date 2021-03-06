import './App.css';
import Navbar from "react-bootstrap/Navbar"
import { Col, Container, Row } from 'react-bootstrap'
import Card from "react-bootstrap/Card"
import Carousel from "react-bootstrap/Carousel"

function App() {
  return (
    <div className="App">
          <Navbar bg="dark">
            <Navbar.Brand>CEILINGS BY CEILINGFAN</Navbar.Brand>
          </Navbar>
          <Carousel className="gallery">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://i.redd.it/s60m610wyui41.jpg"
        alt="BLAHAJGANG"
      />
      <Carousel.Caption>
        <h3>JOIN BLAHAJ GANG</h3>
        <p>Shark Shark Sharkity Shark</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/27dbbda7-320b-488b-b8cb-6d993296f095/dcxgwe0-d0895501-ac4a-4c25-b279-70fb09259b83.png/v1/fill/w_1054,h_758,strp/pink_kirby_sleeping_by_transparentjiggly64_dcxgwe0-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04NDYiLCJwYXRoIjoiXC9mXC8yN2RiYmRhNy0zMjBiLTQ4OGItYjhjYi02ZDk5MzI5NmYwOTVcL2RjeGd3ZTAtZDA4OTU1MDEtYWM0YS00YzI1LWIyNzktNzBmYjA5MjU5YjgzLnBuZyIsIndpZHRoIjoiPD0xMTc3In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.in9qwI2MB1YnvHcHYfCDrefzIEeUL8ZM6icCQJH4Bz8"
        alt="*insert green greens here*"
      />

      <Carousel.Caption>
        <h3>You are awesome here is a kirby for you</h3>
        <p>POYO</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.homestratosphere.com/wp-content/uploads/2020/01/dropped-ceiling-jan062020-min.jpg"
        alt="Actual Ceiling for you Ceiling Fans"
      />

      <Carousel.Caption>
        <h3>C E I L I N G</h3>
        <p>People who like ceilings are called ceiling fans.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
      <Container>
        <Row>
          <Col xs={12} md={8}>
          <h1>Why Ceilings are Beneficial</h1>
            Ceilings are by far the greatest thing that have ever existed.
          They keep you warm and safe. If I didn't have a roof over my head
          I would be subject to tons of harmful natural weather. Not only me, but all.
          They also conceal pumbing and electrical systems, and if something does haywire,
          the people inside would be unsafe. Electrocutions, Floods, and Crying Galore!
          Lucky for you, ceilings are there to be something nice to look at instead. 

          They are also Customizable! White is traditional, but if you'd prefer pink or vermillion or chartreuse...
          though you might make me jealous. What about the ceiling falling you ask? Impossible! 
          A large natural disaster would do that in a jiffy, but since your ceiling doesn't seem to be going through one I wouldn't worry.
          <h1>BLAHAJGANG INFORMATION AND WHY YOU SHOULD JOIN!</h1>
          Blahaj is the shark we worship in BlahajGang. 
          Watermelons and Sharks is our thing. What more would you want? If that doesn't seal the deal then, 
          There is an insane amount of coordination and that results in beautiful movements such as the Pineapple 
          Party. There are plenty of channels to remind you of things as well. Perfect for staying in the Loop.
          There are tons of people who share the same interests as you. There are more social opportunities to be seized. 
           Lastly, The memes are top tier here.  They fit to the humor style of all those part of it. 
           Feel misunderstood because of your humor? Join Blahaj! Just don't forget to not be nice to Ryan.
           <h1>
             Copy and Paste These For a Fun Suprise and Finger Exercise!
             https://www.youtube.com/watch?v=dQw4w9WgXcQ
           https://www.youtube.com/watch?v=g3jCAyPai2
           </h1>

          </Col>
          <Col xs={12} md={4}>
          <h1>Where to Buy?</h1>
              <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://d2s94cyhu2tzlj.cloudfront.net/assets/photos/2020/home-depot-announces-changes/_articlePhotoFull/df.jpg?mtime=20200401142201" />
            <Card.Body>
              <Card.Title>Home Depot</Card.Title>
              <Card.Text>
                A place I would nickname Ceiling central. Truely the place of my dreams.
                9.8/10
              </Card.Text>
              <Card.Link herf="https://www.homedepot.com/b/Building-Materials-Ceilings/N-5yc1vZc58i?NCNI-5&searchRedirect=ceilings&semanticToken=d00r20r01122000000_2021040306090406073219291328_us-central1-481v%20d00r20r01122000000%20%3E%20%20rid%3A%7B246b2dd56164e25c82ee79e7bd631090%7D%3Arid%20st%3A%7Bceilings%7D%3Ast%20ct%3A%7Bceiling%7D%3Act%20tgr%3A%7BNo%20stage%20info%7D%20nr%3A%7Bceiling%7D%3Anr%20qu%3A%7Bceiling%7D%3Aqu">BUY FROM HD</Card.Link>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://media.bizj.us/view/img/11646425/lowes-store-mk001*1024xx5388-3037-0-411.jpg" />
            <Card.Body>
              <Card.Title>Lowes</Card.Title>
              <Card.Text>
                Can't go wrong with Lowe's, but the ceiling service there is a bit shabby.
                8.5/10
              </Card.Text>
              <Card.Link herf="https://www.lowes.com/c/Ceilings-Building-supplies">BUY FROM LOWES</Card.Link>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
