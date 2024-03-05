import React from 'react'
import { Link } from 'react-router-dom'

const Adsection = (props) => {
    let link = props.imgsrc;
    let imglink = `url(${link})`
    const imgstyle = {
        backgroundImage: imglink,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };

    return (
        <>
            <div className="idQJkO">
                <Link target="_blank" className="bXBxlH" style={imgstyle} to="/international-trips/bhutan-tour-packages"></Link></div>
        </>
    )
}

export default Adsection
