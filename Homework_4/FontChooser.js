
class FontChooser extends React.Component {

    constructor(props) {
		super(props);
		var min = this.props.min;
		var max = this.props.max;
		var size = this.props.size;
		min = Math.max(min, 1);
		if(min > max) {
			min = max = Math.max(max, min);
		}
		size = Math.max(size, min);
		size = Math.min(size, max);
		this.state = {hidden: true, isBold: this.props.bold == "true", 
						size: size, color: "black",
						max: max, min: min};
    }

    toggleFontChooser() {
    	this.setState({hidden : !this.state.hidden});
    }

    toggleBold() {
    	this.setState({isBold : !this.state.isBold});
    }

    increaseFontSize(){
    	var size = parseInt(this.state.size) + 1;
    	if(size < parseInt(this.state.max)){
    		this.setState({size: size, color: "black"});
    	}
    	else if(size == parseInt(this.state.max)){
    		this.setState({size: size, color: "red"});
    	}
    }
    
    decreaseFontSize(){
    	var size = parseInt(this.state.size) - 1;
    	if(size > parseInt(this.state.min)){
    		this.setState({size: size, color: "black"});
    	}
    	else if(size == parseInt(this.state.min)){
    		this.setState({size: size, color: "red"});
    	}
    }

    restoreOriginalSize(){
    	this.setState({size: this.props.size})
    }

    render() {

		var bold = this.state.isBold? 'bold' : 'normal';

		return(
	       <div>
		       <input type="checkbox" id="boldCheckbox" 
		       		hidden={this.state.hidden} defaultChecked={this.state.isBold}
		       		onChange={this.toggleBold.bind(this)}/>
		       
		        <button id="decreaseButton" hidden={this.state.hidden} 
		        			onClick={this.decreaseFontSize.bind(this)}>-</button>
		       
		       <span id="fontSizeSpan" hidden={this.state.hidden} 
		       			onDoubleClick={this.restoreOriginalSize.bind(this)}>
		       		{this.state.size}
		       </span>
		       
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

