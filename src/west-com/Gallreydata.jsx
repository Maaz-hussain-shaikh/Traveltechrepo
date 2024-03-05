import Gallery from './Gallery';
import './Css/App.css';
import {galleryImages} from "./Data"

function Gallreydata() {
    return (
        <div className="App">
           <Gallery
                galleryImages={galleryImages}
            />
        </div>
    );
}

export default Gallreydata;