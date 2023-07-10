import create from 'zustand';
import LoginPicture from './assets/pictures/LoginPicture.png';

const useStore = create((set) => ({

    pictures: {
        login_picture: { 
                            source: 'https://unsplash.com/photos/nY14Fs8pxT8',
                            alt: 'purple and white heart illustration',
                            owner: 'Milad Fakurian',
                            image: LoginPicture},
    }


}));


export default useStore;