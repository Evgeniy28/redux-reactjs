import React, {PropTypes, Component} from 'react'

class Page extends Component {
  onYearBtnClick(e) {
    this.props.setYear(+e.target.textContent)
  }

  render() {
    const { year, photos } = this.props

    return (
      <div className='ib page'>
        <p>
          <button className='btn' onClick={::this.onYearBtnClick}>2016</button>
          <button className='btn' onClick={::this.onYearBtnClick}>2015</button>
          <button className='btn' onClick={::this.onYearBtnClick}>2014</button>
        </p>
        <h3>{year} year</h3>
        <p>You have {photos.length} photo.</p>
      </div>
    );
  }
}

Page.PropTypes = {
  year:    PropTypes.number.isRequired,
  photos:  PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired
}

export default Page;
