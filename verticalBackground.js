function vertBack(colors, widthMin, widthMax) {
	this.colors = colors;
	this.wMin = widthMin;
	this.wMax = widthMax;                   
	
	this.create = function() {
		//console.log(".create start");
		var body = $('body');
		body.prepend("<div id='vertback' style='height:100%; width:100%; position:absolute; '></div>");
		var vBack = $('#vertback');
		var docW = $(document).width();
		var tmpW = 0;
		var tmp = 0;

		while(tmpW <= docW) {
			tmp = this.pickWidth();
		
			if((tmpW + tmp) > docW) {
				tmp = docW - tmpW;
			}
		
			tmpW += tmp;
			this.addElement(vBack, tmp);
			
			if(tmpW == docW) {
				break;
			}
		}
		//vBack.append("<div style='clear:both;'></div>");
		//console.log(".create end");
	};
	
	this.addElement = function(elem, width) {
		//console.log(".addElement start");
		var color = this.pickColor();
		//var width = this.pickWidth();
		var styleStr = "style='width:" + width + "px; height:100%; background-color:" + color + ";float:left;'";
		var str = "<div " + styleStr +  ">";
		elem.append(str);
		//return width;
		//console.log(".addElement end");
	};
	
	this.pickColor = function() {
		//console.log(".pickColor start");
		var rand = Math.floor(Math.random() * this.colors.length);
		var ret = this.colors[rand];
		//console.log(".pickColor end rand: " + rand + " color: " + ret);
		return ret;
	};
	
	this.pickWidth = function() {
		var rand = Math.floor(Math.random()*this.wMax) + this.wMin;
		//console.log("rand width: " + rand);
		return rand;
	}
}