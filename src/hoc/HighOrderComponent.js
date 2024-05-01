import React from 'react'

const HighOrderComponent = () => {
    // Higher-Order Component (HOC)
function withLogging(Component) {
    return function WithLogging(props) {
      console.log('Component:', Component.name);
      return <Component {...props} />;
    };
  }
  
  // Original Component
  function MyComponent(props) {
    return <div>Hello, {props.name}!</div>;
  }
  
  // Enhanced Component
  const EnhancedComponent = withLogging(MyComponent);
  
  return (
    <div>HighOrderComponent
        {<EnhancedComponent name="Devikanth"/>}
    </div>
  )
}

export default HighOrderComponent