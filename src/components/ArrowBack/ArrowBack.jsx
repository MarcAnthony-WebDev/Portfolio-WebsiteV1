import { Link } from 'react-router-dom';
import { styles } from './ArrowBackStyles';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ArrowBack = () => {
  const classes = styles();

  return (
    <>
      <Link to='/Start'>
        <ArrowBackIcon className={classes.arrowBack} />
      </Link>
    </>
  );
};

export default ArrowBack;
