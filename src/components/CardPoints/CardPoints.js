import React from 'react'

export const CardPoints = () => {
  return (
    <div className='healthTable'>
      <div className="bigHealth">
        <div className="points">25</div>
        <div className="points">24</div>
        <div className="points">23</div>
        <div className="points">22</div>
        <div className="points">21</div>
        <div className="points special"><span className="mainHP">20</span></div>
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
        <div className="points">
          <span className="lowHP">5</span>
        </div>
        <div className="points">
          <span className="lowHP">4</span>
        </div>
        <div className="points">
          <span className="lowHP">3</span>
        </div>
        <div className="points">
          <span className="lowHP">2</span>
        </div>
        <div className="points">
          <span className="lowHP">1</span>
        </div>
      </div>
    </div>
  )
}