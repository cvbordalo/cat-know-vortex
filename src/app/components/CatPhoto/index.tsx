import { IndividualPhoto } from '@/app/interfaces/photos';
import Image from 'next/image';
import Link from 'next/link';

interface CatPhotoProps {
  photo: IndividualPhoto;
}

const CatPhoto = ({ photo }: CatPhotoProps) => {
  return (
    <div className="flex flex-col">
      <Link href={`/details/${photo?.id}`}>
        <Image
          alt="A cool cat photo!"
          src={photo?.url}
          width={photo?.width}
          height={photo?.height}
          className="rounded-[24px]"
        />
      </Link>
      <div className="flex items-center justify-center mt-8">
        <h1 className="font-normal text-[40px] text-black">
          Cat id: {photo.id}
        </h1>
      </div>
    </div>
  );
};

export default CatPhoto;
