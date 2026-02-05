import { Col, Container, Row } from "react-bootstrap";

export default function BookDetails({book}) {
    const imageIdx = book.title == "Assassin's Apprentice" ? 6 : 0; // hard code title index to show a different cover in about page
    return (<>
        <Container>
            <Row>
                <Col lg="4">
                    <img
                        onError={(event) => {
                        event.target.onerror = null; // Remove the event handler to prevent infinite loop
                        event.target.src =
                        "https://placehold.co/400x600?text=Cover+Not+Available";
                        }}
                        className="img-fluid w-100"
                        src={`https://covers.openlibrary.org/b/id/${book?.covers?.[(imageIdx)]}-L.jpg`}
                        alt="Cover Image"
                    /> 
                    <br /><br />
                </Col>
                <Col lg="8">
                        <h3>{book.title}</h3>
                        <small>Date Published: {book.first_publish_date}</small>
                        <p>{typeof book.description === "string" ? book.description : book.description?.value}</p>
                        <br />

                        <h5>Themes</h5>
                        {book.subjects.join(", ")};
                        <br /><br />

                        <h5>Settings</h5>
                        The Realm of the Elderlings
                        <br /><br />

                        <h5>More Information</h5>
                        <span><a href="https://en.wikipedia.org/wiki/Farseer_trilogy" target="_blank">Wikipedia (Farseer trilogy)</a><br /></span>
                        <span><a href="https://www.goodreads.com/book/show/77197.Assassin_s_Apprentice" target="_blank">Goodreads</a><br /></span>
                
                </Col>
            </Row>
        </Container>

    </>)
}