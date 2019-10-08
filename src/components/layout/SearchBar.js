import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            placeholder="Search Pokemon..."
            className="form-control mx-auto"
            style={{
              backgroundColor: 'white transparent',
              height: '1.75em',
              width: '95%',
              borderRadius: '15px',
              opacity: '0.8',
              fontSize: '1.1em',
            }}
          />
        </form>
      </div>
    );
  }
}