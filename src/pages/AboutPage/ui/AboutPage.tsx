import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'app/entities/Counter';


const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            <Counter />
            {t('О сайте')}
        </div>
    );
};

export default AboutPage;
