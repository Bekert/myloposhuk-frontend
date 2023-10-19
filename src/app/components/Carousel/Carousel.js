'use client'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import './Carousel.css'

export default function ICarousel({ children, ...props }) {
	return <Carousel {...props}>{children}</Carousel>
}
