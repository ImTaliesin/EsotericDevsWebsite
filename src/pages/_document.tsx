import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						rel='stylesheet'
						type='text/css'
						href='//fonts.googleapis.com/css?family=Playfair+Display'
					/>
					<link
						rel='preconnect'
						href='https://fonts.googleapis.com'
					/>
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
					/>
					<link
						rel='stylesheet'
						href='https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
