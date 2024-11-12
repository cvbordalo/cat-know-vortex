import CatPhoto from '@/app/components/CatPhoto';
import { IndividualPhoto } from '@/app/interfaces/photos';
import { getCatDetails } from '@/app/services/getCatDetails';
import Link from 'next/link';
import React from 'react';

interface CatDetailsProps {
  params: IndividualPhoto;
}

const CatDetails = async ({ params }: CatDetailsProps) => {
  const { id } = await params;

  const catDetails = await getCatDetails(id);

  return (
    <div className="flex flex-col md:flex-row md:justify-center p-4 md:p-8">
      <div className="flex justify-center md:flex-[1]">
        <CatPhoto photo={catDetails as unknown as IndividualPhoto} />
      </div>
      <div className="flex-[1] flex flex-col items-start mt-4 md:mt-0 md:ml-8">
        <h1 className="mb-4 text-black text-lg md:text-xl">
          <span className="font-bold">Name: </span>Yellow Cat
        </h1>
        <h1 className="mb-4 text-black text-lg md:text-xl">
          <span className="font-bold">Description: </span>
          The Abyssinian is easy to care for, and a joy to have in your home.
          They&apos;re affectionate cats and love both people and other animals.
        </h1>
        <h1 className="mb-4 text-black text-lg md:text-xl">
          <span className="font-bold">Life Span: </span>11-14
        </h1>
        <h1 className="mb-4 text-black text-lg md:text-xl">
          <span className="font-bold">Origin: </span>Egypt
        </h1>
        <Link
          href={'/'}
          className="text-black font-bold underline mt-6 text-lg md:text-xl"
        >
          Go back
        </Link>
      </div>
    </div>
  );
};

export default CatDetails;
