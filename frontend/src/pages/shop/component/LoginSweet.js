import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function LoginSweet(){

const LoginSweet = Swal.fire({
    icon: 'warning',
    title: '請登入會員',
    showConfirmButton: false,
    timer: 1500
  })
  return(
  <>
  </>
  )
}
  export default LoginSweet