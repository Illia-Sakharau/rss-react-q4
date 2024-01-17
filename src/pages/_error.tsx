import { SectionHeader } from '@/components/1-atoms/headers/Headers';
import classes from '@/styles/ErrorPage.module.scss';
import { ReactElement } from 'react';
import Button from '@/components/1-atoms/button/Button';
import { NextApiResponse } from 'next/types';

type Props = { statusCode: number };

const Error = ({ statusCode }: Props): ReactElement => {
  function reloadHandler() {
    location.reload();
  }

  return (
    <div className={classes.page}>
      <SectionHeader>{`Error ${statusCode}`}</SectionHeader>
      <Button onClick={reloadHandler}>Reload page</Button>
    </div>
  );
};

interface InitialProps {
  res: NextApiResponse;
  err: NextApiResponse;
}
Error.getInitialProps = ({ res, err }: InitialProps) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
