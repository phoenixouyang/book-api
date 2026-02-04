import { Container } from "react-bootstrap";
import MainNav from "./MainNav";

export default function Layout() {
    return (<>
        <MainNav />
        <br />
        <Container>
            {props.children}
        </Container>
        <br />
    </>)
}