import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'This magical box will detect faces in your pictures.'}
            </p>
            <div className='center'>
                <div className='form pa4 br3 shadow-5'>
                    <input 
                        className='f4 pa2 w-70' 
                        type='text'
                        onChange={onInputChange}
                        placeholder='Please enter a URL' 
                    />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                    style={{minWidth: '100px'}} 
                    onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;