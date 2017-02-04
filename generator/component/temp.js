import React from 'react'

// CSS
import './<%= name %>'

class <%= name %> extends React.Component {
  render () {
    return (
      <div id='<%= name %>'>
        <h1><%= name %> Component</h1>
      </div>
    )
  }
}

export default <%= name %>
