import React from 'react'
import App from 'next/app'
import Main from './Main'

class MyApp extends App{
    static async getInitialProps({ Component, ctx, req }) {
		if (ctx.isServer) {
			// for first page load request, we may wanna do something ?
		}
		const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
		return { pageProps };
	}

	render() {
		const { Component, pageProps, store, head } = this.props;
		const _body = <Component {...pageProps} />;
		return <Main body={_body} store={store} />
    }
}

export default MyApp