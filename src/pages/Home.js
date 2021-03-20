import React, { useState } from 'react';
import { Flex, Text, CircularProgress } from '@chakra-ui/react';
import '../styles/pages/home.css';

export function Home() {
  
  	const [number, setNumber] = useState(0); 

    setTimeout(() => {
          setNumber(number + 1);

          if(number === 100) {
          	window.location.reload()
          }
    }, 100);

	return(                 
		<div>
		    <Text display="flex" justifyContent="center" fontSize="4xl" marginTop="100px" color="#ab4ccf">Circular progress made in  <strong className="strongChakra">Chakra UI</strong>  and  <strong className="strongJavascript">Javascript</strong></Text>
		    <CircularProgress display="flex" justifyContent="center" marginTop="50px" value={number} size="400px" color="#ab4ccf"/>	
		</div>
	)
}

export default Home