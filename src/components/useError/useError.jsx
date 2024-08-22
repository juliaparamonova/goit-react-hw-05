import Swal from 'sweetalert2';

const seError = (params = 'Please try again') => {
  Swal.fire({
    position: 'center',
    icon: 'error',
    title: params,
    showConfirmButton: false,
    timer: 1000,
  });
};
export default seError;
