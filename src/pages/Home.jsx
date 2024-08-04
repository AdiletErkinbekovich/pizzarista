import { useDispatch, useSelector } from 'react-redux';
import { Categories, Sort, PizzaCard } from '../components';
import { setCategory } from '../redux/actions/filters.js';

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);

  const onSelectCategory = (index) => {
    dispatch(setCategory(index));
  };

  return (
    <div>
      <div className="container">
        <div className="content__top">
          <Categories
            onClickItem={onSelectCategory}
            items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
          />

          <Sort
            items={[
              { name: 'популярности', type: 'popular' },
              { name: 'цене', type: 'price' },
              { name: 'алфавиту', type: 'alphabet' },
            ]}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {items?.map((obj, index) => (
            <PizzaCard key={index} {...obj} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
