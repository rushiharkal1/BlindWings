import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import '../styles/QuotePage.css';

function QuotesPage() {
    const [allQuotes, setAllQuotes] = useState([]);
    const [displayedQuotes, setDisplayedQuotes] = useState([]);
    const [expandedIndexes, setExpandedIndexes] = useState([]);
    const [quoteCount, setQuoteCount] = useState(10);
    const [hasMore, setHasMore] = useState(true);
    const [showOverlay, setShowOverlay] = useState(false);
    const [currentQuote, setCurrentQuote] = useState(null);

    useEffect(() => {
        d3.csv('/Quotes Data/quotes.csv').then(data => {
            const shuffledQuotes = data.sort(() => 0.5 - Math.random());
            setAllQuotes(shuffledQuotes);
            setDisplayedQuotes(shuffledQuotes.slice(0, 10));
        }).catch(error => console.error('Error loading CSV file:', error));
    }, []);

    const toggleQuote = (index) => {
        if (expandedIndexes.includes(index)) {
            setExpandedIndexes(expandedIndexes.filter(i => i !== index));
        } else {
            setExpandedIndexes([...expandedIndexes, index]);
        }
    };

    const fetchMoreQuotes = () => {
        if (displayedQuotes.length >= allQuotes.length) {
            setHasMore(false);
            return;
        }
        const nextCount = quoteCount + 10;
        setDisplayedQuotes(allQuotes.slice(0, nextCount));
        setQuoteCount(nextCount);
    };

    const handleQuoteClick = (quote) => {
        setCurrentQuote(quote);
        setShowOverlay(true);
    };

    const closeOverlay = () => {
        setShowOverlay(false);
        setCurrentQuote(null);
    };

    const copyQuote = (quote) => {
        const text = `Quote: "${quote.quote}"\n\nAuthor: ${quote.author}\n\nThis quote explores themes and ideas related to ${quote.category}.`;
        navigator.clipboard.writeText(text).then(() => {
            alert('Quote copied to clipboard!');
        }).catch(err => console.error('Failed to copy text: ', err));
    };

    // Dictionary with authors and their corresponding image paths 
    const authorImages = { 
        'William Shakespeare': 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Shakespeare.jpg',
        'George Orwell': 'https://upload.wikimedia.org/wikipedia/commons/7/7e/George_Orwell_press_photo.jpg',
        'Ralph Waldo Emerson': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Ralph_Waldo_Emerson_ca1857_retouched.jpg',
        'Mark Twain': 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Mark_Twain_by_Abdullah_Fr%C3%A8res%2C_1867.jpg',
        'Jane Austen': 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Jane_Austen.jpg',
        'Charles Dickens': 'https://upload.wikimedia.org/wikipedia/commons/8/82/Charles_Dickens_E_Edwards_1864.jpg',
        'Homer': 'https://upload.wikimedia.org/wikipedia/commons/5/57/Homeros_MFA_Munich_51.jpg',
        'Herman Melville': 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Herman_Melville_by_Joseph_O_Eaton.jpg',
        'Leo Tolstoy': 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Ilya_Efimovich_Repin_%281844-1930%29_-_Portrait_of_Leo_Tolstoy_%281887%29.jpg',
        'Mary Shelley': 'https://upload.wikimedia.org/wikipedia/commons/6/65/RothwellMaryShelley.jpg',
        'Edgar Allan Poe': 'https://upload.wikimedia.org/wikipedia/commons/9/94/Edgar_A._Poe_-_NARA_-_528345_%28cropped%29.jpg',
        'Emily Dickinson': 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Emily_Dickinson_daguerreotype_%28Restored%29.jpg',
        'Virginia Woolf': 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Virginia_Woolf_1927.jpg',
        'Fyodor Dostoevsky': 'https://upload.wikimedia.org/wikipedia/commons/5/58/Dostoevskij_1872.jpg',
        'Oscar Wilde': 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Oscar_Wilde_portrait_by_Napoleon_Sarony_-_albumen.jpg',
        'Nathaniel Hawthorne': 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Nathaniel_Hawthorne_-_NARA_-_530280cr.jpg',
        'D.H. Lawrence': 'https://upload.wikimedia.org/wikipedia/commons/3/3d/D.H.Lawrence_1912.jpg',
        'Emily Brontë': 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Emily_Bront%C3%AB_by_Patrick_Branwell_Bront%C3%AB_restored.jpg',
        'Charlotte Brontë': 'https://upload.wikimedia.org/wikipedia/commons/4/46/Charlotte_Bront%C3%AB.jpg',
        'Anne Brontë': 'https://upload.wikimedia.org/wikipedia/commons/6/67/Anne_Bront%C3%AB_by_Patrick_Branwell_Bront%C3%AB_restored.jpg',
        'Jack London': 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Jack_London_young.jpg',
        'Beatrix Potter': 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Beatrix_Potter_by_King.jpg',
        'Kenneth Grahame': 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Portrait_of_Kenneth_Grahame.jpg',
        'L. Frank Baum': 'https://upload.wikimedia.org/wikipedia/commons/b/bd/L._Frank_Baum_1905.jpg',
        'Rudyard Kipling': 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Rudyard_Kipling%2C_by_Elliott_%26_Fry_%28cropped%29.jpg',
        'Edgar Rice Burroughs': 'https://upload.wikimedia.org/wikipedia/commons/f/ff/BurroughsEdgarRice.jpg',
        'Aesop': 'https://upload.wikimedia.org/wikipedia/commons/8/81/Aesop_and_fox--red-figure_cup--Greece--c_450_BC.jpg',
        'Walt Whitman': 'https://upload.wikimedia.org/wikipedia/commons/5/54/Whitman_at_about_fifty.jpg',
        'J. R. R. Tolkien': 'https://upload.wikimedia.org/wikipedia/commons/d/d4/J._R._R._Tolkien%2C_ca._1925.jpg',
        'Franklin D. Roosevelt': 'https://upload.wikimedia.org/wikipedia/commons/3/32/Vincenzo_Laviosa_-_Franklin_D._Roosevelt_-_Google_Art_Project.jpg',
        'Friedrich Nietzsche': 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Nietzsche187a.jpg',
        'George Eliot': 'https://upload.wikimedia.org/wikipedia/commons/4/48/George_Eliot%2C_por_Fran%C3%A7ois_D%27Albert_Durade.jpg',
        'Albert Einstein': 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg',
        'Robert Frost': 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Robert_Frost_NYWTS_4.jpg',
        'Franz Kafka': 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Kafka1906_cropped.jpg',

        // Add more authors and their image paths here 
       
    };

    const getImageForAuthor = (author) => { 
        for (const key in authorImages) { 
            if (author.includes(key)) { 
                return authorImages[key]; 
            } 
        } 
        return 'path/to/default/image.jpg'; 
        // Path to default image if author not found 
    };


    return (
        <>
            <section id="gallery">
                <InfiniteScroll
                    dataLength={displayedQuotes.length}
                    next={fetchMoreQuotes}
                    hasMore={hasMore}
                    loader={<h4 className='text-center'>Loading...</h4>}
                >
                    <div className="container">
                        <div className="row">
                            {displayedQuotes.map((quote, index) => (
                                <div className="col-lg-4 mb-4" key={index}>
                                    <div className="card" id="custom-card">
                                        <div className="position-relative">
                                            <LazyLoadImage
                                                src={getImageForAuthor(quote.author)}
                                                alt={`Image for ${quote.quote}`}
                                                effect="blur"
                                                className="card-img-top"
                                            />
                                            <button className="btn btn-dark position-absolute top-50 start-50 translate-middle" onClick={() => handleQuoteClick(quote)}>View</button>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">"{quote.quote.substring(0, 50)}..."</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary">- {quote.author.substring(0, 20)}</h6>
                                            <p className="card-text">{expandedIndexes.includes(index) ? `"This quote explores themes and ideas related to ${quote.category}."` : 'Click "Read More" to view the quote'}</p>
                                            
                                            {expandedIndexes.includes(index) && (
                                                <button className="btn btn-outline-success btn-sm mx-2" onClick={() => copyQuote(quote)}>
                                                    Copy
                                                </button>
                                            )}

                                            {/* Read More / Show Less toggle button */}
                                            <button onClick={() => toggleQuote(index)} className="btn btn-outline-success btn-sm">
                                                {expandedIndexes.includes(index) ? 'Show Less' : 'Read More'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </InfiniteScroll>
            </section>
            {showOverlay && currentQuote && (
                <div className="overlay">
                    <div className="overlay-content overflow-auto">
                        <button className="btn btn-success position-absolute top-0 end-0 m-3" onClick={closeOverlay}>X</button>
                        <div className="overlay-img-container">
                        <LazyLoadImage 
                            src={getImageForAuthor(currentQuote.author)}
                            alt={`Image for ${currentQuote.quote}`} 
                            effect="blur" 
                            className="overlay-img img-fluid" 
                        />
                        </div>
                        <div className="overlay-body">
                            <div>
                                <h5 className="card-title">"{currentQuote.quote}"</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">- {currentQuote.author}</h6>
                                <p className="card-text"><em>This quote explores themes and ideas related to {currentQuote.category}.</em></p>
                            </div>
                            
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-outline-success btn-sm mx-2" onClick={() => copyQuote(currentQuote)}>
                                    Copy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default QuotesPage;
