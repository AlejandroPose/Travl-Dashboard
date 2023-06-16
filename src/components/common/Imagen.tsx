export const Imagen = ({url, width, onClick = () => {} }) => {

  return (
    <>
    <img src={`${process.env.PUBLIC_URL}/${url}`} alt='no img' width={width} onClick={() => onClick()}/>
    </>
  );

};