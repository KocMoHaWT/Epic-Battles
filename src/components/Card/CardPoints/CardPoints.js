import React from 'react'
import {OutlineText} from "../../OutlineText";

export const CardPoints = (props) => {

  const styleBackgroundColor = {backgroundColor: props.color}
  return (
    <div className='healthTable'>
      <div className="bigHealth">
        <div className="points">25</div>
        <div className="points">24</div>
        <div className="points">23</div>
        <div className="points">22</div>
        <div className="points">21</div>
        <div className="points special">
          <OutlineText borderSize='1px' color={props.color}>
            20
          </OutlineText>
        </div>
        <div className="points">19</div>
        <div className="points">18</div>
        <div className="points">17</div>
        <div className="points">16</div>
        <div className="points">15</div>
        <div className="points">14</div>
        <div className="points">13</div>
        <div className="points">12</div>
        <div className="points">11</div>
        <div className="points">10</div>
        <div className="points">9</div>
        <div className="points">8</div>
        <div className="points">7</div>
        <div className="points">6</div>
      </div>
      <div className="smallHealth">
        <div className="points"
             style={styleBackgroundColor}>
          <OutlineText borderSize='1px' color={props.shadowColor}>
            5
          </OutlineText>
        </div>
        <div className="points"
             style={styleBackgroundColor}>
          <OutlineText borderSize='1px' color={props.shadowColor}>
            4
          </OutlineText>
        </div>
        <div className="points"
             style={styleBackgroundColor}>
          <OutlineText borderSize='1px' color={props.shadowColor}>
            3
          </OutlineText>
        </div>
        <div className="points"
             style={styleBackgroundColor}>
          <OutlineText borderSize='1px' color={props.shadowColor}>
            2
          </OutlineText>
        </div>
        <div className="points"
             style={styleBackgroundColor}>
          <OutlineText borderSize='1px' color={props.shadowColor}>
            1
          </OutlineText>
        </div>
      </div>
    </div>
  )
}