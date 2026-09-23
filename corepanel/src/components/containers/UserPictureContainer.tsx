import Avatar from "@mui/material/Avatar";

interface Props {
  imagePath: string,
  userName: string
}



// functions imported from mui docs (https://mui.com/material-ui/react-avatar/)
function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}


function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}


export default function UserPictureContainer({ imagePath, userName }: Props) {

  if (imagePath == "")
    return (
      <Avatar
        {...stringAvatar(userName)}
        sx={{ ...stringAvatar(userName).sx, width: 64, height: 64, fontSize: 22 }}
      />
    );
  else {
    return (
      <Avatar sx={{width: 64, height: 64}} alt="test" src={imagePath} />
    )
  }
}