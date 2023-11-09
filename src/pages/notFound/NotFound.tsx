import classes from './style.module.scss';
import { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/button/Button';

type Props = unknown;

const NotFound: FC<Props> = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <div className={classes.page}>
      <div className={classes.message}>
        <div className={classes.code}>404</div>
        <div className={classes.text}>Page Not Found</div>
      </div>
      <Button
        onClick={() => {
          navigate('/');
        }}
      >
        Go Home
      </Button>
    </div>
  );
};

export default NotFound;
