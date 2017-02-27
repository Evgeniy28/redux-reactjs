import React       from 'react'
import { connect } from 'react-redux'

const App = React.createClass({
  render() {
    const { name } = this.props.user
    const { year, photos } = this.props.page
    return (
      <div className='App'>
        <h2>Hello, {name}!</h2>
        <p>У тебя {photos.length} фото за {year} год!</p>
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    user: state.user,
    page: state.page
  }
}

export default connect(mapStateToProps)(App);
