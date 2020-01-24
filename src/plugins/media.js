// https://ckeditor.com/docs/ckeditor5/latest/framework/guides/creating-simple-plugin.html
// https://github.com/ckeditor/ckeditor5-alignment/blob/894745ecb1e8bd94286b4089eb16079034eb8a0b/src/alignmentui.js#L107-L124
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
// import { createDropdown, addListToDropdown, addToolbarToDropdown } from '@ckeditor/ckeditor5-ui/src/dropdown/utils';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import imageButtonIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';
// import Collection from '@ckeditor/ckeditor5-utils/src/collection';
// import Model from '@ckeditor/ckeditor5-ui/src/model';

import ModelElement from '@ckeditor/ckeditor5-engine/src/model/element';

export default class extends Plugin {
	static get pluginName() {
		return 'Media';
	}

	init() {
		const options = this.editor.config.get( 'media' );

		this.editor.ui.componentFactory.add( 'media', locale => {
			const buttonview = new ButtonView( locale );
			buttonview.set( {
				label: 'Insert an image',
				// keystroke: 'Ctrl+B',
				tooltip: true,
				icon: imageButtonIcon
			} );

			buttonview.on( 'execute', async () => {
				const path = await options.browse();
				return this.insertImage( path );
			} );

			return buttonview;
		} );
	}

	insertImage( src, alt = '' ) {
		const { model } = this.editor;
		model.enqueueChange( () => {
			const imageElement = new ModelElement( 'image', { src, alt } );
			model.insertContent( imageElement, model.selection );
		} );
	}
}
