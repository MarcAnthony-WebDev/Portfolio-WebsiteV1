import { Link } from 'react-router-dom';
import { styles } from './ArrowBackStyles';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ArrowBack = (props) => {
  const classes = styles();

  return (
    <>
      <Link to='/Start'>
        <ArrowBackIcon
          sx={{ top: `${props.top}` }}
          className={classes.arrowBack}
        />
      </Link>
    </>
  );
};

export default ArrowBack;
