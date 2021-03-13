import React from 'react'
import './SearchPage.css'
import { useStateValue } from './StateProvider'
import Response from './Response.js'
import useGoogleSearch from './useGoogleSearch';
import { Link } from 'react-router-dom'
import Search from './components/Search'
import SearchIcon from '@material-ui/icons/Search'
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
    const [{ term = 'tesla' }, dispatch] = useStateValue();

    const { data } = useGoogleSearch(term)
 
    console.log(data)
    return (
        <div className="SearchPage">
            <div className="Search_header">
                <Link to="/">
                    <img
                    className="search_logo"
                     src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" alt=""/>
                </Link>
 
                <div className="Search_headerbody">
                    <Search hideButtons />
                    <div className="search-options">
                        <div className="search_optionLeft">
                            <div className="search_option">
                                <SearchIcon/>
                                <Link to="/all">All</Link>
                            </div>
                            <div className="search_option">
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="search_option">
                                <ImageIcon/>
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="search_option">
                                <LocalOfferIcon/>
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="search_option">
                                <RoomIcon/>
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="search_option">
                                <MoreVertIcon/>
                                <Link to="/more">More</Link>
                            </div>
                        </div>
                        <div className="search_optionRight">
                            <div className="search_option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="search_option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {term && (
                <div className="search_results">
                    <p className="search_resultCount">
                        About { data?.searchInformation.formattedTotalResults } results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>
                    {data?.items.map(item =>(
                        <div className="search_result">
                            <a href={item.link}>
                            {item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0].src && (
                                 <img className="searchPage__resultImage" src={
                                    item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src
                                     }
                                alt=""
                                />
                            )}
                            {item.displayLink} ▾
                            </a>
                            <a 
                            className="search_title"
                            href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className="search_Snippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}    
        </div>
    )
}

export default SearchPage
