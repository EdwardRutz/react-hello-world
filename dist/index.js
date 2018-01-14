// A React element with three arguements: element, properties, child content

const title = React.createElement(
  'h1', // The element we create
  {id: 'title', className: 'header'},  //The properties of the elemnet
  'Hello World, Hello React!'    // Child content the element contains. Displays content inside of h1
  )

// Render the above element, uses two arguements
ReactDOM.render(
  title, // The name of the element to render
  // Where we want to render the element to the DOM
  document.getElementById('react-container')
  )
