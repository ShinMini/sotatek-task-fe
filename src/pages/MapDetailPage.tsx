import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonImg,
	IonGrid,
	IonCol,
	IonRow
} from '@ionic/react'
import {RouteComponentProps} from 'react-router'
import {IonIcon} from '@ionic/react'
import {chevronBackOutline, chevronForwardOutline, homeOutline} from 'ionicons/icons'

import img1 from '../assets/img/1.jpg'
import img2 from '../assets/img/2.jpg'
import img3 from '../assets/img/3.jpg'
import img4 from '../assets/img/4.jpg'
import img5 from '../assets/img/5.jpg'
import img6 from '../assets/img/6.jpg'
import img7 from '../assets/img/7.jpg'
import img8 from '../assets/img/8.jpg'
import img9 from '../assets/img/9.jpg'
import img10 from '../assets/img/10.jpg'
import houseImg from '../assets/img/house.jpg'

import {useEffect, useRef, useState} from 'react'
import imgDataSet from '../assets/data/imgData.json'

interface MapDetailPageProps
	extends RouteComponentProps<{
		id: string
	}> {}

const imgSet = {
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img7,
	img8,
	img9,
	img10,
	house: houseImg
}
const MapDetailPage: React.FC<MapDetailPageProps> = ({match, history}) => {
	const [imgSrc, setImgSrc] = useState(imgSet.img1)
	const [imgPosition, setImgPosition] = useState(1)
	const [prevImgPosition, setPrevImgPosition] = useState(imgPosition)
	const imgRef = useRef<HTMLIonImgElement>(null)

	useEffect(() => {
		const currentImgData = imgDataSet.scenes[Number(match.params.id) - 1]

		const imgUrl = currentImgData.background_url as keyof typeof imgSet
		const imgHitzones = currentImgData.hitzones

		console.log(imgHitzones)

		setImgSrc(imgSet[imgUrl])
	}, [match.params.id])

	useEffect(() => {
		if (imgPosition === 0) {
			imgRef.current!.className = 'img img-MiddleToLeft'
			imgRef.current!.style.objectPosition = '0% 50%'
		} else if (imgPosition === 1) {
			if (prevImgPosition === 0) imgRef.current!.className = 'img img-LeftToMiddle'
			else if (prevImgPosition === 2) imgRef.current!.className = 'img img-RightToMiddle'
			imgRef.current!.style.objectPosition = '50% 50%'
		} else if (imgPosition === 2) {
			imgRef.current!.className = 'img img-MiddleToRight'
			imgRef.current!.style.objectPosition = '100% 50%'
		}
		setPrevImgPosition(imgPosition)
	}, [imgPosition, prevImgPosition])

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonGrid>
						<IonRow>
							<IonCol size='auto'>
								<IonIcon
									icon={homeOutline}
									size='large'
									color='white'
									onClick={() => history.push('/explore')}
								/>
							</IonCol>
							<IonCol>
								<IonTitle className='lg'>your position is {match.params.id}</IonTitle>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonToolbar>
			</IonHeader>

			<IonContent>
				{imgPosition !== 0 && (
					<IonIcon
						icon={chevronBackOutline}
						className='absolute left-arrow'
						onClick={() => setImgPosition(prev => (prev -= 1))}
					/>
				)}
				{imgPosition !== 2 && (
					<IonIcon
						icon={chevronForwardOutline}
						className='absolute right-arrow'
						onClick={() => setImgPosition(prev => (prev += 1))}
					/>
				)}
				<IonImg ref={imgRef} className='img' src={imgSrc} />
			</IonContent>
		</IonPage>
	)
}

export default MapDetailPage
