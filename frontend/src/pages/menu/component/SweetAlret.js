import react from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'




const SweetAlret = () =>{

const MySwal = withReactContent(Swal)

MySwal.fire({
    title: <p>已加入購物車</p>,
    icon: 'success',
    showConfirmButton: false,
    timer: 1500,
    })
}


export default SweetAlret