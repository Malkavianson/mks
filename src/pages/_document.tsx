import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
			<Html>
				<Head>
					<meta
						property='og:title'
						content='MKS LandingPage'
						key='title'
					/>
				</Head>
				<body className='loading'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
  }
}

export default MyDocument
