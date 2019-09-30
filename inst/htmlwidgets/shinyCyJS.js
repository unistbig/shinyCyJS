HTMLWidgets.widget({
  name:'shinyCyJS',
  type:'output',
  factory : function(el, width, height) {

	// Initialisation
	var cy = window.cy = cytoscape({ 
	container : document.getElementById(el.id),
	layout: { name: 'klay' },
	style: cytoscape.stylesheet()
		.selector('node').css({
			'width': 'data(width)',
			'height': 'data(height)',
			'shape': 'data(shape)',
			'background-color': 'data(bgColor)',				
			'background-opacity': 'data(bgOpacity)',
			'background-fill': 'data(bgFill)',
			'border-width': 'data(borderWidth)',
			'border-style': 'data(borderStyle)',
			'border-color': 'data(borderColor)',
			'border-opacity': 'data(borderOpacity)',
			'label': 'data(label)',
			'color': 'data(labelColor)',
			'text-opacity': 'data(textOpacity)',
			'font-size': 'data(fontSize)',				
			'text-outline-color': 'data(textOutlineColor)',
			'text-outline-opacity': 'data(textOutlineOpacity)',
			'text-outline-width': 'data(textOutlineWidth)',
			'text-background-color': 'data(textbgColor)',
			'text-background-opacity': 'data(textbgOpacity)',
			'text-border-opacity': 'data(textBorderOpacity)',
			'text-border-width': 'data(textBorderWidth)',
			'text-border-color': 'data(textBorderColor)',
			'text-valign':'center',
			'opacity':'data(opacity)',
			'pie-1-background-color' : 'data(pieColor1)',
			'pie-2-background-color' : 'data(pieColor2)',
			'pie-3-background-color' : 'data(pieColor3)',
			'pie-4-background-color' : 'data(pieColor4)',
			'pie-5-background-color' : 'data(pieColor5)',
			'pie-6-background-color' : 'data(pieColor6)',
			'pie-7-background-color' : 'data(pieColor7)',
			'pie-8-background-color' : 'data(pieColor8)',
			'pie-9-background-color' : 'data(pieColor9)',
			'pie-10-background-color' : 'data(pieColor10)',
			'pie-11-background-color' : 'data(pieColor11)',
			'pie-12-background-color' : 'data(pieColor12)',
			'pie-13-background-color' : 'data(pieColor13)',
			'pie-14-background-color' : 'data(pieColor14)',
			'pie-15-background-color' : 'data(pieColor15)',
			'pie-16-background-color' : 'data(pieColor16)',
			'pie-1-background-size' : 'data(pieSize1)',
			'pie-2-background-size' : 'data(pieSize2)',
			'pie-3-background-size' : 'data(pieSize3)',
			'pie-4-background-size' : 'data(pieSize4)',
			'pie-5-background-size' : 'data(pieSize5)',
			'pie-6-background-size' : 'data(pieSize6)',
			'pie-7-background-size' : 'data(pieSize7)',
			'pie-8-background-size' : 'data(pieSize8)',
			'pie-9-background-size' : 'data(pieSize9)',
			'pie-10-background-size' : 'data(pieSize10)',
			'pie-11-background-size' : 'data(pieSize11)',
			'pie-12-background-size' : 'data(pieSize12)',
			'pie-13-background-size' : 'data(pieSize13)',
			'pie-14-background-size' : 'data(pieSize14)',
			'pie-15-background-size' : 'data(pieSize15)',
			'pie-16-background-size' : 'data(pieSize16)'
			
		})
		.selector('edge').css({
			'width': 'data(width)',
			'curve-style': 'data(curveStyle)',
			'line-color': 'data(lineColor)',
			'line-style': 'data(lineStyle)',
			'source-arrow-color': 'data(sourceArrowColor)',
			'source-arrow-shape': 'data(sourceArrowShape)',
			'target-arrow-color': 'data(targetArrowColor)',
			'target-arrow-shape': 'data(targetArrowShape)',
			'opacity':'data(opacity)'
		})	
	});	
		
    return {
      renderValue: function(input){

		// Options
		var Ioptions = input.options.Ioptions
		for( var key in Ioptions ){ cy[[key]](Ioptions[key]) }
		var Roptions = input.options.Roptions
		for(var key in Roptions){ cy.renderer()[[key]] = Roptions[key] }

		// add elements
		var Elements = input.elements;
		cy.add(Elements);
		
		// set Layout
		var Layout = input.layout
		cy.layout(Layout).run()

	  },
      resize : function(width, height) { }  // not yet
    };
  }
});
