import {useRecoilState} from 'recoil';

import {AtomFamilyButton} from './SiteSettingsButton';

import {siteSettingsKeys } from '../../states/atoms';
import { useRef } from 'react';

const AtomFamilyShowcase = () => {

    const [siteSettings, setSiteSettings] = useRecoilState(siteSettingsKeys);

    const inputRef = useRef(null);

    const addThemeHandler = () => {
        let temp = JSON.parse(JSON.stringify(siteSettings));
        temp.push(inputRef.current.value);
        inputRef.current.value = '';
        setSiteSettings(temp);
    }

    return (
        <div className="siteSettingsContainer">
            <div className="siteSettingsInputContainer">
                <input type="text" ref={inputRef} placeholder="Site Settings Key"/>
                <button onClick={addThemeHandler}>Submit</button>
            </div>
            {siteSettings.map(item => (
                <AtomFamilyButton themeId={item} key={item}></AtomFamilyButton>
            ))}
        </div>
    )
}

export default AtomFamilyShowcase;