interface Props {
  imagePath: string
}


export default function UserPictureContainer({imagePath}: Props) {
  return (
          <img src={imagePath} alt=""
          className="h-20 w-20 rounded-4xl" />
  );
}