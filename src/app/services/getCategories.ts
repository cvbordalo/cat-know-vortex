export const getCategories = async (): Promise<void> => {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/categories');

    if (!response.ok) throw new Error('Failed to get categories');

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error => ', error.message);
    }
  }
};
