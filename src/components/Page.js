import React, {PropTypes, Component} from 'react'

class Page extends Component {
  render() {
    const { year, photos } = this.props

    return (
      <div>
        <p>>You have {photos.length} photo {year} year</p>
      </div>
    );
  }
}

Page.PropTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired
}

export default Page;
