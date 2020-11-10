import React from 'react';
import Particles from 'react-particles-js';

import './partiсl.scss'

export const Particl = () => {
    return(
        <Particles
				params={{
					"particles": {
						"number": {
							"value": 100
						},
						"size": {
							"value": 2
						}
					},
					"interactivity": {
						"events": {
							"onhover": {
								"enable": true,
								"mode": "repulse"
							}
						}
					}
				}}
				className="partic"/>
    )
}