import React from 'react'
import FinderCareBanner from './FindCareBanner'
import FindCareFilter from './FindCareFilter'
import FindCareContent from './FindCareContent'

export default function FindCarePage() {
    return (
        <div class="page">
            <FinderCareBanner />
            <FindCareFilter />
            <FindCareContent />
        </div>
    )
}