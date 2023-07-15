import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useState, useEffect} from 'react';

export default function QuoteModal () {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    

    //function handleClick() {
    const fetchPosts = async () => {
        var myHeaders = new Headers();
        myHeaders.append("X-Api-Key", "fmjA8krpg2TL/eA8sr0MEg==VKdxMrE1iNhDLik9");
    
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        const response = await fetch("https://api.api-ninjas.com/v1/quotes", requestOptions);
        const data = await response.json();
        setQuote(data[0]);
        console.log(data[0]);
        console.log(quote);
    };

    useEffect(() => {
        const fetchData = async () => {
            var myHeaders = new Headers();
            myHeaders.append("X-Api-Key", "fmjA8krpg2TL/eA8sr0MEg==VKdxMrE1iNhDLik9");
        
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            const response = await fetch("https://api.api-ninjas.com/v1/quotes", requestOptions);
            const data = await response.json();
            setQuote(data);
        };
        fetchData();
    }, [setQuote, quote]);

    function handleClick() {
        fetchPosts();
    }
    //}


    
    return(
        <div id="quote-box">
            <Card className='text-center'>
                <Card.Header>Quote Generator</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote">
                        <p id="text">Quote Here</p>
                        <footer className="blockquote-footer" id="author">
                            Author here
                        </footer>
                    </blockquote>
                </Card.Body>
                <Button onClick={handleClick}>New Quote</Button>
            </Card>
            
        </div>
    );

}
