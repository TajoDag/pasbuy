import React, { createContext, useContext, useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import enLocale from '../locales/en.json';
import viLocale from '../locales/vi.json';
import zhLocale from '../locales/zh.json';
import ptLocale from '../locales/pt.json';

const LocalizationContext = createContext();

export const useLocalization = () => {
    const context = useContext(LocalizationContext);
    if (!context) {
        throw new Error('useLocalization must be used within a LocalizationProvider');
    }
    return context;
};

export const LocalizationProvider = ({ children }) => {
    const storedLocale = localStorage.getItem('locale');
    const [locale, setLocale] = useState(storedLocale || 'en');

    const messages = {
        en: enLocale,
        vi: viLocale,
        zh: zhLocale,
        pt: ptLocale,
    };

    const switchLocale = (newLocale) => {
        setLocale(newLocale);
        localStorage.setItem('locale', newLocale);
    };

    const dir = locale === 'ar' ? 'rtl' : 'ltr';

    useEffect(() => {
        switchLocale(locale);
    }, [locale]);

    return (
        <LocalizationContext.Provider value={{ locale, switchLocale }}>
            <IntlProvider locale={locale} messages={messages[locale]}>
                <div dir={dir}>
                    {children}
                </div>
            </IntlProvider>
        </LocalizationContext.Provider>
    );
};