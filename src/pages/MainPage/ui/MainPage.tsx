import React from 'react';
import {useTranslation} from "react-i18next";
import 'shared/config/i18n/i18n';
const MainPage = () => {
    const {t} = useTranslation();

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
