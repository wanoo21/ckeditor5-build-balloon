// https://ckeditor.com/docs/ckeditor5/latest/framework/guides/creating-simple-plugin.html
// https://github.com/ckeditor/ckeditor5-alignment/blob/894745ecb1e8bd94286b4089eb16079034eb8a0b/src/alignmentui.js#L107-L124
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import { createDropdown, addListToDropdown, addToolbarToDropdown } from '@ckeditor/ckeditor5-ui/src/dropdown/utils';
// import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
// import SplitButtonView from '@ckeditor/ckeditor5-ui/src/dropdown/button/splitbuttonview';
import Collection from '@ckeditor/ckeditor5-utils/src/collection';
import Model from '@ckeditor/ckeditor5-ui/src/model';

export default class extends Plugin {
	static get pluginName() {
		return 'Placeholders';
	}

	init() {
		const options = this.editor.config.get( 'placeholders' );

		this.editor.ui.componentFactory.add( 'placeholders', locale => {
			const dropdownView = createDropdown( locale );
			dropdownView.buttonView.set( { withText: true, label: options.label } );

			if ( !options || !options.items || !options.items.length ) {
				dropdownView.set( 'isEnabled', false );
				dropdownView.buttonView.set( 'label', 'No items found' );
			} else {
				const subDropDowns = options.items.map( ( { text, fields } ) => {
					const subItems = new Collection();
					const dropDown = createDropdown( locale );
					dropDown.buttonView.set( { withText: true, label: text } );

					const keys = Object.keys( fields );

					for ( const key of keys ) {
						subItems.add( { type: 'button', model: new Model( { withText: true, label: fields[ key ], key } ) } );
						if ( options.addSeparator && keys.indexOf( key ) < ( keys.length - 1 ) ) {
							subItems.add( { type: 'separator' } );
						}
					}

					addListToDropdown( dropDown, subItems );
					return dropDown;
				} );

				addToolbarToDropdown( dropdownView, subDropDowns );

				dropdownView.toolbarView.isVertical = true;

				dropdownView.on( 'execute', evt => {
					this.editor.model.insertContent( this.editor.model.change( writer => writer.createText( evt.source.key ) ) );
				} );
			}
			return dropdownView;
		} );
	}
}
