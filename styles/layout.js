import general from '../../src/styles/general'

export default {
	homeScreen: {
		backgroundImageProps: {
			imageStyle: { opacity: 0.2, resizeMode: 'repeat' }
		},
		logoContainer: {
			marginTop: 30,
			marginBottom: 30
		},
		logoImageProps: {
			style: {
				width: 320,
				height: 200,
				resizeMode: 'contain',
				borderRadius: 10
			}
		}
	},
	drawer: {
		listItemText: {
			...general.body1,
			textAlign: 'center',
			color: general.colors.primary
		},
		listItemTranslation: {
			display: 'none'
		}
	},
	screenHeader: {
		chapterTitleTr: {
			display: 'none'
		},
		subchapterTitleTr: {
			display: 'none'
		}
	}
}
