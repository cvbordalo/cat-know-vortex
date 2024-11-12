import { IndividualCategory } from '../interfaces/categories';

export const getPhotos = async (
  choseCategory: IndividualCategory
): Promise<void> => {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10?breed_ids=${choseCategory.id}`
    );

    if (!response.ok) throw new Error('Failed to get cat photos');

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error => ', error.message);
    }
  }
};
