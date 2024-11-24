import { PhotosData } from '../../utils'
import './Photo.css'

export interface PhotoI {}

const Photos:React.FC<PhotoI> = () => {
    return (
        <section className='photo container-padding'>
            {
                PhotosData.map((item, index) => (
                    <div style={{backgroundImage:`url(${item.img})`}} key={index} className='photo-card' data-aos="fade-up">
                       <h2>
                            {item.title}
                        </h2>
                        <p>
                            {item.description}
                        </p>
                    </div>
                ))
            }
        </section>
    )
}

export default Photos