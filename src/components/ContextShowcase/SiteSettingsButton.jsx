
import { useContext, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { siteSettingsState } from '../../states/atoms';

// import {SiteSettingsContext} from '../../states/context';

export const AtomFamilyButton = (prop) => {

    const [siteSettings, setSiteSettings] = useRecoilState(siteSettingsState(prop.themeId));

    useEffect(() => {
        console.log(prop.themeId, ' mounted / remounted');
    }, [])

    return (
        <div>
            <button onClick={() => {setSiteSettings(!siteSettings)}}>
                {prop.themeId}: {siteSettings ? "Yes" : "No"}
            </button>
        </div>
    )
}

export const ContextButton = (prop) => {

    useEffect(() => {
        // console.log(prop.themeId, ' mounted / remounted');
    }, [])

    return (
        <div>
            Hello World
            {/* <button onClick={() => {}}>
            </button> */}
        </div>
    )
}