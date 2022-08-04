import React from 'react'

import { Flex, Box } from '@chakra-ui/layout'

export default function LoremIpsum({lorem}) {
    return (
        <>
            {lorem.map((item,index) =>{
                const {title, text} = item
                return (
                    <Flex 
                        key={index}
                        as="article" 
                        direction="column" 
                        align="start"
                        maxW="800px"
                        mt="1rem"
                        bg="#395B64" 
                        color="white"
                        p="1rem"
                        rounded="5px"
                        position="relative">
                        <Box 
                            display="grid"
                            placeItems="center"
                            position= "absolute"
                            w="2rem"
                            h="2rem"
                            bg="#007FFF"
                            rounded="full"
                            left="-10px"
                            top="-10px"
                            >
                                {index +1}
                        </Box>

                        <Box as="h2" fontWeight="700" fontSize="1.1rem">{title}</Box>
                        <Box>
                            {text}
                        </Box>

                        
                    </Flex>
                )
            })}
        </>
        
    )
}
