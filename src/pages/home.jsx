import React,{useRef, useEffect, useState} from 'react'
import { Box, Flex, Input, Center } from "@chakra-ui/react"
import LoremIpsum from '../components/loremIpsum'
import data from '../data'

export default function Home() {
    const element = useRef(null)
    const [lorem, setLorem] = useState(data)

    const makeMoreLorem = () =>{
        setLorem([...lorem,...data])
    }
       
    useEffect(() =>{
        const interval = setInterval(() =>{
            makeMoreLorem()
        },1000)
        let observer;

        let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.4
        };
        const handleIntersect = (entries, observer) =>{
                entries.forEach((entry) =>{
                    if(entry.isIntersecting){
                        console.log('true')
                    }else{
                        console.log('false')
                    }

                })

        }
        observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(element.current);


    },[])

    

    


    return (
        <>
        <Box as="h1" 
            textAlign="center" 
            fontSize="2.3rem" 
            textTransform="capitalize"
            color="#007FFF"
            py="1.5rem"
            mt="0rem"
            > Buscar
        </Box>
        <Center>
             <Input  
                w="100%" 
                p="5px" 
                maxW="800px" 
                mb="2rem"
                color="white"
                fontSize="1.1rem">
            </Input>

        </Center>
       
        
        <Flex ref={element} as="main" direction="column" align="center">
            <LoremIpsum lorem={lorem}/>
            
            
            

            


        </Flex>
        </>
       
    )
}
