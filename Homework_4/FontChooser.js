
class FontChooser extends React.Component {

    constructor(props) {
	super(props);
	this.state = {hidden: true, isBold: this.props.bold, 
					size: this.props.size, color: "black"};
    }

    toggleFontChooser() {
    	this.setState({hidden : !this.state.hidden});
    }

    toggleBold() {
    	this.setState({isBold : !this.state.isBold});
    }

    increaseFontSize(){
    	var size = parseInt(this.state.size) + 1;
    	if(size < parseInt(this.prop.max)){
    		this.setState({size: size, color: "black"});
    	}
    	else if(size == parseInt(this.prop.max)){
    		this.setState({size: size, color: "red"});
    	}
    }
    
    decreaseFontSize(){
    	var size = parseInt(this.state.size) - 1;
    	if(size > parseInt(this.prop.min)){
    		this.setState({size: size, color: "black"});
    	}
    	else if(size == parseInt(this.prop.min)){
    		this.setState({size: size, color: "red"});
    	}
    }

    render() {

		var bold = this.state.isBold? 'bold' : 'normal';

		return(
		       <div>
		       <input type="checkbox" id="boldCheckbox" 
		       		hidden={this.state.hidden} defaultChecked={this.state.isBold}
		       		onChange={this.toggleBold.bind(this)}>
		       <button id="decreaseButton" hidden={this.state.hidden} 
		       			onClick={this.decreaseFontSize.bind(this)}>-</button>
		       <span id="fontSizeSpan" hidden={this.state.hidden}>{this.props.size}</span>
		       <button id="increaseButton" hidden={this.state.hidden} 
		       			onClick={this.increaseFontSize.bind(this)}>+</button>
		       <span id="textSpan" onClick={this.toggleFontChooser.bind(this)} 
		       	style={{fontWeight: bold, fontSize: this.state.size +"px", color: this.state.color}}>
		       		{this.props.text}
		       </span>
		       </div>
		);
    }
}

