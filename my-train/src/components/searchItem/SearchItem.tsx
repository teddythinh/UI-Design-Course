import React from 'react'
import './searchItem.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import { Button } from '@mui/material';

const SearchItem: React.FC = () => {
  return (
    <div className='searchItem'>
        <img src="https://www.vn.kayak.com/rimg/himg/ae/ed/e6/leonardo-1086536-Trump-Chicago-Dusk-Riverwalk_O-095345.jpg?width=1366&height=768&crop=true" alt="" className="searchImg" />
        <div className="searchImgDescription">
            <h1 className='searchImgTitle'>Trump International Hotel & Tower</h1>
            {/* <FontAwesomeIcon icon={faLocationDot} /> */}
            <span>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            </span>
            <span className='searchImgLocation'>401 North Wabash Avenue, River North, Chicago, IL 60611, United States of America </span>
            <span className="searchImgtTaxiOpt">Free airport taxi</span>
            <span className="searchImgSubtitle">
            Featuring stunning views from every area of the hotel, this landmark building of stainless steel and tinted glass stands 92-stories above the Loop and North Michigan Avenue along the Chicago River.
            </span>
            <span className="searchImgFeatures">
            56 m² - 1 private bathroom - 2 beds - 4 rooms 
            </span>
            <span className="searchImgCancelOpt">Free cancellation</span>
        </div>
        <div className="searchImgDetails">
            <div className="searchImgRating">
                <span>Excellent</span>
                <button>4.5</button>
            </div>
            <div className="searchImgDetailTexts">
                <span className='searchImgPrice'>$123</span>
                <span className='searchImgTaxOpt'>Including taxes and fees</span>
                <Button variant="contained" className='searchImgCheckBtn'>See availability</Button>
                {/* <button className='searchImgCheckBtn'>See availability</button> */}
            </div>
        </div>
    </div>
  )
}

export default SearchItem