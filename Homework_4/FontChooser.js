
class FontChooser extends React.Component {

    constructor(props) {
	super(props);
	this.state = {hidden: true, bold: this.props.bold, size: this.props.size}
    }

    toggleFontChooser() {
    	this.setState({hidden : !this.state.hidden})
    }
    

    render() {

		var bold = this.state.bold? 'bold' : 'normal';

		return(
		       <div>
		       <input type="checkbox" id="boldCheckbox" hidden={this.state.hidden}/>
		       <button id="decreaseButton" hidden={this.state.hidden}>-</button>
		       <span id="fontSizeSpan" hidden={this.state.hidden}>{this.props.size}</span>
		       <button id="increaseButton" hidden={this.state.hidden}>+</button>
		       <span id="textSpan" onClick={this.toggleFontChooser.bind(this)} 
		       	style={{fontWeight: bold, fontSize: this.state.size}}>
		       		{this.props.text}
		       </span>
		       </div>
		);
    }
}

