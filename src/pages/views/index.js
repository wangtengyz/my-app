import React from 'react'
const classPrefix = 'Views'

export default class Views extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount() {

  }

  render() {
    return <div className={`${classPrefix}`}>
        练习开始
    </div>
  }
}