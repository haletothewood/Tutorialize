import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Infinite from 'react-infinite'

const DEFAULT_ROW_COUNT = 10

const RowItem = (props) => {
  return <div className="infinite-list-item">
    <p>Row Item {props.index}</p>
  </div>
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isInfiniteLoading: false,
      rows: this.buildRows(0, DEFAULT_ROW_COUNT)
    }
  }

  buildRows(start, end) {
    const rows = []
    for (let i = start; i < end; i++) {
      rows.push(<RowItem key={i+1} index={i+1}/>)
    }
    return rows
  }

  handleInfiniteLoad = () => {
    this.setState({isInfiniteLoading: true})
    setTimeout(() => {
        const rowCount = this.state.rows.length,
            newRows = this.buildRows(rowCount, rowCount + 10);
        this.setState({
            isInfiniteLoading: false,
            rows: this.state.rows.concat(newRows)
        })
    }, 1000)
  }

  rowInfiniteLoad() {
    return <div className="infinite-list-item">
        Loading...
    </div>
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Infinite Scrolling in React</h1>
        </header>
        <table className={"App-table"}>
          <tbody>
          <tr>
            <th>
              <p className="App-intro">
              The number of rendered rows is now: {this.state.rows.length}
              </p>
            </th>
          </tr>
          <tr>
            <td>
              <Infinite elementHeight={40}
              containerHeight={300}
              infiniteLoadBeginEdgeOffset={200}
              onInfiniteLoad={this.handleInfiniteLoad}
              loadingSpinnerDelegate={this.rowInfiniteLoad()}
              isInfiniteLoading={this.state.isInfiniteLoading}
              >
                {this.state.rows}
              </Infinite>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default App
