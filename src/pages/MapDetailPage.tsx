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
import {
	chevronBackOutline,
	chevronForwardOutline,
	homeOutline,
	addOutline
} from 'ionicons/icons'

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

type HitZoneType = {
	x: string
	y: string
	goto: number
}

const MapDetailPage: React.FC<MapDetailPageProps> = ({match, history}) => {
	const [imgId, setImgId] = useState(0)
	const [imgSrc, setImgSrc] = useState(imgSet.img1)
	const [imgPosition, setImgPosition] = useState(1)
	const [prevImgPosition, setPrevImgPosition] = useState(imgPosition)

	const [goToButton, setGoToButton] = useState<HitZoneType[]>()

	const imgRef = useRef<HTMLIonImgElement>(null)

	useEffect(() => {
		const currentImgData = imgDataSet.scenes[imgId]
		const imgUrl = currentImgData.background_url as keyof typeof imgSet
		const imgHitzones = currentImgData.hitzones

		setGoToButton([])

		imgHitzones.forEach((item, index) => {
			setGoToButton(prev => {
				if (prev === undefined) return [item]
				return [...prev, item]
			})
		})
		setImgSrc(imgSet[imgUrl])
	}, [imgId])

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
								<IonTitle className='lg'>made by HyeonMin Shin</IonTitle>
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

				{goToButton &&
					goToButton.map((item, index) => {
						const getX = Number(item.x.split('%').at(0))
						const buttonPosition = getX >= 86 ? 'right' : getX <= 32 ? 'left' : 'middle'
						if (
							(buttonPosition === 'right' && imgPosition === 2) ||
							(buttonPosition === 'left' && imgPosition === 0) ||
							(buttonPosition === 'middle' && imgPosition === 1)
						)
							return (
								<IonIcon
									key={`goToButton-${index}`}
									icon={addOutline}
									className='absolute goto-button'
									style={{
										left: item.x,
										top: item.y
									}}
									onClick={() => setImgId(prev => (prev = item.goto))}
								/>
							)
					})}
			</IonContent>
		</IonPage>
	)
}

export default MapDetailPage
