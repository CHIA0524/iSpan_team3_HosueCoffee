import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function HomeSweetalert() {
    const addsweet = Swal.fire({
        icon: 'success',
        title: '此優惠券已領取',
        showConfirmButton: false,
        timer: 1500
    })
    return (
        <></>
    )
}

export default HomeSweetalert