import { useMediaQuery } from 'react-responsive';


export const useIsLaptopOrDesktop = () => useMediaQuery({ query: '(min-width: 1024px)' });


export const useIsTablet = () => useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });


export const useIsMobile = () => useMediaQuery({ query: '(max-width: 767px)' });
