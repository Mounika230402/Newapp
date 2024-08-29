import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import "./index.css";

function CardComponent(prop) {
    const{country,flag,population,capital,id,region}=prop
    const navigate=useNavigate()
    const Handler=(id)=>{
      navigate(`/${id}`)
    }
  return (
    <Card className="card">
      <Card.Img variant="top" src={flag} className="card-img-top" />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{country}</Card.Title>
        <Card.Text>
          Captial: {capital}
        </Card.Text>
        <Card.Text>
          Region: {region}
        </Card.Text>
        <Card.Text className="card-text">Population :{population}</Card.Text>
        <Button variant="primary" onClick={()=>{Handler(id)}} className='card-button' >Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
