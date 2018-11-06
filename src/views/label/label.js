import * as React from "react"
import { color } from "../../theme"

const presets = {
  dont: {
    borderColor: color.shiraz,
    borderWidth: "1px",
    borderStyle: "solid",
  },
  buy: {
    borderColor: color.limeade,
    borderWidth: "1px",
    borderStyle: "solid",
  },
  caution: {
    borderColor: color.lightning,
    borderWidth: "1px",
    borderStyle: "solid",
  },
  neutral: {
    borderColor: color.gray,
    borderWidth: "1px",
    borderStyle: "solid",
  },
}
const label = {
  dont: {
    backgroundColor: color.shiraz,
    padding: 5,
    fontWeight: 900
  },
  buy: {
    backgroundColor: color.limeade,
    padding: 5,
    fontWeight: 900
  },
  caution: { 
    backgroundColor: color.lightning,
    padding: 5,
    fontWeight: 900
  },
  neutral: {
    backgroundColor: color.gray,
    padding: 5,
    fontWeight: 900
  }
}
const text = {
  dont: "DON'T BUY",
  buy: "BUY NOW",
  caution: "CAUTION",
  neutral: "NEAUTRAL"
}

export class Label extends React.Component {
  render() {
    const { preset, rationale } = this.props
    return (
      <div style={presets[preset]}>
        <span style={label[preset]}>{text[preset]}</span>
        {rationale && <span>{rationale}</span>}
      </div>
    )
  }
}