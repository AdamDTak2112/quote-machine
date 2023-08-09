import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useState, useEffect} from 'react';

export default function QuoteModal () {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    const getQuote = () => {
        var myHeaders = new Headers();
        myHeaders.append("X-Api-Key", "fmjA8krpg2TL/eA8sr0MEg==VKdxMrE1iNhDLik9");
    
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch("https://api.api-ninjas.com/v1/quotes", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setQuote(data[0]);
                console.log("Data received: " + quote.quote);
            })
    }

    useEffect(() => {
        const fetchData = () => {
            var myHeaders = new Headers();
            myHeaders.append("X-Api-Key", "fmjA8krpg2TL/eA8sr0MEg==VKdxMrE1iNhDLik9");
        
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            fetch("https://api.api-ninjas.com/v1/quotes", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setQuote(data[0]);
                console.log("Data received: " + quote.quote);
            });
        };
        fetchData();
    }, []);

    function handleClick() {
        getQuote();
    }
    //}


    
    return(
        <div id="quote-box">
            <Card className='text-center'>
                <Card.Header>Quote Generator</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote">
                        <p id="text">{quote.quote}</p>
                        <footer className="blockquote-footer" id="author">
                            {quote.author}
                        </footer>
                    </blockquote>
                </Card.Body>
                <Button onClick={handleClick} id="new-quote">New Quote</Button>
            </Card>
            
        </div>
    );

}
