function vertBack(colors, stripeCount) {
	this.colors = colors;
	this.stripeCount = stripeCount;
	
	this.create = function() {
		console.log(".create start");
		var body = $('body');
		body.prepend("<div id='vertback' style='height:100%; width:100%'></div>");
		var vBack = $('#vertback');
		for(var i = 0; i < this.stripeCount; i++) {
			this.addElement(vBack);
		}
		console.log(".create end");
	};
	
	this.addElement = function(elem) {
		console.log(".addElement start");
		var color = this.pickColor();
		var width = 20;
		var styleStr = "style='width:" + width + "px; height:100%; background-color:" + color + ";float:left;'";
		var str = "<div " + styleStr +  ">";
		elem.append(str);
		console.log(".addElement end");
	};
	
	this.pickColor = function() {
		console.log(".pickColor start");
		var rand = Math.floor(Math.random() * this.colors.length);
		var ret = this.colors[rand];
		console.log(".pickColor end rand: " + rand + " color: " + ret);
		return ret;
	};
}