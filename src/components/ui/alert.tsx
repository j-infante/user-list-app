import { Alert } from "@chakra-ui/react"


interface ErrorAlertProps {
  error: string;
}


const ErrorAlert: React.FC<ErrorAlertProps> = ({ error }) => {
  return (
    <Alert.Root status="error">
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Description>
          {error}
        </Alert.Description>
      </Alert.Content>
    </Alert.Root>
  )
}


export default ErrorAlert;