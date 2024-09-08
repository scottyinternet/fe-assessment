import React from 'react'

import Header from './_shared/Header'
import Toolbar from './_shared/Toolbar'
import FooterNav from './_shared/FooterNav'
import Footer from './_shared/Footer'
import MainContent from './_shared/MainContent'

export default function Layout() {
    return (
        <div class="layout">
            <Header />
            <Toolbar />
            <MainContent />
            <FooterNav />
            <Footer />
        </div>
    )
}