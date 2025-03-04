import { AppProps } from 'next/app';

import '../styles/global.scss';
import '../styles/bottomlinks.scss'
import '../styles/footer.scss'
import '../styles/herosection.scss'
import '../styles/navbar.scss'
import '../styles/responsivesection.scss'
import '../styles/stories.scss'
import '../styles/bottommodal.scss'
import '../styles/features.scss'
import '../styles/pricechart.scss'
import '../styles/pricing.scss'
import '../styles/mobilemenu.scss'
function MyApp({ Component, pageProps }: AppProps) {

  
  return <Component {...pageProps} />;
}

export default MyApp;
