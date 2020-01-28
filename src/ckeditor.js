/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// import './styles.css';

// The editor creator to use.
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';

import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
// import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';

import Placeholders from './plugins/placeholders';
import Media from './plugins/media';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
// import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';

// import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
// import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
// import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
// import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
// import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';

// import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
// import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
// import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
// import Table from '@ckeditor/ckeditor5-table/src/table';
// import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

export default class FlashyBalloonEditor extends BalloonEditorBase {
	static get builtinPlugins() {
		return [
			Essentials,
			Bold,
			Italic,
			Underline,
			Strikethrough,
			// Code,
			HorizontalLine,
			Font,
			Alignment,
			Placeholders,
			Media,

			// UploadAdapter,
			// Autoformat,
			// BlockQuote,
			// CKFinder,
			// EasyImage,
			// Heading,
			Image,
			// ImageCaption,
			ImageStyle,
			ImageToolbar,
			ImageResize,
			// ImageUpload,
			// Indent,
			Link,
			List,
			// MediaEmbed,
			// Paragraph,
			PasteFromOffice,
			// Table,
			// TableToolbar
		];
	}

	static get defaultConfig() {
		return {
			toolbar: {
				items: [
					'undo', 'redo',
					'|', 'bold', 'italic', 'underline', 'strikethrough',
					'|', 'alignment',
					'|', 'fontSize', 'fontColor', 'fontBackgroundColor',
					'|', 'bulletedList', 'numberedList',
					'|', 'placeholders', 'link', // 'horizontalLine',
					// 'ltr', 'rtl',
					'media' // 'code',
				]
			},

			// 'undo redo | bold italic underline strikethrough | fontsizeselect | alignleft aligncenter alignright alignjustify',
			// 'forecolor backcolor | bullist numlist | placeholders | link hr | ltr rtl | media image | code'

			image: {
				toolbar: [
					'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight',
					'|',
					'imageTextAlternative'
				],
				styles: [
					// This option is equal to a situation where no style is applied.
					'full',

					// This represents an image aligned to the left.
					'alignLeft',

					// This represents an image aligned to the right.
					'alignRight'
				],
				resizeUnit: 'px'
			},
			// fontFamily: {
			// 	options: [
			// 		'default',
			// 		'Georgia, serif',
			// 		'\'Palatino Linotype\', \'Book Antiqua\', Palatino, serif',
			// 		'\'Times New Roman\', Times, serif',
			// 		'Arial, Helvetica, sans-serif',
			// 		'\'Arial Black\', Gadget, sans-serif',
			// 		'\'Comic Sans MS\', cursive, sans-serif',
			// 		'Impact, Charcoal, sans-serif',
			// 		'\'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif',
			// 		'Tahoma, Geneva, sans-serif',
			// 		'\'Trebuchet MS\', Helvetica, sans-serif',
			// 		'Verdana, Geneva, sans-serif',
			// 		'\'Courier New\', Courier, monospace',
			// 		'\'Lucida Console\', Monaco, monospace'
			// 	]
			// },
			fontSize: {
				options: '10pt 12pt 14pt 16pt 18pt 22pt 24pt 26pt 30pt 34pt 38pt 42pt 46pt 48pt'.split( ' ' )
			},
			placeholders: {
				hidden: true,
				// label: 'dsds',
				// addSeparator: false,
				// items: [
				// 	{
				// 		text: 'Group 1',
				// 		fields: {
				// 			'{{email}}':
				// 		'\u05d3\u05d5\u05d0\u05e8 \u05d0\u05dc\u05e7\u05d8\u05e8\u05d5\u05e0\u05d9',
				// 			'{{phone}}':
				// 		'\u05de\u05e1\u05e4\u05e8 \u05d8\u05dc\u05e4\u05d5\u05df',
				// 			'{{props_full_name}}': 'Full Name'
				// 		}
				// 	}
				// ]
			},
			media: {
				async browse() {
					const path = await new Promise( res => {
						setTimeout( () => {
							res( '/sample.jpg' );
						}, 1000 );
					} );

					return path;
				}
			},
			// table: {
			// 	contentToolbar: [
			// 		'tableColumn',
			// 		'tableRow',
			// 		'mergeTableCells'
			// 	]
			// },
			// This value must be kept in sync with the language defined in webpack.config.js.
			language: 'en'
		};
	}
}
