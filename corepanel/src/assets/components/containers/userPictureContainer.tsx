interface Props {
  imagePath: string
}


export default function UserPictureContainer({imagePath}: Props) {
  return (
      <div className="">
          <img src={imagePath} alt=""
          className="h-32 w-32" />
      </div>
  );
}