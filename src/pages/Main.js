import React, { Component } from 'react'

//Next
import { NextSeo } from 'next-seo';
import Head from 'next/head'
import { withRouter } from 'next/router'

//components
import Header from '@components/layout/header'
import Footer from '@components/layout/footer'

//redux
import { persistStore, persistReducer } from 'redux-persist'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import createEncryptor from 'redux-persist-transform-encrypt'
import { Provider, connect } from "react-redux";
import withRedux from "next-redux-wrapper";
import reducers from '@redux-store/reducers'
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';


//UI, styles
// import 'bootstrap/scss/bootstrap.scss'
import '@styles/app.scss'
import { ToastContainer } from 'react-toastify';

const encryptor = createEncryptor({
    secretKey: 'tekway-encrypt-key',
    onError: function (error) {
        // Handle the error.
    }
})

const makeStore = (initialState, options) => {
    let store
    if (!options.isServer) {
        const persistConfig = {
            key: 'root-tekway',
            storage,
            transforms: [encryptor]
        };
        store = createStore(
            persistReducer(persistConfig, reducers),
            initialState,
            compose(
                applyMiddleware(thunk)
            )
        );
        store.__PERSISTOR = persistStore(store);
    } else {
        store = createStore(
            reducers,
            initialState,
            compose(
                applyMiddleware(thunk)
            )
        );
    }
    return store
};


class Main extends Component {
    getHeader = () => {
        return <NextSeo
            title="TEKWAY   "
            description={"This example uses more of the available config options." + this.props.router.asPath}
            canonical="https://www.canonical.ie/"
            openGraph={{
                url: 'https://www.url.ie/a',
                title: 'Open Graph Title',
                description: 'Open Graph Description',
                images: [
                    {
                        url: 'https://www.example.ie/og-image-01.jpg',
                        width: 800,
                        height: 600,
                        alt: 'Og Image Alt',
                    },
                    {
                        url: 'https://www.example.ie/og-image-02.jpg',
                        width: 900,
                        height: 800,
                        alt: 'Og Image Alt Second',
                    },
                    { url: 'https://www.example.ie/og-image-03.jpg' },
                    { url: 'https://www.example.ie/og-image-04.jpg' },
                ],
                site_name: 'SiteName',
            }}
            twitter={{
                handle: '@handle',
                site: '@site',
                cardType: 'summary_large_image',
            }}
        />
    }
    render() {
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <Head>
                    <title>TekWay</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet"
                        integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1"
                        crossOrigin="anonymous" />
                </Head>
                {this.getHeader()}
                <PersistGate persistor={this.props.store.__PERSISTOR} loading={null}>
                    <ToastContainer autoClose={3000} />
                    <Provider store={this.props.store}>
                        <div className='app'>
                            {/* {
                            this.props.router && this.props.router.asPath && this.props.router.asPath == "/account/login"
                                || this.props.router && this.props.router.asPath && this.props.router.asPath == "/account/register"
                                ?
                                <div className='main-content'>
                                    <Component {...pageProps} />
                                </div> : */}
                            <Header />
                            <div className='main-content'>
                                {
                                    this.props.body
                                }
                            </div>
                            <Footer />
                        </div>
                    </Provider>
                </PersistGate>
                {/* <FacebookProvider appId="313919028686873" chatSupport>
                    <CustomChat pageId="425898327604484" minimized={false} />
                </FacebookProvider> */}
            </div >
        );
    }
}

function mapStateToProps(state) {
    return {
        // auth: state.auth.auth
    }
}

export default withRouter(withRedux(makeStore)(connect(mapStateToProps)(Main)));