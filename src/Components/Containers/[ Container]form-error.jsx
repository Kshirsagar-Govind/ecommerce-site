const FormError = ({ err }) => {
  return (
    <div className="form-error">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-alert-circle"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        stroke-width="1"
        stroke="#ff2825"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="9" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    </div>
  );
};

export default FormError;
