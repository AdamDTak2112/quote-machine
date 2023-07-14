import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function QuoteModal () {

    
    return(
        <div id="quote-box">
            <Card className='text-center'>
                <Card.Header>Quote Generator</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote">
                        <p id="text">QUOTE GOES HERE</p>
                        <footer className="blockquote-footer" id="author">
                            Author here
                        </footer>
                    </blockquote>
                </Card.Body>
                <Button>New Quote</Button>
            </Card>
            
        </div>
    );

}
