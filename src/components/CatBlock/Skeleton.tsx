import ContentLoader from 'react-content-loader';
const Skeleton: React.FC = () => {
  return (
    <ContentLoader
      speed={2}
      width={225}
      height={225}
      viewBox='0 0 225 225'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='6' y='17' rx='0' ry='0' width='225' height='225' />
    </ContentLoader>
  );
};
export default Skeleton;
