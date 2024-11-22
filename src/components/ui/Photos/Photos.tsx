import { PhotosData } from '../../utils'
import './Photo.css'

export interface PhotoI {}

const Photos:React.FC<PhotoI> = () => {
    return (
        <div className='photo container-padding'>
            {
                PhotosData.map((item, index) => (
                    <div style={{backgroundImage:`url(${item.img})`}} key={index} className='photo-card'>
                       <h2>
                            {item.title}
                        </h2>
                        <p>
                            {item.description}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default Photos