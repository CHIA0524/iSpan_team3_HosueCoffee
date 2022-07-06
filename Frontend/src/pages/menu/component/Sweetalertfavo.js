import react from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'




const Sweetalertfavo = () =>{

const MySwal = withReactContent(Swal)

MySwal.fire({
    title: <p>已加入收藏</p>,
    icon: 'success',
    showConfirmButton: false,
    timer: 1500,
    })
}


export default Sweetalertfavo