
import { useContext, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { siteSettingsState } from '../../states/atoms';

import { SingleContext } from './contextAPI/contexts';

import './contextShowcase.scss';

export const AtomFamilyButton = (prop) => {

    const [siteSettings, setSiteSettings] = useRecoilState(siteSettingsState(prop.themeId));

    useEffect(() => {
        console.log(prop.themeId, ' mounted / remounted');
    }, [prop.themeId])

    return (
        <div>
            <button onClick={() => {setSiteSettings(!siteSettings)}}>
                {prop.themeId}: {siteSettings ? "Yes" : "No"}
            </button>
        </div>
    )
}

const SimpleButton = (prop) => {
    return (
        <div className="settingsButtonContainer">
            <button className="settingsButton" onClick={prop.handler}>{prop.text}</button>
        </div>
    )
}

export const ContextButton = () => {
    
    const {theme, update} = useContext(SingleContext);

    
    return (
        <div>
            { theme.map((item, index) => 
                <SimpleButton key={index} handler={() => update(index, item.split('').reverse().join(''))} text={item}></SimpleButton>
            )}
        </div>
    )
}