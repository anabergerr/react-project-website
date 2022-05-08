import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Infos = () => {
  return (
    <>
      <Row className="align-items-center">
        <Col md={{ span: 4, offset: 4 }}>
          <h1>console.log('ana')</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ipsa molestias dolores delectus. Minima atque,
            error quas tenetur a itaque, odit magni, eum rem aliquam eius
            recusandae esse vero aut nesciunt.
          </p>
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
          <h1>follow me, please :)</h1>
          <section>
            <a>
              <img src="imgs/linkedin.png" className='icon' />
              <a>
                <img src="imgs/github.png" className='icon' />
              </a>

            </a>
          </section>

        </Col>

      </Row>


    </>
  )
}

export default Infos