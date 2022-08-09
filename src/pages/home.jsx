import React,{useRef, useEffect, useState} from 'react'
import { Box, Flex, Input, Center } from "@chakra-ui/react"
import LoremIpsum from '../components/loremIpsum'
import data from '../data'

export default function Home() {
    const element = useRef(null)
    const [lorem, setLorem] = useState(data)
    

    const makeMoreLorem = () =>{

        setLorem((prev) => [...prev, ...data])
    }
       
    useEffect(() =>{
        let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0
        };
        const handleIntersect = (entries) =>{
            if(entries.some(entry => entry.isIntersecting)){
                makeMoreLorem()

            }
                // entries.forEach((entry) =>{
                //     if(entry.isIntersecting){
                //         console.log('true')
                //         makeMoreLorem()

                //     }else{
                //         console.log('false')
                //     }

                // })

        }
        const observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(element.current);
        return () => observer.unobserve(element.current)


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
       
        
        <Flex as="main" direction="column" align="center">
            <LoremIpsum lorem={lorem}/>
        </Flex>

        <Box 
            ref={element} 
            w="100%" 
            height="1rem"
            bg="red"
            mt="3rem">

        </Box>
        </>
       
    )
}
