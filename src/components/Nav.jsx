import React, { useContext } from "react";
import { Navbar, Button, Link, Text, Card, Radio, Badge } from "@nextui-org/react";
import {BsCart2} from "react-icons/bs"
import { StoreShop } from "./Store";



export default function App() {

    const {state} = useContext(StoreShop)
    const {cart} = state;
  const [variant, setVariant] = React.useState("static");

  const variants = ["static", "floating", "sticky"];
  
  return (
    <>
      <Navbar isBordered variant={variant}>
        <Navbar.Brand>
          
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
          <Badge
          color="error"
          content={cart.length}
          
          shape="circle"
        >
          <BsCart2 size={25} />
        </Badge>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      <>
       
      </>      
    </>
  )
}
