import { Chip, createStyles, Input, TextInput } from '@mantine/core';
import { useEffect, useState } from "react";
import { GitHubLogoIcon, NotionLogoIcon } from "@modulz/radix-icons";

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


function InputExample() {
    const [value, setValue] = useState(['react']);
    const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })


  return (
    <div className="App">

      <TextInput
        icon= {<GitHubLogoIcon/>}
        rightSection={<NotionLogoIcon/>}
        label="enter firstName"
        description = "Enter your legal firstname"
        error="Name should aplhabets"
        required />
        <Input
        component="select" />

    </div>
  );
}

export default InputExample;
