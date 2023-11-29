import classes from './style.module.scss';
import { FC, ReactElement } from 'react';
import LogoGitHub from '../../../assets/git-hub-logo.svg';
import LogoRSS from '../../../assets/rss-logo.svg';
import SectionWrapper from '../../1-atoms/sectionWrapper/sectionWrapper';

type Props = unknown;

const Footer: FC<Props> = (): ReactElement => {
  return (
    <footer className={classes.footer}>
      <SectionWrapper className={classes.footerWrapper}>
        <a
          href="https://github.com/Illia-Sakharau"
          target="_blank"
          rel="noreferrer"
          className={classes.item}
        >
          <img src={LogoGitHub} alt="The Rolling Scopes School" />
          <span>Illia-Sakharau</span>
        </a>

        <div className={classes.copyright}>© 2023</div>

        <a
          href="https://rs.school/"
          target="_blank"
          rel="noreferrer"
          className={classes.item}
        >
          <img src={LogoRSS} alt="The Rolling Scopes School" />
        </a>
      </SectionWrapper>
    </footer>
  );
};

export default Footer;
