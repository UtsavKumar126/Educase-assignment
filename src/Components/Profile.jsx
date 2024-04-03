import React from 'react'
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';

function Profile() {
  return (
    <div className='profile-main'>
        <div style={{padding:"0.5rem 0.5rem",backgroundColor:'white'}}>Account Settings</div>
        <div className='profile-info'>
            <div className='image-div'>
               <img src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp" alt="photo" />
            </div>
            <div>
                <p style={{fontWeight:500}}>Marry Doe</p>
                <p>Marry@Gmail.Com</p>
            </div>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae molestias nemo ratione ad dolorum magni voluptatibus tempora! Corporis illum cum aut, beatae maiores sint quaerat, quasi laudantium, magni iusto quos.</p>
        <div className='camera'>
            <CameraAltRoundedIcon/>
        </div>
    </div>
  )
}

export default Profile