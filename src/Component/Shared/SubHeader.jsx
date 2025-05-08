import React from 'react';
import { GoDotFill } from "react-icons/go";

const SubHeader = ({name,color}) => {
    return (
        <div>
            <div className="flex items-center gap-2">
                <GoDotFill className={`text-xl font-bold ${color}`}></GoDotFill>
                <h1 className={`text-xl font-bold ${color}`}>{name}</h1>
            </div>
        </div>  
    );
};

export default SubHeader;