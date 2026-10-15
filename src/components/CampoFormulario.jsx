// Un campo de formulario reutilizable: etiqueta + input + mensaje de error.
// Todo llega por props; el componente no guarda estado propio.
function CampoFormulario({ id, etiqueta, valor, error, onChange, onBlur, tipo = "text", ...resto }) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {etiqueta}
      </label>
      <input
        id={id}
        name={id}
        type={tipo}
        className={`form-control${error ? " is-invalid" : ""}`}
        value={valor}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={`error-${id}`}
        {...resto}
      />
      <span className="error text-danger small" id={`error-${id}`}>
        {error}
      </span>
    </div>
  );
}

export default CampoFormulario;
