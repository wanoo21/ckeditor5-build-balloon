/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';

import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';

import Placeholders from './plugins/placeholders';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
// import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';

// import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
// import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
// import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
// import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';

// import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
// import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
// import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
// import Table from '@ckeditor/ckeditor5-table/src/table';
// import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

export default class FlashyBalloonEditor extends BalloonEditorBase {}

// Plugins to include in the build.
FlashyBalloonEditor.builtinPlugins = [
	Essentials,
	Bold,
	Italic,
	Underline,
	Strikethrough,
	Code,
	HorizontalLine,
	Font,
	Alignment,
	Placeholders,

	// UploadAdapter,
	// Autoformat,
	// BlockQuote,
	// CKFinder,
	// EasyImage,
	// Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
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

// placeholders | ltr rtl | media image | code

// Editor configuration.
FlashyBalloonEditor.defaultConfig = {
	toolbar: {
		items: [
			'undo', 'redo',
			'|', 'bold', 'italic', 'underline', 'strikethrough',
			'|', 'fontColor', 'fontBackgroundColor', 'fontSize', 'fontFamily',
			'|', 'bulletedList', 'numberedList',
			'|', 'placeholders',
			'link', 'horizontalLine',
			// 'ltr', 'rtl',
			'|', 'code',
			'|', 'alignment'
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		]
	},
	fontFamily: {
		options: [
			'default',
			'Georgia, serif',
			'\'Palatino Linotype\', \'Book Antiqua\', Palatino, serif',
			'\'Times New Roman\', Times, serif',
			'Arial, Helvetica, sans-serif',
			'\'Arial Black\', Gadget, sans-serif',
			'\'Comic Sans MS\', cursive, sans-serif',
			'Impact, Charcoal, sans-serif',
			'\'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif',
			'Tahoma, Geneva, sans-serif',
			'\'Trebuchet MS\', Helvetica, sans-serif',
			'Verdana, Geneva, sans-serif',
			'\'Courier New\', Courier, monospace',
			'\'Lucida Console\', Monaco, monospace'
		]
	},
	placeholders: {
		label: 'dsds',
		addSeparator: false,
		items: [
			{
				text: 'Group 1',
				fields: {
					'{{email}}':
				'\u05d3\u05d5\u05d0\u05e8 \u05d0\u05dc\u05e7\u05d8\u05e8\u05d5\u05e0\u05d9',
					'{{phone}}':
				'\u05de\u05e1\u05e4\u05e8 \u05d8\u05dc\u05e4\u05d5\u05df',
					'{{props_full_name}}': 'Full Name'
				}
			}
		]
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
