// A React element with three arguements: element, properties, child content
// Refactored to use JSX and tags
// Use tags instead of the createElement calls
// A JSX expression wraps the class name in curly brackets {}
// Needs to be refactored with babel before code will display.

const { render } = ReactDOM

// Styling
const style = { 
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'verdana'
}

render(
  <h1 id='title'
      className='header'
      style={{backgroundColor: 'orange', color: 'white', fontFamily: 'verdana'}}>
    Hello World, Hello React!
  </h1>,
  document.getElementById('react-container')
)









