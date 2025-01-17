import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as d3 from 'd3';
import '../styles/HomePage.css';

function HomePage() {
    const [allQuotes, setAllQuotes] = useState([]);
    const [quote, setQuote] = useState(null);

    useEffect(() => { 
        d3.csv('/Quotes Data/quotes.csv').then(data => { 
            setAllQuotes(data);
            const randomQuote = data[Math.floor(Math.random() * (data.length-1))];
            setQuote(randomQuote);

            // // const randomQuote = data[Math.floor(Math.random() * data.length)];
            // // setQuote(randomQuote);

            // // Get current date
            // const today = new Date();
            // const day = today.getDate();
            // // Months are 0-based
            // const month = today.getMonth() + 1;
            // const year = today.getFullYear();

            // // Generate a fixed index for today
            // const index = (day + month + year) % data.length; // Cycles through quotes
            // setQuote(data[index]); // Select quote for today
        }).catch(error => console.error('Error loading CSV file:', error));
    }, []); 
        
    const fetchRandomQuote = () => { 
        if (allQuotes.length > 0) {
            const randomQuote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
            setQuote(randomQuote);
        } 
    };

    const copyQuote = (quote) => {
        const text = `"${quote.quote}"\n\n- ${quote.author}`;
        navigator.clipboard.writeText(text).then(() => {
            alert('Quote copied to clipboard!');
        }).catch(err => console.error('Failed to copy text: ', err));
    };

    return (
        <div className="container-fluid bg-dark text-white cover-container">
            <div className="d-flex p-3 mx-auto flex-column">
                <h1>
                    {['Quotes', 'that', 'Inspire'].map((word, index) => (
                        <span key={index} className="hover-effect">{word} </span>
                    ))}
                </h1>
                <p className="lead">
                    {['Discover', 'the', 'wisdom', 'of', 'the', 'ages,', 'one', 'quote', 'at', 'a', 'time.', 'At', 'Blind', 'Wings,', 'we', 'curate', 'the', 'most', 'inspiring,', 'thought-provoking,', 'and', 'motivational', 'quotes', 'to', 'uplift', 'your', 'spirit', 'and', 'ignite', 'your', 'passion.', 'Dive', 'into', 'a', 'collection', 'of', 'timeless', 'words', 'that', 'resonate,', 'empower,', 'and', 'guide', 'you', 'on', 'your', 'journey.'].map((word, index) => (
                        <span key={index} className="hover-effect">{word} </span>
                    ))}
                </p>

                {quote && (
                    <blockquote className="blockquote p-3 rounded shadow-lg">
                        <p className="mb-0">"{quote.quote}"</p>
                        <div className="blockquote-div mt-2">
                            <cite title="Source Title">- {quote.author}</cite>
                        </div>

                        {/* Move Copy Button to Bottom-Right */}
                        <div className="d-flex justify-content-end mt-3">
                            <button 
                                className="btn btn-outline-danger btn-sm copy-button"
                                onClick={() => copyQuote(quote)}
                            >
                                Copy
                            </button>
                        </div>
                    </blockquote>
                )}

                <p className="lead">
                    <button className="btn btn-lg btn-light fw-bold border-white bg-white m-2 refresh-button" onClick={fetchRandomQuote}>
                        Refresh Quote
                    </button>
                    <Link to="/quotes" className="btn btn-lg btn-light fw-bold border-white bg-white m-2 explore-button">
                        Explore More
                    </Link>           
                </p>
            </div>
        </div>
    );
}

export default HomePage;
