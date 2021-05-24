// Dependencys //
import React, { useState } from "react";
import ImgRepo from "../../img";
import Dropdown from "./AccDropdown";

// Component //
function PageHeader() {

    const [isDropped, setDropped] = useState(false);
    function toggleDropped() {
        setDropped(!isDropped);
    }

    return(
        <div id='PageHeader'>
            <div id='ProfileBox'>
                <ImgRepo.PROFILEPLACEHOLDER2 id='ProfilePng' onClick={toggleDropped}/>
                <ImgRepo.DROPDOWN id='DropdownPng' active={isDropped.toString()}/>

                {isDropped ? <Dropdown active={true}/> : <Dropdown active={false}/> }
            </div>
        </div>
    );
}

export default PageHeader;