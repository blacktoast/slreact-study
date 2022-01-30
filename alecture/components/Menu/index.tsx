import { timeStamp } from 'console';
import React, { useCallback } from 'react';
import { CloseModalButton, CreateMenu } from './styles';

function Menu({ children, style, show, onCloseModal, closeButton }) {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);
  return (
    <CreateMenu onClick={onCloseModal}>
      <div style={style} onClick={stopPropagation}>
        {closeButton && <CloseModalButton onClick={onCloseModal}>&times </CloseModalButton>}
        {children}
      </div>
    </CreateMenu>
  );
}

Menu.defaultProps = {
  closeButton: true,
};

export default Menu;
