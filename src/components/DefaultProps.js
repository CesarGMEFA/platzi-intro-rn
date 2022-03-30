import { Text } from "react-native";
import PropTypes from 'prop-types'

function DefaultProps(props) {
  // const {
  //   firstName = "Cesar",
  //   lastName = "Mejias",
  // } = props

  const { firstName, lastName } = props;

  return (
    <>
      <Text>
        Hola {firstName} {lastName}
      </Text>
    </>
  )
}

DefaultProps.defaultProps = {
    firstName: "Cesar",
    lastName: "Mejias",
}

DefaultProps.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}

export { DefaultProps }