import React from 'react';
import * as C from './styles'

const Profile = () => {
    return(
        <C.Wrapper>
            <C.WrapperImage 
                src="" 
                alt="User avatar" 
            />
            <C.WrapperInfoUser>
                <div>
                    <h1>Name</h1>
                    <C.WrapperUserName>
                        <h3>Username:</h3>
                        <a href='' target='_blank' rel='noreferrer'>...</a>
                    </C.WrapperUserName>
                </div>
                <C.WrapperStatusCount>
                    <div>
                        <h4>Followers:</h4>
                        <span>...</span>
                    </div>
                    <div>
                        <h4>Starred:</h4>
                        <span>...</span>
                    </div>
                    <div>
                        <h4>Following:</h4>
                        <span>...</span>
                    </div>
                </C.WrapperStatusCount>

            </C.WrapperInfoUser>
        </C.Wrapper>
    )
}

export default Profile