import React from 'react';
import {OutlineText} from "./OutlineText";

function PreviewVariant(props) {
  const {shadowColor, backgroundColor, handleClick, index } = props;
const style = {shadowColor, backgroundColor};
return (
    <div className="previewBlock"
         onClick={handleClick}
         key={index}
    >
      <div className="previewBlock__big">
        <div className="points special">
          <OutlineText
            borderSize='1px'
            color={shadowColor}
          >
            20
          </OutlineText>
        </div>
      </div>
      <div className="previewBlock__small" >
        <div className="points"
             style={style}
        >
          <OutlineText
            borderSize='1px'
            color={shadowColor}
            id={index}
          >
            5
          </OutlineText>
        </div>
      </div>
    </div>
  );
}

export default PreviewVariant;
