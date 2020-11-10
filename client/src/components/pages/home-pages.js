import React from 'react';

import {Particl} from '../partical-canvas/particl';
import {LargeLogo} from '../llarge-logo/large-logo';
import {ContentHomePage} from '../content-homepage/content';

import './home-page.scss'

export const HomePage = () => {
    return (
		<>
        <div className="home-page">
			<Particl/>
			<LargeLogo/>
		</div>
		<ContentHomePage/>
		</>
    );
};
