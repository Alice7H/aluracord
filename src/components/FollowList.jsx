import { useState, useEffect } from 'react';
import { Box, Image, Text } from '@skynexui/components';
import appConfig from '../../config.json';
import Loading from '../components/Loading';

export default function FollowList(props) {
  const { user, url } = props;
  const [follows, setFollows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const getGithubfollows = async() => {
      if(url){
        const res = await fetch(url);
        const data = await res.json();
        data && setFollows(data);
        setIsLoading(false);
      }
    }
    getGithubfollows();
  },[url,user])

  const handleClick = (githubLink) => {
    window.open(githubLink, '_ blank');
  }

  return (
    <>
      <Box tag="ul"
        styleSheet={{
          display: 'flex', borderRadius: '18px',
          flexDirection: 'row',flexWrap: 'wrap',
          backgroundColor: appConfig.theme.colors.neutrals['900'],
          color: appConfig.theme.colors.neutrals['600'],
          overflow: 'auto',
        }}
      >
      { isLoading && <Loading user={user} /> }
      { follows.length > 0 && follows.map(follow =>
        <Text
          key={follow?.id || 0}
          tag="li"
          styleSheet={{
            borderRadius: '18px', padding: '6px',paddingTop: '10px',
            hover: {
              backgroundColor: appConfig.theme.colors.neutrals[600],
            },
          }}
        >
          <Box>
            <Image
              styleSheet={{
                display: 'inline-block', borderRadius: '18px', cursor: 'pointer',              
                width: '75px', height: '75px',     
              }}
              src={`https://github.com/${follow?.login}.png`}
              onClick={()=>handleClick(`http://github.com/${follow?.login}`)} 
            />   
          </Box>           
        </Text>  
      )}
      </Box>
    </>
  );
}
