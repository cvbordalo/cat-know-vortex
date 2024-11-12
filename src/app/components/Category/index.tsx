import { IndividualCategory } from '@/app/interfaces/categories';

interface CategoryProps {
  category: IndividualCategory;
  isSelected: boolean;
  onClick: () => void;
}

const Category = ({ category, isSelected, onClick }: CategoryProps) => {
  const capitalizeName = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <button
      className={`px-[16px] py-[8px] rounded-[8px] ${
        isSelected ? 'bg-[black]' : 'bg-white'
      } border-2 border-[black]`}
      onClick={onClick}
    >
      <h4
        className={`font-normal text-[16px] ${
          isSelected ? 'text-[white]' : 'text-black'
        }`}
      >
        {capitalizeName(category.name)}
      </h4>
    </button>
  );
};

export default Category;
