import { VStack, Box, Image, Input, Button } from "@chakra-ui/react";
import { useState } from  "react";

const AuthForm = () => {

    const [isLogin, setIsLogin] = useState(true)
  return (
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
            <Image src='/logo.png' h={24} cursor={"pointer"} alt='Instagram'/> 
            <Input
                placeholder="Email"
                fontSize={14}
                type="email"  
                    />
            <Input
                placeholder="Password"
                fontSize={14}
                type="password"
                />

            {/* If not logging in then user is signing up */}
            {!isLogin ? 
                 <Input
                 placeholder="Comfirm Password"
                 fontSize={14}
                 type="password"
                 />
             : null}

            {/* Login button / Sign up button */}
            <Button w={'Full'} colorScheme={"blue"} size={"sm"} fontSize={14}>
                {isLogin ? "Login" : "Sign up"}
            </Button>
        </VStack>

    </Box>
  );
};

export default AuthForm