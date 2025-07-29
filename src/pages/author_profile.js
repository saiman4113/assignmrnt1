import { Container, Pagination } from "react-bootstrap";
import AdvancedExample from "../components/pagination";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';



const Profile = () => {

    const goTO = useNavigate();
    return ( 
   
      
        <Container className="mt-5">
          <i className="bi bi-person-circle" style={{ fontSize: '10rem' }}></i>
          <h1>Author Profile</h1>
          <p><b>Name: </b>MD. Saiman Ullah </p>
          <p><b>Account Number: </b>1234</p>
          <p><b>Email: </b>saiman@gmail.com</p>
          <p><b>Phone: </b>012345678989</p>
          <button onClick={()=>goTO('/')}style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            fontSize: '20px'
            }}>back</button>

    </Container>
      
    
        
     );
}
 
export default Profile;