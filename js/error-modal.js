import {
  isEscapeKey,
  removeElementBySelector,
} from './util.js';

const errorTemplate = document
  .querySelector( '#error' )
  .content.querySelector( '.error' );

const onBackdropClick = ( evt ) => {
  if (
    evt.target.closest( '.error__inner' ) &&
    !evt.target.classList.contains( 'error__button' )
  ) {
    return;
  }
  removeElementBySelector( '.error' );
  document.removeEventListener( 'keydown', onEscKeydown );
};

const showError = () => {
  const errorElement = errorTemplate.cloneNode( true );
  document.body.append( errorElement );
  errorElement.addEventListener( 'click', onBackdropClick );
  document.addEventListener( 'keydown', onEscKeydown );
};

function onEscKeydown( evt ) {
  if ( isEscapeKey( evt ) ) {
    evt.preventDefault();
    onBackdropClick( evt );
  }
}

export {
  showError
};
