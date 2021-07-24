import Loader from 'react-loader-spinner';

export function CookbookLoader() {
  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <Loader type="Bars" color="#ed1848" height={100} width={100} />
    </div>
  );
}
