import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import {currentPageState, currentUser, existingProfiles} from '../../states/atoms';

const UserProfile = () => {

    const currentPage = useRecoilValue(currentPageState);
    const user = useRecoilValue(currentUser);
    const profiles = useRecoilValue(existingProfiles);

    const [profile, setProfile] = useState(null);
    useEffect(() => {
        setProfile(profiles.find((item) => item.Email === user.email));
        console.log(profile);
    }, [])

    return (
        <div id="userProfilePage" style={{display: currentPage === 'profile' ? 'initial' : 'none' }}>
            User information here
            {profile}
        </div>
    )
}

export default UserProfile;