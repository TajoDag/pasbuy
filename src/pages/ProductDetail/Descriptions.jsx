export const Descriptions = ({ detail }) => {
  return <div dangerouslySetInnerHTML={{ __html: detail.description }} />;
};
