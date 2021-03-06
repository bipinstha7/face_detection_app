import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, boxes }) => {
	return (
		<div className="center">
			<div className="mt2 absolute">
				<img src={imageUrl} alt="" id="inputImage" width="500px" />
				{boxes.map(box => {
					return (
						<div
							key={box.topRow}
							className="bounding-box"
							style={{
								top: box.topRow,
								right: box.rightCol,
								bottom: box.bottomRow,
								left: box.leftCol
							}}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default FaceRecognition
