import './_index.scss';
import LoginPicture from '../../../assets/pictures/LoginPicture.png';
import useStore from '../../../Store';

const ImageInfos = ({photographer, source}) => {

    return (
        <div className='imageSection--imageInfo'>
             <p> A photo by <a href={source} target='_blank' className='typ__caption'> {photographer} </a></p>
        </div>
    );}

export const ImageSection = () => {
    const login_picture = useStore(state => state.pictures['login_picture']);
    return (
        <section className="imageSection">
            <img src={login_picture.image} alt={login_picture.alt} />
            <ImageInfos photographer={login_picture.owner} source={login_picture.source}/>
        </section>
    );
}