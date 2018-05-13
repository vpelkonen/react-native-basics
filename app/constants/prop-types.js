import PropTypes from 'prop-types'

/* eslint-disable-next-line import/prefer-default-export */
export const article = PropTypes.shape({
  by: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
})
