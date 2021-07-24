export function FormField(props) {
  const { name, internalName, type, value, setData } = props;

  function fieldChange(e) {
    setData((data) => {
      return { ...data, [internalName]: e.target.value };
    });
  }

  if (type === 'textarea')
    return (
      <>
        <label>{name}:</label>
        <br />
        <textarea
          id={internalName}
          name={internalName}
          value={value}
          onChange={fieldChange}
        ></textarea>
        <br />
      </>
    );

  return (
    <>
      <label>{name}:</label>
      <br />
      <input
        type={type}
        id={internalName}
        name={internalName}
        value={value}
        onChange={fieldChange}
      ></input>
      <br />
    </>
  );
}
