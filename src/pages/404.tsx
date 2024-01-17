import classes from '../styles/NotFoundPage.module.scss';
import { FC, ReactElement } from 'react';
import Button from '@/components/1-atoms/button/Button';
import { useRouter } from 'next/router';

type Props = unknown;

const NotFound: FC<Props> = (): ReactElement => {
  const router = useRouter();

  return (
    <div className={classes.page}>
      <div className={classes.message}>
        <div className={classes.code}>404</div>
        <div className={classes.text}>Page Not Found</div>
      </div>
      <Button
        onClick={() => {
          router.push('/');
        }}
      >
        Go Home
      </Button>
    </div>
  );
};

export default NotFound;
