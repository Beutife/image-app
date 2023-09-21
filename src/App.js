import { useState, useEffect } from 'react';
import './App.css';
import { Container , Row , Col } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from './component/Login';
import { UserAuthContextProvider } from './context/UserAuthContext';
import { auth } from "./FireBase"
import { signInWithEmailAndPassword , signOut, onAuthStateChanged } from "firebase/auth";
import image1 from './Asset/image1.jpg'
import image2 from './Asset/image2.png'
import image3 from './Asset/images3.png'
import image4 from './Asset/images4.jpg'
import image5 from './Asset/images5.jpg'
import image6 from './Asset/images6.jpg'
import image7 from './Asset/image7.png'
import image8 from './Asset/image8.jpg'
import image9  from './Asset/image9.png'
import image10 from './Asset/images10.png'
import Landing from './component/Landing';
import Drag from './component/OnDrag';
import HomePage from './component/HomePage';



const Images = [
  
        {
          "id" : 1 , 
          "path" : image1,
          "tag" : "block1"
        },
        {
          id : 2, 
          path : image2,
          tag : "blockdef"
        },
        {
          id : 3, 
          path : image3,
          tag : "block3"
        },
        {
          id : 4, 
          path : image4,
          tag : "block4"
        },
        {
          id : 5, 
          path : image5,
          tag : "block5"
        },
        {
          id : 6, 
          path : image6,
          tag : "block6"
        },
        {
          id : 7, 
          path : image7,
          tag : "block7"
        },
        {
          id : 8, 
          path : image8,
          tag :" block8"
        },
        {
          id : 9, 
          path : image9,
          tag : "block9"
        },
        {
          id : 10, 
          path : image10,
          tag : "block10"
        }
]


function App() {
  
  let navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);
  const userSignOut = ()=>{
    signOut(auth).then(()=>{
      console.log('Signed Out!')
      navigate("/")
    }).catch((error) => {
      console.log(error)
    })
  }
    useEffect(()=>{
      const checkSignIn = onAuthStateChanged(auth, (user)=>{
        if (user) {
          setAuthUser(user) 
        }else {
          setAuthUser(null)
        }
      })
    },[])
  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/landing" element={<Landing userSignOut={userSignOut}  authUser={authUser} Landing={Landing} Drag={Drag} Images={Images} />} /> 
              <Route path="/" element={<Login userSignOut={userSignOut}  authUser={authUser} />} />
               <Route path="/home" element={<HomePage userSignOut={userSignOut} authUser={authUser} Drag={Drag} Images={Images} />} /> 
              <Route path="/drag" element={<Drag Images={Images} />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;


//   
