import * as React from "react";
import { Button, ButtonProps,ButtonGroup  } from "@chakra-ui/react";
import { useAccount, useConnect } from "wagmi";
import toast from "react-hot-toast";

interface AuthButtonProps extends ButtonProps {}

const AuthButton: React.FunctionComponent<AuthButtonProps> = (props) => {
  const [connectQuery, connect] = useConnect();
  const [accountQuery] = useAccount();

  React.useEffect(() => {
    if (connectQuery.error?.name === "ConnectorNotFoundError") {
      toast.error("MetaMask extension required to sign in");
    }
  }, [connectQuery.error]);

  // If not authenticated, require sign-in
  if (!accountQuery.data?.address) {
    return (
      <Button  
      size='lg' 
      colorScheme="cyan"
      bgGradient='linear-gradient(to-l,#a200d6 ,#ff6fdf )'
      p='25px'
            fontSize='2xl'
        {...props}
        onClick={() => {
          connect(connectQuery.data.connectors[0]);
        }}
      >
        Connect Wallet
      </Button>
    );
  }

  // If authenticated, show button as usual
  return <Button size='lg' p='25px'
    
  bgGradient='linear-gradient(to-l,#a200d6 ,#ff6fdf )'  
  fontSize='2xl' {...props}>{props.children}</Button>;
};

export default AuthButton;