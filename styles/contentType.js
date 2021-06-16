// import general from '../../src/styles/general.js'

export default {
	richMedia: {
		phraseTextsWrapper: { paddingLeft: 7, paddingRight: 2 },
		phraseList: {
			phraseNumContainer: { left: 2 },
			voiceContainer: {
				flexDirection: 'row-reverse',
				paddingLeft: 5
			},
			avatarProps: {
				containerStyle: {
					marginLeft: 10
				},
				size: 'small'
			},
			// voiceNameWrapper: { flex: 10 },
			voiceName: { fontSize: 16 },
			voiceNameTr: {
				fontSize: 12,
				writingDirection: 'ltr',
				textAlign: 'right',
				marginBottom: 10
			}
		}
	},
	richText: {
		paragraph: {
			writingDirection: 'ltr',
			textAlign: 'left',
			fontFamily: 'Inter-Variable',
			fontSize: 16
		},
		text: {
			writingDirection: 'ltr',
			textAlign: 'left',
			fontFamily: 'Inter-Variable',
			fontSize: 16
		},
		heading3: {
			writingDirection: 'ltr',
			textAlign: 'left',
			fontFamily: 'Inter-Variable'
		}
	}
}
