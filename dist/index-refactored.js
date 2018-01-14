
// Refactored, using JSX means createElement is not needed
    const { createElement } = React

// Styling
const style = { 
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'verdana'
}

const title = createElement(
  // The element we create
  'h1', 
  //The properties of the elemnet
  {id: 'title', className: 'header', style: style},  
  // Child content the element contains. Displays content inside of h1
  'Hello World, Hello React!'    
  )

  // Render the above element, uses two arguements
  render(
    // The name of the element to render
    title, 
    // Where we want to render the element to the DOM
    document.getElementById('react-container')
    )
     


// Refactored to use JSX and tags
// Use tags instead of the createElement calls
// A JSX expression wraps the class name in curly brackets {}