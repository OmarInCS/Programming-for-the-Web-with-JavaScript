
class FontChooser extends React.Component {

    constructor(props) {
	super(props);
	this.state = {hidden: true, bold: props.bold, size: props.size}
    }

    toggleFontChooser() {
    	this.setState({hidden : !this.state.hidden})
    }
    

    render() {

	return(
	       <div>
	       <input type="checkbox" id="boldCheckbox" hidden={this.state.hidden}/>
	       <button id="decreaseButton" hidden={this.state.hidden}>-</button>
	       <span id="fontSizeSpan" hidden={this.state.hidden}>{this.props.size}</span>
	       <button id="increaseButton" hidden={this.state.hidden}>+</button>
	       <span id="textSpan" onClick={this.toggleFontChooser.bind(this)} 
	       	style={{fontWeight: this.state.bold, fontSize: this.state.size}}>
	       		{this.props.text}
	       </span>
	       </div>
	);
    }
}

