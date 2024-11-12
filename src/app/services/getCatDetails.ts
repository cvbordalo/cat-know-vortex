export const getCatDetails = async (catId: string): Promise<void> => {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/${catId}`
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
