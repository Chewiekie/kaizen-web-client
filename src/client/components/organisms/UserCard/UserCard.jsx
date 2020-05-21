import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  FaEye as ViewIcon,
  FaPen as EditIcon,
  FaTrashAlt as DeleteIcon,
} from 'react-icons/fa';

import ListReadableFields from '../../molecules/ListReadableFields/ListReadableFields';
import ReadableField from '../../atoms/ReadableField/ReadableField';
import Button from '../../atoms/Button/Button';

import './UserCard.scss';

const UserCard = (props) => {
  const {
    data,
    isAdminWhoView,
    linkToViewMore,
    linkToEdit,
    onClickDelete,
    sizeIcons,
  } = props;

  return (
    <article className='user-card ssk--spacing surface__container'>
      <ListReadableFields className='user-card__info'>
        {data.map((item, index) => (
          <ReadableField
            title={item.title}
            description={item.description}
            key={index}
          />
        ))}
      </ListReadableFields>

      <div className='user-card__actions'>
        <Link to={linkToViewMore}>
          <Button
            icon={<ViewIcon size={sizeIcons} />}
            type='icon'
            iconMode='2'
            onClick={() => null}
            color='primary'
            className='ssk--boxShadow'
          />
        </Link>

        {isAdminWhoView && (
          <>
            <Link to={linkToEdit}>
              <Button
                icon={<EditIcon size={sizeIcons} />}
                type='icon'
                iconMode='2'
                onClick={() => null}
                className='ssk--boxShadow'
              />
            </Link>

            <Button
              icon={<DeleteIcon size={sizeIcons} />}
              type='icon'
              iconMode='2'
              onClick={onClickDelete}
              color='warning'
              className='ssk--boxShadow'
            />
          </>
        )}
      </div>
    </article>
  );
};

UserCard.propTypes = {
  /** It is the array of objects to receive descriptive information */
  data: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, description: PropTypes.string }),
  ).isRequired,
  /** It is the administrator who will see the information  */
  isAdminWhoView: PropTypes.bool,
  /** Path to view more user details  */
  linkToViewMore: PropTypes.string,
  /** Path to edit user details */
  linkToEdit: PropTypes.string,
  /** Action to delete specific source */
  onClickDelete: PropTypes.func,
  /** Size of action icons */
  sizeIcons: PropTypes.string,
};

UserCard.defaultProps = {
  isAdminWhoView: false,
  linkToViewMore: '/',
  linkToEdit: '/',
  onClickDelete: undefined,
  sizeIcons: '3em',
};

export default UserCard;
