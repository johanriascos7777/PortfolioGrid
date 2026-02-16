import React from 'react';
import styles from './Button.module.scss';

const Button = ({
  id = '',
  buttonClass = 'btnPrimaryLarge',  // ✅ camelCase
  buttonText = 'Más programas',
  ariaLabel,
  href = 'none',
  target = '_self',
  iconRight = false,
  iconLeft = false,
  dark = false,
  full = false,
  onClick
}) => {
  // ✅ Construcción de clases directa (sin mapeo)
  const classes = [
    styles[buttonClass] || styles.btnPrimaryLarge,
    dark && styles.dark,
    iconRight && styles.iconRight,
    iconLeft && styles.iconLeft,
    full && styles.full
  ].filter(Boolean).join(' ');

  const finalAriaLabel = ariaLabel || buttonText;

  // Determinar tamaño para clase de texto
  const size = buttonClass.match(/(Large|Medium|Small)$/)?.[1] || 'Large';
  const textClass = styles[`ss3Button${size}600`];

  // Iconos
  const LeftIcon = iconLeft && (
    <span className={styles.icon} role="img" aria-hidden="true">
      ◀
    </span>
  );

  const RightIcon = iconRight && (
    <span className={styles.icon} role="img" aria-hidden="true">
      ▶
    </span>
  );

  // Contenido
  const buttonContent = (
    <>
      {LeftIcon}
      <span className={textClass}>{buttonText}</span>
      {RightIcon}
    </>
  );

  // Renderizar
  if (href !== 'none') {
    const linkProps = {
      className: classes,
      'aria-label': finalAriaLabel,
      href,
      target,
      id
    };
    if (target === '_blank') {
      linkProps.rel = 'noopener noreferrer';
    }
    return <a {...linkProps}>{buttonContent}</a>;
  }

  return (
    <button
      className={classes}
      aria-label={finalAriaLabel}
      id={id}
      onClick={onClick}
      type="button"
    >
      {buttonContent}
    </button>
  );
};

export default Button;