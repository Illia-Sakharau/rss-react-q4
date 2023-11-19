import classes from './style.module.scss';
import { FC, ReactElement } from 'react';
import NavBar from '../../molecules/navBar/NavBar';
import { linkInfo } from '../../../types';
import Logo from '../../atoms/logo/Logo';
import SectionWrapper from '../../atoms/sectionWrapper/sectionWrapper';
import LogoRSS from '../../../assets/rss-logo.svg';
import LogoAIC from '../../../assets/aic-logo.svg';

type Props = unknown;

const linksInBar: linkInfo[] = [
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/gallery',
    text: 'Gallery',
  },
];

const Footer: FC<Props> = (): ReactElement => {
  return (
    <footer className={classes.footer}>
      <SectionWrapper className={classes.footerWrapper}>
        <div className={classes.siteSide}>
          <Logo className={classes.logo} />
          <NavBar linksInBar={linksInBar} className={classes.navBar} />
        </div>
        <div className={classes.additionalInfo}>
          <div className={classes.item}>
            <span>Thanks for the API</span>
            <a href="https://www.artic.edu/" target="_blank" rel="noreferrer">
              <img src={LogoAIC} alt="The Art Institute of Chicago" />
            </a>
          </div>

          <div className={classes.item}>
            <span>Thanks for the learning</span>
            <a href="https://rs.school/js/" target="_blank" rel="noreferrer">
              <img src={LogoRSS} alt="The Rolling Scopes School" />
            </a>
          </div>
          <div className={classes.copyright}>© 2023</div>
        </div>
      </SectionWrapper>
    </footer>
  );
};

export default Footer;
