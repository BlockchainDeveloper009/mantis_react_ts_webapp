import { Chip, createStyles, Input, Text,Title } from '@mantine/core';
import { useEffect, useState } from "react";
import { GitHubLogoIcon, NotionLogoIcon } from "@modulz/radix-icons";
//import { Link } from '@react-router-dom';

const useStyles = createStyles((theme, _params, getRef) => ({
    label: {
      '&[data-checked]': {
        '&, &:hover': {
          backgroundColor: theme.colors.blue[theme.fn.primaryShade()],
          color: theme.white,
        },
  
        [`& .${getRef('iconWrapper')}`]: {
          color: theme.white,
        },
      },
    },
  
    iconWrapper: {
      ref: getRef('iconWrapper'),
    },
  }));


function TitleAndTextExample() {
    const [value, setValue] = useState(['react']);
    const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })


  return (
    <div className="App">
      <Title order={2}>THIS IS A BIG</Title>
      <Text span>Same as below</Text>
      <Text size="lg" weight={700} underline transform="capitalize">Same as below</Text>
      <Text component="span">Same as above</Text>
      <Text 
      variant="gradient"
      gradient={{ from: "red", to: "blue", deg: 130}} > hfgjghghjgjhgjNormal link</Text>
      
      

    </div>
  );
}

export default TitleAndTextExample;
