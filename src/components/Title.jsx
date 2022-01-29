import appConfig from '../../config.json';

export default function Title(props) {
  const Tag = props.tag || 'h1';
  
  return (
    <>
    <Tag>{props.children}</Tag>
    <style jsx>{`
      ${Tag} {
        color: ${appConfig.theme.colors.primary['900']};
        font-size: 24px;
        font-weight: 600;
      }    
    `}</style>
    </>
  );
}