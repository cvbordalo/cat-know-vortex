'use client';

import { useEffect, useState } from 'react';
import { getCategories } from './services/getCategories';
import { CategoriesProps, IndividualCategory } from './interfaces/categories';
import Category from './components/Category';
import { getPhotos } from './services/getPhotos';
import { PhotosProps } from './interfaces/photos';
import CatPhoto from './components/CatPhoto';

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps>(
    [] as CategoriesProps
  );
  const [chosenCategory, setChosenCategory] = useState<IndividualCategory>(
    categories[0]
  );
  const [photos, setPhotos] = useState<PhotosProps>([] as PhotosProps);

  const handleOnSelectCategory = (category: IndividualCategory) => {
    setChosenCategory(category);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesData = await getCategories();

      setCategories(categoriesData as unknown as CategoriesProps);
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchPhotos = async () => {
      const photosData = await getPhotos(chosenCategory);

      setPhotos(photosData as unknown as PhotosProps);
    };

    fetchPhotos();
  }, [chosenCategory]);

  return (
    <>
      <div className="flex flex-wrap gap-2 justify-start mb-8 p-4 md:p-8">
        {categories?.map(category => {
          return (
            <Category
              key={category.id}
              isSelected={category.id === chosenCategory?.id}
              category={category}
              onClick={() => handleOnSelectCategory(category)}
            />
          );
        })}
      </div>
      <div>
        {photos?.map(photo => {
          return <CatPhoto key={photo.id} photo={photo} />;
        })}
      </div>
    </>
  );
}
