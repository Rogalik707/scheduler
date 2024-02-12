import React, {useState} from 'react';
import addIcon from '../../assets/img/add_circle.svg';
import deleteIcon from '../../assets/img/delete.svg';

type Props = {
  title: string,
  style?: React.CSSProperties
}
const Window = ({title, style}: Props) => {
  const [isDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleMouseDown = (e) => {
    if (e.target.classList.contains('window-header')) {
      setIsDragging(true);
      setOffsetX(e.clientX - e.target.parentElement.getBoundingClientRect().left);
      setOffsetY(e.clientY - e.target.parentElement.getBoundingClientRect().top);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      e.target.parentElement.style.left = e.clientX - offsetX + 'px';
      e.target.parentElement.style.top = e.clientY - offsetY + 'px';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="window"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={style}
    >
      <div className="window-header" onMouseDown={handleMouseDown}>
        <p className="window-header-title">{title}</p>
      </div>
      <div className="control-panel">
        <div className="control-panel-button-add">
          <img src={addIcon} alt="add"/>
        </div>
        <div className="control-panel-button-delete">
          <img src={deleteIcon} alt="delele"/>
        </div>
      </div>
    </div>
  );
};

export default Window;
