var dictionary = ['Rio','Tokyo', 'Angel Rubio', 'Nairobi', 'Raquel Murillo', 'Alicia Sierra','War Machine','Nick Fury','Nicholas Joseph Fury','Howard Stark','Bruce Banner','Hulk','Natasha Romanoff','Black Widow','Anton Vanko','Whiplash',
'Berlin','The Professor','La casa de papel','money ','robbery','gun','Mask','Helsinki','Raquell Murillo','Denver','Alison Parker','Alicia sierra','Arturo','Oslo',
'Cesar Gandia','Martin','Bogota','Marsella','Julia','Moscow','Marivi','Amanda','Benjamin','Paquita','Strategy','Royal Mint','Bella Ciao',
'master mind','Hostages','Alison', 'Marivi', 'Alberto'];

function replace() {
	tags = document.getElementsByTagName('*');

	for ( var i = 0; i < tags.length; i++) {
		var element = tags[i];

		for ( var j = 0; j < element.childNodes.length; j++) {
			var node = element.childNodes[j];

			if ( node.nodeType === 3 ) {
				var text = node.nodeValue;
				text = text.toString();
				dictionary.forEach( function( dictionaryItem ) {
					var newText = text.includes( dictionaryItem );
					if ( newText ) {
						element.style.backgroundColor = 'red';
						element.style.color = 'red';
					}
				});
			}
		}
	}
}

replace();
