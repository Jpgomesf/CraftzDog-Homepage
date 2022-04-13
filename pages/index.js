import {Container, Box, Heading } from '@chakra-ui/react';
const Page = () => {
    return(
        <Container>
            <Box borderRadius="lg" bg="red" padding={3} mb={6} textAlign="center">
                Hello, I&apos;m a full-stack developer based in Brazil!
            </Box>
            <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Ferreira João 
                </Heading>
             <p>Digital Craftzman ( Artist / Developer / Designer )</p>   
            </Box>
            </Box>
        </Container>
    )
}

export default Page;