import React, { useEffect } from "react";

const CreadlyBadge = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//cdn.credly.com/assets/utilities/embed.js";
        script.async = true;

        document.body.appendChild(script);

        return ()=>{
            document.body.removeChild(script);
        }
    },[]);

    return (
    <div
      data-iframe-width="150"
      data-iframe-height="270"
      data-share-badge-id="dde3b2c1-51d5-48af-bf5c-fb235bc0bfe2"
      data-share-badge-host="https://www.credly.com"
    />
  );
    

};
export default CreadlyBadge;