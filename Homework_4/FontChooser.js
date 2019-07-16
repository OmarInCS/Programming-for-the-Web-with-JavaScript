
class FontChooser extends React.Component {

    constructor(props) {
	super(props);
	this.state = {hidden: true, isBold: this.props.bold, size: this.props.size};
    }

    toggleFontChooser() {
    	this.setState({hidden : !this.state.hidden});
    }

    toggleBold() {
    	this.setState({isBold : !this.state.isBold});
    }
    

    render() {

		var bold = this.state.isBold? 'bold' : 'normal';

		return(
		       <div>
		       <input type="checkbox" id="boldCheckbox" 
		       		hidden={this.state.hidden} {this.state.isBold? "checked" : ""}
		       		onChange={this.toggleBold.bind(this)}>
		       <button id="decreaseButton" hidden={this.state.hidden}>-</button>
		       <span id="fontSizeSpan" hidden={this.state.hidden}>{this.props.size}</span>
		       <button id="increaseButton" hidden={this.state.hidden}>+</button>
		       <span id="textSpan" onClick={this.toggleFontChooser.bind(this)} 
		       	style={{fontWeight: bold, fontSize: this.state.size +"px"}}>
		       		{this.props.text}
		       </span>
		       </div>
		);
    }
}

