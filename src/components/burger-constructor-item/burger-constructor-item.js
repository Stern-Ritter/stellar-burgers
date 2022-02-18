import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { SHIFT_INGREDIENT } from '../../services/actions/burger-constructor'
import styles from "./burger-constructor-item.module.css";

function BurgerConstructorItem({ ingredient, idx, handleClose }) {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const [{isDrag}, dragRef] = useDrag({
    type: 'shiftedIngredient',
    item: { idx },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    })
  });

  const [, dropRef] = useDrop({
    accept: 'shiftedIngredient',
    hover: (item, monitor) => {
      const fromIndex = item.idx;
      const toIndex = idx;
      const dragElementPointerY = monitor.getClientOffset().y;
      const dropElementCoords = ref.current.getBoundingClientRect();
      const dropElementCenterY = (dropElementCoords.top + dropElementCoords.bottom) / 2;

      if((fromIndex < toIndex && dragElementPointerY > dropElementCenterY)
      || (fromIndex > toIndex && dragElementPointerY < dropElementCenterY)) {
        dispatch({ type: SHIFT_INGREDIENT, fromIndex, toIndex });
        item.idx = toIndex;
      }
    }
  });

  dropRef(dragRef(ref));

  return (
    <li ref={ref} className={styles.ingredient + " pl-2 pr-2"}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        handleClose={() => handleClose(idx)}
        thumbnail={ingredient.image}
      />
    </li>
  );
}

export default BurgerConstructorItem;
