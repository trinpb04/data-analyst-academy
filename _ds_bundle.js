/* @ds-bundle: {"format":3,"namespace":"DataAnalystAcademyDesignSystem_f0f875","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"ModuleTag","sourcePath":"components/data-display/ModuleTag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SegmentedTabs","sourcePath":"components/navigation/SegmentedTabs.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"7287e358b96d","components/buttons/IconButton.jsx":"1ad486b2e8ec","components/data-display/Avatar.jsx":"68b3aab1e98e","components/data-display/Badge.jsx":"188551106f73","components/data-display/Card.jsx":"ff5db9ff5a56","components/data-display/ModuleTag.jsx":"b8be14ee3597","components/forms/Input.jsx":"eb496677780a","components/navigation/SegmentedTabs.jsx":"71c952a1cb40","ui_kits/encyclopedia/AppHeader.jsx":"5096aa848445","ui_kits/encyclopedia/AtlasView.jsx":"1066f9ca9cbf","ui_kits/encyclopedia/LessonContent.jsx":"ae44033a0345","ui_kits/encyclopedia/LessonsView.jsx":"2375ec6f4b6a","ui_kits/encyclopedia/PathsView.jsx":"a6ea86315741","ui_kits/encyclopedia/ReviseView.jsx":"ac778779db27","ui_kits/encyclopedia/data.js":"d29c370e056c","ui_kits/encyclopedia/icons.jsx":"9633afe60a2c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DataAnalystAcademyDesignSystem_f0f875 = window.DataAnalystAcademyDesignSystem_f0f875 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// build probe
const SIZES = {
  sm: {
    height: 32,
    padding: '0 12px',
    fontSize: 13,
    gap: 6,
    icon: 15
  },
  md: {
    height: 38,
    padding: '0 16px',
    fontSize: 14,
    gap: 8,
    icon: 16
  },
  lg: {
    height: 44,
    padding: '0 20px',
    fontSize: 15,
    gap: 8,
    icon: 18
  }
};
const VARIANTS = {
  ink: {
    background: 'var(--ink)',
    color: 'var(--text-onbrand)',
    border: '1px solid transparent',
    hover: 'var(--ink-hover)'
  },
  brand: {
    background: 'var(--brand)',
    color: 'var(--text-onbrand)',
    border: '1px solid transparent',
    hover: 'var(--brand-hover)'
  },
  secondary: {
    background: 'var(--surface-sunken)',
    color: 'var(--text-strong)',
    border: '1px solid transparent',
    hover: 'var(--surface-hover)'
  },
  outline: {
    background: 'var(--surface-card)',
    color: 'var(--text-strong)',
    border: '1px solid var(--border-strong)',
    hover: 'var(--surface-hover)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body)',
    border: '1px solid transparent',
    hover: 'var(--surface-hover)'
  },
  danger: {
    background: 'var(--danger)',
    color: '#fff',
    border: '1px solid transparent',
    hover: '#cf3535'
  }
};

/**
 * Button — the primary action control.
 * `brand` (teal) is the primary action; `ink` (slate-950) is the dark alternative.
 */
function Button({
  variant = 'brand',
  size = 'md',
  icon = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = 'button',
  style = {},
  children,
  ...props
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.ink;
  const [hover, setHover] = React.useState(false);
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    font: `var(--fw-semibold) ${s.fontSize}px/1 var(--font-sans)`,
    color: v.color,
    backgroundColor: disabled ? 'var(--surface-sunken)' : hover ? v.hover : v.background,
    border: v.border,
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    boxShadow: variant === 'ghost' ? 'none' : 'var(--shadow-xs)',
    transition: 'box-shadow var(--dur-fast) var(--ease-out)',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    ...style
  };
  const iconStyle = {
    width: s.icon,
    height: s.icon,
    display: 'inline-flex',
    flexShrink: 0
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: base,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, props), icon && /*#__PURE__*/React.createElement("span", {
    style: iconStyle
  }, icon), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: iconStyle
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 32,
  md: 38,
  lg: 44
};
const ICON = {
  sm: 16,
  md: 18,
  lg: 20
};

/**
 * IconButton — a square, icon-only button for toolbars and sheet headers
 * (close, refresh, zoom). Always pass an `aria-label`.
 */
function IconButton({
  size = 'md',
  variant = 'ghost',
  disabled = false,
  style = {},
  children,
  ...props
}) {
  const dim = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const variants = {
    ghost: {
      bg: 'transparent',
      hover: 'var(--surface-hover)',
      color: 'var(--text-muted)',
      border: 'transparent'
    },
    outline: {
      bg: 'var(--surface-card)',
      hover: 'var(--surface-hover)',
      color: 'var(--text-body)',
      border: 'var(--border-strong)'
    },
    ink: {
      bg: 'var(--ink)',
      hover: 'var(--ink-hover)',
      color: '#fff',
      border: 'transparent'
    },
    brand: {
      bg: 'var(--brand)',
      hover: 'var(--brand-hover)',
      color: '#fff',
      border: 'transparent'
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: hover ? v.hover : v.bg,
      color: v.color,
      border: `1px solid ${v.border}`,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("span", {
    style: {
      width: ICON[size],
      height: ICON[size],
      display: 'inline-flex'
    }
  }, children));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 28,
  md: 36,
  lg: 44
};

/**
 * Avatar — circular user token. Renders an image, or initials on a tinted disc.
 */
function Avatar({
  src = null,
  name = '',
  size = 'md',
  style = {},
  ...props
}) {
  const dim = SIZES[size] || SIZES.md;
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: dim,
      height: dim,
      flexShrink: 0,
      borderRadius: 'var(--radius-full)',
      background: src ? 'var(--surface-sunken)' : 'var(--brand-soft)',
      color: 'var(--text-link)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: `var(--fw-semibold) ${dim * 0.4}px/1 var(--font-sans)`,
      overflow: 'hidden',
      boxShadow: 'inset 0 0 0 1px rgba(2,8,23,0.06)',
      ...style
    }
  }, props), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '?');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    bg: 'var(--surface-sunken)',
    fg: 'var(--text-body)',
    bd: 'var(--border)'
  },
  brand: {
    bg: 'var(--brand-soft)',
    fg: 'var(--teal-700)',
    bd: 'var(--teal-200)'
  },
  success: {
    bg: 'var(--success-soft)',
    fg: 'var(--success)',
    bd: 'transparent'
  },
  warning: {
    bg: 'var(--warning-soft)',
    fg: 'var(--warning)',
    bd: 'transparent'
  },
  danger: {
    bg: 'var(--danger-soft)',
    fg: 'var(--danger)',
    bd: 'transparent'
  },
  info: {
    bg: 'var(--info-soft)',
    fg: 'var(--info)',
    bd: 'transparent'
  },
  solid: {
    bg: 'var(--ink)',
    fg: '#fff',
    bd: 'transparent'
  }
};

/**
 * Badge — a small status / category pill. Soft tinted fills by default.
 */
function Badge({
  tone = 'neutral',
  dot = false,
  style = {},
  children,
  ...props
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 22,
      padding: '0 9px',
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.bd}`,
      borderRadius: 'var(--radius-full)',
      font: 'var(--fw-semibold) 12px/1 var(--font-sans)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, props), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 9999,
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the base white surface: border, soft shadow, lg radius.
 * Set `interactive` for the hover-lift used by lesson cards.
 */
function Card({
  interactive = false,
  padding = 24,
  accent = null,
  style = {},
  children,
  ...props
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderTop: accent ? `3px solid ${accent}` : '1px solid var(--border)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      padding,
      transition: 'box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...(hover ? {
        borderColor: 'var(--teal-300)'
      } : {}),
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/ModuleTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MODULES = {
  business: {
    c: 'var(--mod-business)',
    s: 'var(--mod-business-soft)',
    label: 'Business'
  },
  excel: {
    c: 'var(--mod-excel)',
    s: 'var(--mod-excel-soft)',
    label: 'Excel'
  },
  statistics: {
    c: 'var(--mod-statistics)',
    s: 'var(--mod-statistics-soft)',
    label: 'Statistics'
  },
  sql: {
    c: 'var(--mod-sql)',
    s: 'var(--mod-sql-soft)',
    label: 'SQL'
  },
  python: {
    c: 'var(--mod-python)',
    s: 'var(--mod-python-soft)',
    label: 'Python'
  },
  powerbi: {
    c: 'var(--mod-powerbi)',
    s: 'var(--mod-powerbi-soft)',
    label: 'Power BI'
  }
};

/**
 * ModuleTag — a chip keyed to one of the six learning modules. The signature
 * categorical color appears as a leading dot (soft) or full fill (solid).
 */
function ModuleTag({
  module = 'sql',
  variant = 'soft',
  children,
  style = {},
  ...props
}) {
  const m = MODULES[module] || MODULES.sql;
  const solid = variant === 'solid';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      height: 24,
      padding: '0 10px',
      background: solid ? m.c : `color-mix(in srgb, ${m.c} 15%, transparent)`,
      color: solid ? '#fff' : m.c,
      borderRadius: 'var(--radius-full)',
      font: 'var(--fw-semibold) 12px/1 var(--font-sans)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, props), !solid && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 9999,
      background: m.c
    }
  }), children || m.label);
}
Object.assign(__ds_scope, { ModuleTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/ModuleTag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    h: 32,
    fs: 13,
    px: 10
  },
  md: {
    h: 38,
    fs: 14,
    px: 12
  },
  lg: {
    h: 44,
    fs: 15,
    px: 14
  }
};

/**
 * Input — single-line text field with optional leading icon and label.
 */
function Input({
  label = null,
  icon = null,
  size = 'md',
  invalid = false,
  hint = null,
  id,
  style = {},
  ...props
}) {
  const s = SIZES[size] || SIZES.md;
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      font: 'var(--fw-medium) 13px/1 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: s.h,
      padding: `0 ${s.px}px`,
      background: 'var(--surface-card)',
      border: `1px solid ${invalid ? 'var(--danger)' : focus ? 'var(--border-focus)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? `0 0 0 3px ${invalid ? 'var(--danger-soft)' : 'var(--ring)'}` : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      color: 'var(--text-muted)',
      display: 'inline-flex',
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    onFocus: e => {
      setFocus(true);
      props.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      props.onBlur?.(e);
    },
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: `var(--fw-regular) ${s.fs}px/1 var(--font-sans)`,
      color: 'var(--text-strong)'
    }
  }, props))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) 12px/1.4 var(--font-sans)',
      color: invalid ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SegmentedTabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SegmentedTabs — the product's primary view switcher (Atlas · Paths ·
 * Lessons · Revise). A pill track with a white, shadowed active segment.
 */
function SegmentedTabs({
  items = [],
  value,
  onChange = () => {},
  style = {},
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: 4,
      backgroundColor: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-lg)',
      ...style
    }
  }, props), items.map(it => {
    const active = it.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange(it.id),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        height: 32,
        padding: '0 16px',
        border: 'none',
        borderRadius: 'var(--radius-md)',
        backgroundColor: active ? 'var(--surface-raised)' : 'transparent',
        boxShadow: active ? 'var(--shadow-sm)' : 'none',
        color: active ? 'var(--text-strong)' : 'var(--text-muted)',
        font: 'var(--fw-medium) 14px/1 var(--font-sans)',
        cursor: 'pointer',
        transition: 'none',
        whiteSpace: 'nowrap'
      }
    }, it.icon && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 16,
        height: 16,
        display: 'inline-flex'
      }
    }, it.icon), it.label);
  }));
}
Object.assign(__ds_scope, { SegmentedTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SegmentedTabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/encyclopedia/AppHeader.jsx
try { (() => {
/* AppHeader — brand lockup, view switcher, module legend. */
function AppHeader({
  tab,
  onTab,
  theme,
  onToggleTheme
}) {
  const {
    SegmentedTabs,
    IconButton
  } = window.DataAnalystAcademyDesignSystem_f0f875;
  const I = window.Icons;
  const items = [{
    id: 'atlas',
    label: 'Atlas',
    icon: /*#__PURE__*/React.createElement(I.Map, null)
  }, {
    id: 'paths',
    label: 'Paths',
    icon: /*#__PURE__*/React.createElement(I.Route, null)
  }, {
    id: 'lessons',
    label: 'Lessons',
    icon: /*#__PURE__*/React.createElement(I.List, null)
  }, {
    id: 'revise',
    label: 'Revise',
    icon: /*#__PURE__*/React.createElement(I.Refresh, null)
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 'var(--header-h)',
      flexShrink: 0,
      zIndex: 10,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border)',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "daa-lockup",
    style: {
      minWidth: 200
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: theme === 'dark' ? '../../assets/logo-mark-dark.png' : '../../assets/logo-mark-light.png',
    alt: "",
    style: {
      width: 34,
      height: 34
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "daa-lockup__name"
  }, "Data Analyst"), /*#__PURE__*/React.createElement("span", {
    className: "daa-lockup__eyebrow"
  }, "Encyclopedia"))), /*#__PURE__*/React.createElement(SegmentedTabs, {
    value: tab,
    onChange: onTab,
    items: items
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      minWidth: 200,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "daa-legend",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, window.ATLAS.modules.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: 9999,
      background: m.color
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-meta)',
      color: 'var(--text-muted)'
    }
  }, m.label.split(' ')[0])))), /*#__PURE__*/React.createElement(IconButton, {
    variant: "outline",
    "aria-label": theme === 'dark' ? 'Chế độ sáng' : 'Chế độ tối',
    onClick: onToggleTheme
  }, theme === 'dark' ? /*#__PURE__*/React.createElement(I.Sun, null) : /*#__PURE__*/React.createElement(I.Moon, null))));
}
window.AppHeader = AppHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/encyclopedia/AppHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/encyclopedia/AtlasView.jsx
try { (() => {
/* AtlasView — the knowledge graph canvas + sliding encyclopedia sidebar.
   The real product renders this with react-force-graph-2d; here we lay the
   same clustered, glowing, module-colored nodes out as static SVG. */
function AtlasView() {
  const {
    IconButton,
    ModuleTag,
    Button
  } = window.DataAnalystAcademyDesignSystem_f0f875;
  const I = window.Icons;
  const A = window.ATLAS;
  const [active, setActive] = React.useState(null);
  const W = 1060,
    H = 640;
  const byId = Object.fromEntries(A.nodes.map(n => [n.id, n]));
  const colorOf = m => A.modules.find(x => x.id === m).color;
  const entry = active ? A.lessons[active.id] : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--graph-bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)',
      backgroundSize: '26px 26px',
      opacity: 0.7
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    preserveAspectRatio: "xMidYMid meet",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%'
    }
  }, A.clusters.map(c => /*#__PURE__*/React.createElement("text", {
    key: c.label,
    x: c.x,
    y: c.y,
    textAnchor: "middle",
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    fontSize: "15",
    style: {
      fill: 'var(--graph-cluster)'
    },
    letterSpacing: "0.5"
  }, c.label)), A.links.map(([s, t], i) => {
    const a = byId[s],
      b = byId[t];
    if (!a || !b) return null;
    return /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: a.x,
      y1: a.y,
      x2: b.x,
      y2: b.y,
      style: {
        stroke: 'var(--graph-link)'
      },
      strokeWidth: "1"
    });
  }), A.nodes.map(n => {
    const c = colorOf(n.m);
    const isActive = active && active.id === n.id;
    return /*#__PURE__*/React.createElement("g", {
      key: n.id,
      style: {
        cursor: 'pointer'
      },
      onClick: () => setActive(n)
    }, /*#__PURE__*/React.createElement("circle", {
      cx: n.x,
      cy: n.y,
      r: n.v + 7,
      fill: c,
      opacity: isActive ? 0.28 : 0.16
    }), /*#__PURE__*/React.createElement("circle", {
      cx: n.x,
      cy: n.y,
      r: n.v,
      fill: c,
      strokeWidth: "1.5",
      style: {
        stroke: 'var(--graph-node-stroke)'
      }
    }), /*#__PURE__*/React.createElement("text", {
      x: n.x,
      y: n.y + n.v + 12,
      textAnchor: "middle",
      fontFamily: "Inter, sans-serif",
      fontWeight: isActive ? 600 : 500,
      fontSize: "11",
      style: {
        fill: 'var(--graph-label-text)'
      }
    }, n.t));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 22,
      left: '50%',
      transform: 'translateX(-50%)',
      font: 'var(--type-meta)',
      color: 'var(--text-muted)',
      pointerEvents: 'none',
      letterSpacing: '0.02em'
    }
  }, "Cu\u1ED9n \u0111\u1EC3 Zoom \u2022 K\xE9o \u0111\u1EC3 Di chuy\u1EC3n \u2022 Nh\u1EA5n v\xE0o Node \u0111\u1EC3 h\u1ECDc"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      width: 'var(--sidebar-w)',
      maxWidth: '92%',
      background: 'var(--surface-card)',
      borderLeft: '1px solid var(--border)',
      boxShadow: 'var(--shadow-2xl)',
      transform: active ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform var(--dur-slow) var(--ease-out)',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 20
    }
  }, active && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 16px',
      borderBottom: '1px solid var(--border)',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      color: colorOf(active.m),
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(I.Book, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-title)',
      color: 'var(--text-strong)'
    }
  }, active.t)), /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "\u0110\xF3ng",
    onClick: () => setActive(null)
  }, /*#__PURE__*/React.createElement(I.X, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(ModuleTag, {
    module: active.m
  }), entry && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-meta)',
      color: 'var(--text-faint)'
    }
  }, entry.cluster)), entry && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      marginBottom: 20,
      paddingLeft: 12,
      borderLeft: `3px solid ${colorOf(active.m)}`
    }
  }, entry.summary), /*#__PURE__*/React.createElement(LessonContent, {
    entry: entry,
    accent: colorOf(active.m)
  }), entry && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 24,
      paddingTop: 20,
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    icon: /*#__PURE__*/React.createElement(I.Check, null)
  }, "\u0110\xE1nh d\u1EA5u \u0111\xE3 h\u1ECDc"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: /*#__PURE__*/React.createElement(I.Star, null),
    "aria-label": "Bookmark"
  }))))));
}
window.AtlasView = AtlasView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/encyclopedia/AtlasView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/encyclopedia/LessonContent.jsx
try { (() => {
/* LessonContent — renders a structured encyclopedia entry. Supports:
   {h, p} heading+prose · {p} prose · {list:[[term,def]]} glossary ·
   {code, lang} code block · {formula, caption} equation card ·
   {calc, steps:[]} worked calculation · {note} callout/quote. */
function LessonContent({
  entry,
  accent = 'var(--brand)'
}) {
  if (!entry) {
    return /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--type-body)',
        color: 'var(--text-muted)'
      }
    }, "N\u1ED9i dung b\xE0i h\u1ECDc \u0111ang \u0111\u01B0\u1EE3c bi\xEAn so\u1EA1n. Ch\u1ECDn m\u1ED9t node kh\xE1c tr\xEAn Atlas \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u h\u1ECDc.");
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, entry.body.map((blk, i) => {
    if (blk.code) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          position: 'relative'
        }
      }, blk.lang && /*#__PURE__*/React.createElement("span", {
        style: {
          position: 'absolute',
          top: 10,
          right: 12,
          font: 'var(--type-meta)',
          fontSize: 10,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--slate-400)'
        }
      }, blk.lang), /*#__PURE__*/React.createElement("pre", {
        style: {
          margin: 0,
          background: 'var(--slate-950)',
          color: '#e2e8f0',
          padding: '16px 18px',
          borderRadius: 'var(--radius-lg)',
          font: 'var(--type-code)',
          fontSize: 13,
          lineHeight: 1.65,
          overflowX: 'auto',
          whiteSpace: 'pre'
        },
        dangerouslySetInnerHTML: {
          __html: highlightCode(blk.code)
        }
      }));
    }
    if (blk.formula) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          background: 'var(--surface-sunken)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          padding: '20px 16px',
          textAlign: 'center'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          font: 'var(--fw-medium) 19px/1.5 var(--font-mono)',
          color: 'var(--text-strong)',
          whiteSpace: 'pre-wrap'
        }
      }, blk.formula), blk.caption && /*#__PURE__*/React.createElement("div", {
        style: {
          font: 'var(--type-meta)',
          color: 'var(--text-muted)',
          marginTop: 10
        }
      }, blk.caption));
    }
    if (blk.calc) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '8px 14px',
          background: 'var(--surface-sunken)',
          borderBottom: '1px solid var(--border)',
          font: 'var(--fw-semibold) 12px/1 var(--font-sans)',
          color: 'var(--text-strong)',
          textTransform: 'uppercase',
          letterSpacing: '0.04em'
        }
      }, blk.calc), /*#__PURE__*/React.createElement("div", {
        style: {
          padding: 14,
          display: 'flex',
          flexDirection: 'column',
          gap: 6
        }
      }, blk.steps.map((s, j) => /*#__PURE__*/React.createElement("div", {
        key: j,
        style: {
          font: 'var(--type-code)',
          color: j === blk.steps.length - 1 ? 'var(--text-strong)' : 'var(--text-body)',
          fontWeight: j === blk.steps.length - 1 ? 600 : 400
        }
      }, s))));
    }
    if (blk.note) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          background: 'var(--brand-soft)',
          borderLeft: `3px solid ${accent}`,
          borderRadius: '0 var(--radius-md) var(--radius-md) 0',
          padding: '12px 16px'
        }
      }, /*#__PURE__*/React.createElement("p", {
        style: {
          font: 'var(--fw-medium) 14px/1.6 var(--font-sans)',
          color: 'var(--note-text)'
        }
      }, blk.note));
    }
    if (blk.list) {
      return /*#__PURE__*/React.createElement("ul", {
        key: i,
        style: {
          margin: 0,
          padding: 0,
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: 10
        }
      }, blk.list.map(([term, def], j) => /*#__PURE__*/React.createElement("li", {
        key: j,
        style: {
          display: 'flex',
          gap: 10,
          alignItems: 'baseline'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          flexShrink: 0,
          width: 6,
          height: 6,
          borderRadius: 9999,
          background: accent,
          transform: 'translateY(-2px)'
        }
      }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--fw-semibold) 14px/1.5 var(--font-sans)',
          color: 'var(--text-strong)'
        }
      }, term), /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-body)',
          fontSize: 14,
          color: 'var(--text-body)'
        }
      }, def ? ' — ' + def : '')))));
    }
    return /*#__PURE__*/React.createElement("div", {
      key: i
    }, blk.h && /*#__PURE__*/React.createElement("h3", {
      style: {
        font: 'var(--type-h3)',
        color: 'var(--text-strong)',
        marginBottom: 8
      }
    }, blk.h), blk.p && /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--type-body)',
        fontSize: 15,
        color: 'var(--text-body)'
      }
    }, blk.p));
  }), entry.source && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-meta)',
      color: 'var(--text-faint)',
      fontStyle: 'italic',
      marginTop: 4
    }
  }, entry.source));
}

/* Lightweight SQL/Python/DAX keyword highlighter for the dark code blocks.
   Single-pass tokenizer so inserted markup is never re-processed. */
function highlightCode(code) {
  const esc = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const token = /(--[^\n]*|#[^\n]*)|('[^']*'|"[^"]*")|\b(SELECT|FROM|WHERE|GROUP BY|ORDER BY|HAVING|JOIN|LEFT|RIGHT|INNER|FULL|OUTER|ON|AS|AND|OR|NOT|IN|DESC|ASC|OVER|PARTITION BY|WITH|CASE|WHEN|THEN|ELSE|END|import|def|return|for|in|if|else|None|True|False|CALCULATE|SUMX|AVERAGEX|FILTER|DIVIDE|VAR|RETURN|SAMEPERIODLASTYEAR|SUM|COUNT|AVG|RANK|REFERENCES)\b/g;
  return esc.replace(token, (m, comment, str, kw) => {
    if (comment) return '<span style="color:#64748b">' + comment + '</span>';
    if (str) return '<span style="color:#f2c811">' + str + '</span>';
    if (kw) return '<span style="color:#5fd3ba">' + kw + '</span>';
    return m;
  });
}
window.LessonContent = LessonContent;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/encyclopedia/LessonContent.jsx", error: String((e && e.message) || e) }); }

// ui_kits/encyclopedia/LessonsView.jsx
try { (() => {
/* LessonsView — module-grouped lesson library, with a reading view. */
function LessonsView() {
  const {
    Card,
    ModuleTag,
    Button,
    Badge,
    Input
  } = window.DataAnalystAcademyDesignSystem_f0f875;
  const I = window.Icons;
  const A = window.ATLAS;
  const [reading, setReading] = React.useState(null);
  if (reading) {
    const entry = A.lessons[reading.id];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--surface-page)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 24px',
        background: 'var(--surface-card)',
        borderBottom: '1px solid var(--border)',
        boxShadow: 'var(--shadow-xs)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(ModuleTag, {
      module: reading.m
    }), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: 'var(--type-h2)',
        color: 'var(--text-strong)'
      }
    }, reading.t)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      onClick: () => setReading(null)
    }, "\u2190 Back to Lessons"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      icon: /*#__PURE__*/React.createElement(I.Check, null)
    }, "\u0110\xE1nh d\u1EA5u \u0111\xE3 h\u1ECDc"))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '40px 24px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 760,
        margin: '0 auto',
        background: 'var(--surface-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-sm)',
        padding: 36
      }
    }, entry && /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--type-body)',
        color: 'var(--text-body)',
        marginBottom: 24,
        paddingLeft: 14,
        borderLeft: `3px solid ${A.modules.find(m => m.id === reading.m).color}`
      }
    }, entry.summary), /*#__PURE__*/React.createElement(LessonContent, {
      entry: entry,
      accent: A.modules.find(m => m.id === reading.m).color
    }))));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      background: 'var(--surface-page)',
      padding: '40px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2)',
      color: 'var(--text-strong)',
      marginBottom: 10
    }
  }, "Lessons & Materials"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-muted)',
      maxWidth: 560,
      margin: '0 auto 20px'
    }
  }, "Browse the comprehensive encyclopedia of Data Analytics. Select a topic to read the detailed lesson."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 380,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: /*#__PURE__*/React.createElement(I.Search, null),
    placeholder: "Search 24 lessons across 6 modules\u2026"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 36
    }
  }, A.modules.map(mod => {
    const nodes = A.nodes.filter(n => n.m === mod.id);
    return /*#__PURE__*/React.createElement("div", {
      key: mod.id
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        borderBottom: '1px solid var(--border)',
        paddingBottom: 8,
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: 9999,
        background: mod.color
      }
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        font: 'var(--type-h3)',
        color: 'var(--text-strong)'
      }
    }, mod.label), /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, nodes.length, " lessons")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
        gap: 14
      }
    }, nodes.map(node => {
      const hasContent = !!A.lessons[node.id];
      return /*#__PURE__*/React.createElement(Card, {
        key: node.id,
        interactive: true,
        padding: 18,
        onClick: () => setReading(node),
        style: {
          display: 'flex',
          flexDirection: 'column',
          minHeight: 124
        }
      }, /*#__PURE__*/React.createElement("h4", {
        style: {
          font: 'var(--type-title)',
          color: 'var(--text-strong)',
          marginBottom: 6
        }
      }, node.t), /*#__PURE__*/React.createElement("p", {
        style: {
          font: 'var(--type-meta)',
          color: 'var(--text-muted)',
          flex: 1
        }
      }, hasContent ? A.lessons[node.id].summary.slice(0, 64) + '…' : 'Mở để xem lý thuyết & ví dụ.'), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 14
        }
      }, /*#__PURE__*/React.createElement(ModuleTag, {
        module: mod.id
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-meta)',
          color: 'var(--text-link)'
        }
      }, "Read \u2192")));
    })));
  }))));
}
window.LessonsView = LessonsView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/encyclopedia/LessonsView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/encyclopedia/PathsView.jsx
try { (() => {
/* PathsView — the sequential roadmap as a vertical timeline. */
function PathsView() {
  const {
    Button
  } = window.DataAnalystAcademyDesignSystem_f0f875;
  const I = window.Icons;
  const steps = [{
    n: '1',
    title: 'Business Acumen & Foundations',
    desc: 'Hiểu bài toán kinh doanh, KPI và tư duy phân tích trước khi chạm vào dữ liệu.',
    color: '#e53e3e',
    icon: /*#__PURE__*/React.createElement(I.Compass, null)
  }, {
    n: '2',
    title: 'Master Spreadsheets (Excel)',
    desc: 'Thành thạo công cụ phổ biến nhất: VLOOKUP, Pivot Table, Power Query.',
    color: '#107c41',
    icon: /*#__PURE__*/React.createElement(I.Sheet, null)
  }, {
    n: '3',
    title: 'Statistics & Probability',
    desc: 'Nền tảng toán học để tránh bị dữ liệu đánh lừa (A/B Testing, Distributions).',
    color: '#805ad5',
    icon: /*#__PURE__*/React.createElement(I.Trend, null)
  }, {
    n: '4',
    title: 'SQL & Databases',
    desc: 'Trích xuất dữ liệu từ Database. Thành thạo JOINs, Window Functions.',
    color: '#0078d7',
    icon: /*#__PURE__*/React.createElement(I.Database, null)
  }, {
    n: '5',
    title: 'DataViz & Power BI',
    desc: 'Kể chuyện với dữ liệu. Xây dựng Data Model (Star Schema) và Dashboards.',
    color: '#f2c811',
    icon: /*#__PURE__*/React.createElement(I.Chart, null)
  }, {
    n: '6',
    title: 'Python for Data (Advanced)',
    desc: 'Tự động hóa, xử lý dữ liệu lớn bằng Pandas và Machine Learning cơ bản.',
    color: '#4b8bbe',
    icon: /*#__PURE__*/React.createElement(I.Code, null)
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      background: 'var(--surface-page)',
      padding: '48px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-display)',
      color: 'var(--text-strong)',
      marginBottom: 12
    }
  }, "The Data Analyst Roadmap"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-muted)',
      maxWidth: 540,
      margin: '0 auto'
    }
  }, "H\u1ECDc theo l\u1ED9 tr\xECnh tu\u1EA7n t\u1EF1 n\xE0y s\u1EBD gi\xFAp b\u1EA1n x\xE2y d\u1EF1ng n\u1EC1n t\u1EA3ng v\u1EEFng ch\u1EAFc nh\u1EA5t. \u0110\u1EEBng v\u1ED9i h\u1ECDc Python khi ch\u01B0a r\xE0nh Excel v\xE0 Business.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderLeft: '2px solid var(--border)',
      marginLeft: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 36
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative',
      paddingLeft: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -22,
      top: 2,
      width: 42,
      height: 42,
      borderRadius: 9999,
      background: 'var(--surface-card)',
      border: `4px solid ${s.color}`,
      color: s.color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      display: 'inline-flex'
    }
  }, s.icon)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-sm)',
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-meta)',
      color: s.color,
      marginBottom: 4
    }
  }, "STEP ", s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)',
      color: 'var(--text-strong)',
      marginBottom: 6
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      fontSize: 15,
      color: 'var(--text-body)',
      marginBottom: 14
    }
  }, s.desc), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(I.Arrow, null),
    style: {
      color: 'var(--text-link)',
      padding: '0 4px'
    }
  }, "Xem b\xE0i h\u1ECDc thu\u1ED9c h\u1ECDc ph\u1EA7n n\xE0y")))))));
}
window.PathsView = PathsView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/encyclopedia/PathsView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/encyclopedia/ReviseView.jsx
try { (() => {
/* ReviseView — quick-reference cheat sheets for interviews & daily tasks. */
function ReviseView() {
  const {
    Card,
    ModuleTag,
    Badge
  } = window.DataAnalystAcademyDesignSystem_f0f875;
  const sheets = [{
    m: 'sql',
    title: 'SQL Quick Reference',
    items: ['SELECT · FROM · WHERE · GROUP BY', 'JOINs — INNER, LEFT, RIGHT, FULL', 'Window Functions — ROW_NUMBER, RANK', 'CTEs — WITH name AS (...)']
  }, {
    m: 'excel',
    title: 'Excel Power Functions',
    items: ['XLOOKUP / INDEX + MATCH', 'SUMIFS · COUNTIFS · AVERAGEIFS', 'Pivot Tables & Slicers', 'Power Query — unpivot, merge']
  }, {
    m: 'statistics',
    title: 'Stats for Interviews',
    items: ['Mean vs Median vs Mode', 'Normal distribution & z-score', 'p-value < 0.05 ⇒ reject H₀', 'Correlation ≠ Causation']
  }, {
    m: 'python',
    title: 'Pandas Cheat Sheet',
    items: ['df.groupby().agg()', 'df.merge(other, on=...)', 'df.pivot_table()', 'df.loc / df.iloc selection']
  }, {
    m: 'powerbi',
    title: 'DAX Essentials',
    items: ['CALCULATE — modify filter context', 'SUMX / AVERAGEX iterators', 'Time intelligence — TOTALYTD', 'Star schema > flat tables']
  }, {
    m: 'business',
    title: 'Metrics Glossary',
    items: ['AOV · CAC · LTV · Churn', 'MRR · ARR · NRR (SaaS)', 'CTR · ROAS (Marketing)', 'AARRR — pirate metrics']
  }];
  const colorOf = id => window.ATLAS.modules.find(m => m.id === id).color;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      background: 'var(--surface-page)',
      padding: '40px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2)',
      color: 'var(--text-strong)',
      marginBottom: 6
    }
  }, "Revision & Cheat Sheets"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-muted)',
      marginBottom: 28
    }
  }, "Quick references for interviews and daily tasks."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: 16
    }
  }, sheets.map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    accent: colorOf(s.m),
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-title)',
      color: 'var(--text-strong)'
    }
  }, s.title), /*#__PURE__*/React.createElement(ModuleTag, {
    module: s.m
  })), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, s.items.map((it, j) => /*#__PURE__*/React.createElement("li", {
    key: j,
    style: {
      display: 'flex',
      gap: 9,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: 9999,
      background: colorOf(s.m),
      marginTop: 7,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-code)',
      color: 'var(--text-body)'
    }
  }, it)))))))));
}
window.ReviseView = ReviseView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/encyclopedia/ReviseView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/encyclopedia/data.js
try { (() => {
/* Data Analyst Academy — Atlas content for the UI kit.
   Titles & bilingual copy mirror the real codebase content modules
   (src/content/*.ts). Positions are hand-laid clusters for a static
   knowledge-graph canvas. Lesson bodies carry real theory, formulas,
   worked calculations and runnable code so a learner can actually study. */
window.ATLAS = {
  modules: [{
    id: 'business',
    label: 'Business & Analysis',
    color: '#e53e3e',
    soft: '#fdeaea'
  }, {
    id: 'excel',
    label: 'Excel',
    color: '#107c41',
    soft: '#e4f3eb'
  }, {
    id: 'statistics',
    label: 'Statistics',
    color: '#805ad5',
    soft: '#efeafb'
  }, {
    id: 'sql',
    label: 'SQL',
    color: '#0078d7',
    soft: '#e3f0fb'
  }, {
    id: 'python',
    label: 'Python',
    color: '#4b8bbe',
    soft: '#eaf1f7'
  }, {
    id: 'powerbi',
    label: 'DataViz & Power BI',
    color: '#f2c811',
    soft: '#fdf6dc'
  }],
  clusters: [{
    module: 'business',
    label: 'BUSINESS ACUMEN',
    x: 215,
    y: 120
  }, {
    module: 'excel',
    label: 'SPREADSHEETS',
    x: 540,
    y: 95
  }, {
    module: 'statistics',
    label: 'STATISTICS',
    x: 845,
    y: 140
  }, {
    module: 'sql',
    label: 'SQL & DATABASES',
    x: 220,
    y: 470
  }, {
    module: 'powerbi',
    label: 'DATAVIZ & POWER BI',
    x: 540,
    y: 520
  }, {
    module: 'python',
    label: 'PYTHON FOR DATA',
    x: 845,
    y: 475
  }],
  nodes: [{
    id: 'bus-intro',
    m: 'business',
    t: 'What is Data Analytics?',
    x: 150,
    y: 70,
    v: 9
  }, {
    id: 'bus-problem',
    m: 'business',
    t: 'Problem Formulation',
    x: 270,
    y: 130,
    v: 7
  }, {
    id: 'bus-kpi',
    m: 'business',
    t: 'Metrics & KPIs',
    x: 145,
    y: 175,
    v: 7
  }, {
    id: 'bus-frame',
    m: 'business',
    t: 'Analytical Frameworks',
    x: 290,
    y: 215,
    v: 6
  }, {
    id: 'ex-formulas',
    m: 'excel',
    t: 'Core Formulas',
    x: 470,
    y: 60,
    v: 8
  }, {
    id: 'ex-pivot',
    m: 'excel',
    t: 'Pivot Tables',
    x: 590,
    y: 75,
    v: 8
  }, {
    id: 'ex-pq',
    m: 'excel',
    t: 'Power Query',
    x: 520,
    y: 150,
    v: 7
  }, {
    id: 'ex-pp',
    m: 'excel',
    t: 'Power Pivot & DAX',
    x: 630,
    y: 165,
    v: 6
  }, {
    id: 'stat-desc',
    m: 'statistics',
    t: 'Descriptive Stats',
    x: 800,
    y: 90,
    v: 8
  }, {
    id: 'stat-prob',
    m: 'statistics',
    t: 'Probability',
    x: 905,
    y: 120,
    v: 7
  }, {
    id: 'stat-infer',
    m: 'statistics',
    t: 'Inferential Stats',
    x: 825,
    y: 185,
    v: 7
  }, {
    id: 'stat-abtest',
    m: 'statistics',
    t: 'A/B Testing',
    x: 930,
    y: 205,
    v: 6
  }, {
    id: 'sql-intro',
    m: 'sql',
    t: 'RDBMS Basics',
    x: 150,
    y: 430,
    v: 7
  }, {
    id: 'sql-query',
    m: 'sql',
    t: 'Basic Queries',
    x: 265,
    y: 440,
    v: 9
  }, {
    id: 'sql-joins',
    m: 'sql',
    t: 'JOINs',
    x: 175,
    y: 510,
    v: 9
  }, {
    id: 'sql-window',
    m: 'sql',
    t: 'Window Functions',
    x: 300,
    y: 525,
    v: 7
  }, {
    id: 'sql-etl',
    m: 'sql',
    t: 'ETL & Warehousing',
    x: 205,
    y: 575,
    v: 6
  }, {
    id: 'pbi-prep',
    m: 'powerbi',
    t: 'Data Prep',
    x: 475,
    y: 480,
    v: 7
  }, {
    id: 'pbi-model',
    m: 'powerbi',
    t: 'Star Schema',
    x: 590,
    y: 490,
    v: 8
  }, {
    id: 'pbi-dax',
    m: 'powerbi',
    t: 'DAX Measures',
    x: 520,
    y: 560,
    v: 7
  }, {
    id: 'pbi-viz',
    m: 'powerbi',
    t: 'Dashboards',
    x: 615,
    y: 565,
    v: 7
  }, {
    id: 'py-pandas',
    m: 'python',
    t: 'Pandas',
    x: 800,
    y: 430,
    v: 9
  }, {
    id: 'py-eda',
    m: 'python',
    t: 'EDA',
    x: 910,
    y: 455,
    v: 7
  }, {
    id: 'py-viz',
    m: 'python',
    t: 'Matplotlib',
    x: 830,
    y: 520,
    v: 6
  }, {
    id: 'py-ml',
    m: 'python',
    t: 'Intro to ML',
    x: 925,
    y: 540,
    v: 7
  }],
  links: [['bus-intro', 'bus-problem'], ['bus-problem', 'bus-kpi'], ['bus-kpi', 'bus-frame'], ['bus-intro', 'bus-kpi'], ['ex-formulas', 'ex-pivot'], ['ex-pivot', 'ex-pq'], ['ex-pq', 'ex-pp'], ['ex-formulas', 'ex-pq'], ['stat-desc', 'stat-prob'], ['stat-prob', 'stat-infer'], ['stat-infer', 'stat-abtest'], ['sql-intro', 'sql-query'], ['sql-query', 'sql-joins'], ['sql-joins', 'sql-window'], ['sql-window', 'sql-etl'], ['pbi-prep', 'pbi-model'], ['pbi-model', 'pbi-dax'], ['pbi-dax', 'pbi-viz'], ['pbi-model', 'pbi-viz'], ['py-pandas', 'py-eda'], ['py-eda', 'py-viz'], ['py-eda', 'py-ml'], ['bus-kpi', 'stat-desc'], ['bus-problem', 'sql-intro'], ['ex-formulas', 'sql-query'], ['ex-pq', 'pbi-prep'], ['ex-pp', 'pbi-model'], ['sql-query', 'py-pandas'], ['sql-etl', 'pbi-prep'], ['stat-desc', 'py-eda'], ['stat-infer', 'py-ml'], ['py-eda', 'pbi-viz']],
  lessons: {
    /* ─────────────── BUSINESS & ANALYSIS ─────────────── */
    'bus-intro': {
      cluster: 'BUSINESS ACUMEN',
      summary: 'Data Analytics là quá trình biến dữ liệu thô thành quyết định kinh doanh (data-driven decision making).',
      source: 'Nguồn: Data Analytics Made Accessible.',
      body: [{
        h: 'Khái niệm cơ bản',
        p: 'Data Analytics là quá trình thu thập, xử lý và phân tích dữ liệu để đưa ra quyết định kinh doanh. Mục tiêu cuối cùng không phải là biểu đồ đẹp — mà là một quyết định tốt hơn.'
      }, {
        h: '4 loại phân tích',
        p: 'Mỗi loại trả lời một câu hỏi khác nhau và khó dần lên:'
      }, {
        list: [['Descriptive', 'Chuyện gì đã xảy ra? (Báo cáo, Dashboard).'], ['Diagnostic', 'Tại sao nó xảy ra? (Phân tích nguyên nhân gốc rễ).'], ['Predictive', 'Chuyện gì sẽ xảy ra tiếp? (Dự báo, Machine Learning).'], ['Prescriptive', 'Nên làm gì? (Tối ưu hóa, đề xuất hành động).']]
      }, {
        note: 'Phần lớn giá trị doanh nghiệp đến từ Descriptive + Diagnostic. Đừng vội nhảy sang ML khi báo cáo cơ bản còn chưa vững.'
      }]
    },
    'bus-problem': {
      cluster: 'BUSINESS ACUMEN',
      summary: 'Bước quan trọng nhất của Data Analyst không phải là code, mà là hiểu đúng bài toán kinh doanh.',
      body: [{
        h: 'Problem Formulation',
        p: 'Một câu hỏi mơ hồ ("doanh số dạo này sao rồi?") luôn dẫn tới phân tích lãng phí. Hãy diễn đạt lại bài toán theo khung SMART:'
      }, {
        list: [['Specific', 'Cụ thể — về sản phẩm/khu vực/khoảng thời gian nào?'], ['Measurable', 'Đo lường được bằng một metric rõ ràng.'], ['Actionable', 'Kết quả có thể dẫn tới hành động.'], ['Relevant', 'Liên quan tới mục tiêu chiến lược.'], ['Time-bound', 'Có thời hạn / khung thời gian.']]
      }, {
        note: '"Tỷ lệ chuyển đổi (conversion rate) của khách mới trên mobile trong Q2 có giảm so với Q1 không?" — đó mới là một câu hỏi phân tích được.'
      }]
    },
    'bus-kpi': {
      cluster: 'BUSINESS ACUMEN',
      summary: 'Không phải con số nào cũng là KPI. KPI là những metric quan trọng nhất gắn với chiến lược.',
      body: [{
        h: 'Metric vs KPI',
        p: 'Metric là bất cứ con số nào bạn đo (lượt truy cập). KPI là tập nhỏ những metric quan trọng nhất gắn với mục tiêu công ty (conversion rate).'
      }, {
        h: 'Các metric phổ biến theo ngành',
        p: ''
      }, {
        list: [['E-commerce', 'AOV (Average Order Value), CAC, LTV, Conversion Rate.'], ['SaaS', 'MRR (Monthly Recurring Revenue), Churn Rate, NRR.'], ['Marketing', 'CTR (Click-Through Rate), ROAS (Return on Ad Spend).']]
      }, {
        formula: 'LTV  =  ARPU × Gross Margin %\n──────────────────────\n      Churn Rate',
        caption: 'Lifetime Value — giá trị một khách hàng mang lại trong suốt vòng đời.'
      }, {
        calc: 'Ví dụ tính LTV',
        steps: ['ARPU = $50 / tháng,  Gross Margin = 80%', 'Churn = 5% / tháng  (0.05)', 'LTV = (50 × 0.8) / 0.05', 'LTV = $800']
      }]
    },
    'bus-frame': {
      cluster: 'BUSINESS ACUMEN',
      summary: 'Các framework giúp cấu trúc tư duy phân tích thay vì mò mẫm trong dữ liệu.',
      body: [{
        h: 'Analytical Frameworks',
        p: 'Framework là "khuôn" tư duy để không bỏ sót góc nhìn quan trọng.'
      }, {
        list: [['AARRR (Pirate Metrics)', 'Acquisition → Activation → Retention → Referral → Revenue. Cho startup/product.'], ['RFM Analysis', 'Recency, Frequency, Monetary — phân khúc khách hàng.'], ['Cohort Analysis', 'Theo dõi hành vi của nhóm khách theo thời gian.'], ['5 Whys', 'Hỏi "Tại sao?" 5 lần để tới nguyên nhân gốc rễ.']]
      }, {
        note: 'Expected Value = P(thành công) × Lợi ích − P(thất bại) × Chi phí. Dùng để xếp hạng các quyết định khi chưa chắc chắn.'
      }]
    },
    /* ─────────────── EXCEL ─────────────── */
    'ex-formulas': {
      cluster: 'SPREADSHEETS',
      summary: 'Bộ công thức cốt lõi giải quyết 80% công việc hằng ngày trên Excel.',
      body: [{
        h: 'Công thức Excel cốt lõi',
        p: ''
      }, {
        list: [['Logic', 'IF, AND, OR, IFERROR.'], ['Lookup', 'VLOOKUP, INDEX & MATCH (quan trọng!), XLOOKUP.'], ['Text', 'LEFT, RIGHT, MID, CONCATENATE, TRIM.'], ['Date', 'TODAY, DATEDIF, EOMONTH.']]
      }, {
        h: 'INDEX + MATCH > VLOOKUP',
        p: 'VLOOKUP chỉ tra từ trái sang phải và dễ vỡ khi chèn cột. INDEX + MATCH linh hoạt hơn:'
      }, {
        code: '=INDEX(Sales[Revenue],\n       MATCH("Laptop", Sales[Product], 0))',
        lang: 'excel'
      }, {
        code: '=XLOOKUP("Laptop", Sales[Product], Sales[Revenue], "Not found")',
        lang: 'excel'
      }]
    },
    'ex-pivot': {
      cluster: 'SPREADSHEETS',
      summary: 'Công cụ mạnh nhất của Excel để tổng hợp dữ liệu chỉ bằng kéo–thả.',
      body: [{
        h: 'Pivot Tables',
        p: 'Tóm tắt hàng nghìn dòng thành một bảng tổng hợp trong vài giây, không cần công thức.'
      }, {
        list: [['Values', 'Sum, Count, Average, % of Total.'], ['Rows / Columns', 'Nhóm dữ liệu theo chiều (Region, Month…).'], ['Slicers & Timelines', 'Bộ lọc tương tác cho người xem.'], ['Pivot Charts', 'Biểu đồ vẽ trực tiếp từ Pivot.']]
      }, {
        note: 'Mẹo: bật "Show Values As → % of Grand Total" để biến con số tuyệt đối thành tỷ trọng — insight thường nằm ở tỷ lệ, không phải con số thô.'
      }]
    },
    'ex-pq': {
      cluster: 'SPREADSHEETS',
      summary: 'Power Query là công cụ ETL tích hợp trong Excel — tự động hóa làm sạch dữ liệu, không cần VBA.',
      body: [{
        h: 'Power Query (Get & Transform)',
        p: 'Kết nối tới nhiều nguồn (CSV, Web, Database), làm sạch dữ liệu, và lưu lại các bước để chạy lại bất cứ lúc nào.'
      }, {
        list: [['Extract', 'Kết nối CSV, Excel, SQL, Web API.'], ['Transform', 'Unpivot, Split, Merge, Append, Replace.'], ['Applied Steps', 'Mỗi thao tác được ghi lại → tái sử dụng cho file tháng sau.']]
      }, {
        note: 'Quy tắc vàng: làm sạch dữ liệu trong Power Query, KHÔNG sửa tay trên sheet. Thao tác tay không lặp lại được tháng sau.'
      }]
    },
    'ex-pp': {
      cluster: 'SPREADSHEETS',
      summary: 'Power Pivot xóa giới hạn 1 triệu dòng và cho phép nối nhiều bảng bằng ngôn ngữ DAX.',
      body: [{
        h: 'Power Pivot & DAX',
        p: 'Một data model thực thụ ngay trong Excel: nối nhiều bảng (data modeling) và viết measure bằng DAX.'
      }, {
        code: 'Total Revenue := SUMX(\n    Sales,\n    Sales[Qty] * Sales[Price]\n)',
        lang: 'dax'
      }, {
        note: 'Đây chính là cây cầu sang Power BI — cùng engine (VertiPaq), cùng ngôn ngữ DAX. Học ở Excel, dùng lại được ở Power BI.'
      }]
    },
    /* ─────────────── STATISTICS ─────────────── */
    'stat-desc': {
      cluster: 'STATISTICS',
      summary: 'Tóm tắt và mô tả các đặc điểm cơ bản của một tập dữ liệu: xu hướng trung tâm và độ phân tán.',
      source: 'Nguồn: Practical Statistics for Data Scientists.',
      body: [{
        h: 'Xu hướng trung tâm',
        p: 'Mean rất nhạy với outliers; Median chống chịu tốt hơn. Khi dữ liệu lệch (skewed), Median phản ánh "điển hình" tốt hơn Mean.'
      }, {
        h: 'Độ phân tán — Phương sai & Độ lệch chuẩn',
        p: 'Cho biết dữ liệu trải rộng thế nào quanh giá trị trung bình.'
      }, {
        formula: 'σ²  =  Σ (xᵢ − μ)²\n      ──────────\n           N',
        caption: 'Variance σ² là trung bình bình phương khoảng cách tới mean μ. Std dev σ = √σ².'
      }, {
        calc: 'Tính std dev cho [2, 4, 4, 6]',
        steps: ['μ = (2+4+4+6) / 4 = 4', 'Σ(xᵢ − μ)² = 4 + 0 + 0 + 4 = 8', 'σ² = 8 / 4 = 2', 'σ = √2 ≈ 1.41']
      }, {
        note: 'IQR = Q3 − Q1. Một điểm là outlier nếu nằm ngoài [Q1 − 1.5·IQR, Q3 + 1.5·IQR] (boxplot rule).'
      }]
    },
    'stat-prob': {
      cluster: 'STATISTICS',
      summary: 'Xác suất định lượng khả năng xảy ra của một sự kiện — nền tảng của mọi suy luận thống kê.',
      body: [{
        h: 'Khái niệm',
        p: 'Probability P là số từ 0 đến 1. Conditional probability P(A|B) là xác suất A xảy ra khi đã biết B.'
      }, {
        h: "Bayes' Theorem",
        p: 'Cập nhật niềm tin khi có bằng chứng mới — nền tảng của nhiều thuật toán ML.'
      }, {
        formula: 'P(A│B)  =  P(B│A) · P(A)\n           ─────────────\n                P(B)',
        caption: 'Posterior ∝ Likelihood × Prior.'
      }, {
        calc: 'Test bệnh: prevalence 1%, sensitivity 99%, false-positive 5%',
        steps: ['P(bệnh) = 0.01,  P(+|bệnh) = 0.99', 'P(+) = 0.99·0.01 + 0.05·0.99 = 0.0594', 'P(bệnh|+) = (0.99 · 0.01) / 0.0594', 'P(bệnh|+) ≈ 16.7%  (thấp đến bất ngờ!)']
      }]
    },
    'stat-infer': {
      cluster: 'STATISTICS',
      summary: 'Rút ra kết luận về một quần thể (population) dựa trên một mẫu (sample).',
      source: 'Nguồn: The Art of Statistics.',
      body: [{
        h: 'Central Limit Theorem',
        p: 'Bất kể phân phối gốc thế nào, khi lấy mẫu đủ lớn (n > 30) và tính trung bình, phân phối của các trung bình mẫu sẽ xấp xỉ Phân phối Chuẩn.'
      }, {
        h: 'Confidence Interval 95%',
        p: '"Tự tin 95% rằng mean thật của quần thể nằm trong khoảng A → B."'
      }, {
        formula: 'CI  =  x̄  ±  z · σ/√n',
        caption: 'z = 1.96 cho mức tin cậy 95%. Mẫu càng lớn (n↑) thì khoảng càng hẹp.'
      }, {
        h: 'Hypothesis Testing',
        p: 'H₀ (null): không có khác biệt. H₁: có khác biệt. p-value là xác suất thấy kết quả này (hoặc cực đoan hơn) nếu H₀ đúng.'
      }, {
        note: 'p-value < 0.05 ⇒ bác bỏ H₀. Nhưng "có ý nghĩa thống kê" ≠ "quan trọng về kinh doanh" — luôn nhìn cả effect size.'
      }]
    },
    'stat-abtest': {
      cluster: 'STATISTICS',
      summary: 'Ứng dụng thực tế lớn nhất của Hypothesis Testing: so sánh hai phiên bản A vs B để ra quyết định.',
      body: [{
        h: 'A/B Testing',
        p: 'Chia traffic giữa Control (A) và Variant (B), đo một metric, rồi kiểm định xem khác biệt có thật hay chỉ do ngẫu nhiên.'
      }, {
        list: [['Chọn 1 metric', 'Ví dụ conversion rate — đừng đo 10 thứ cùng lúc.'], ['Sample size đủ lớn', 'Để đạt statistical power (thường ≥ 80%).'], ['Tránh p-hacking', 'Không dừng test sớm khi vừa thấy kết quả có lợi.']]
      }, {
        formula: 'n  ≈  16 · σ²\n      ────────\n          δ²',
        caption: 'Ước lượng nhanh sample size mỗi nhánh; δ = hiệu ứng tối thiểu muốn phát hiện.'
      }, {
        calc: 'Cần bao nhiêu user mỗi nhánh?',
        steps: ['Baseline CR = 10%,  muốn phát hiện +2% (δ = 0.02)', 'σ² ≈ p(1−p) = 0.10 · 0.90 = 0.09', 'n ≈ 16 · 0.09 / 0.02² = 1.44 / 0.0004', 'n ≈ 3,600 user / nhánh']
      }]
    },
    /* ─────────────── SQL ─────────────── */
    'sql-intro': {
      cluster: 'SQL & DATABASES',
      summary: 'CSDL quan hệ lưu dữ liệu trong các bảng (rows & columns) có quan hệ với nhau.',
      body: [{
        h: 'Hệ quản trị CSDL Quan hệ (RDBMS)',
        p: 'Dữ liệu được lưu trong các bảng liên kết. Hai khái niệm khóa là nền tảng:'
      }, {
        list: [['Primary Key', 'Định danh duy nhất cho mỗi dòng trong bảng.'], ['Foreign Key', 'Cột trỏ tới Primary Key của bảng khác → tạo quan hệ.']]
      }, {
        code: 'CREATE TABLE orders (\n  id          INT PRIMARY KEY,\n  customer_id INT REFERENCES customers(id),\n  total       DECIMAL(10,2)\n);',
        lang: 'sql'
      }, {
        note: 'OLTP (ghi/giao dịch hằng ngày) khác OLAP (đọc/phân tích). Data Analyst hầu như làm việc trên hệ OLAP.'
      }]
    },
    'sql-query': {
      cluster: 'SQL & DATABASES',
      summary: 'Bộ khung SELECT … FROM … WHERE … GROUP BY là xương sống của mọi truy vấn phân tích.',
      body: [{
        h: 'Truy vấn cơ bản',
        p: 'Thứ tự viết: SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY.'
      }, {
        code: "SELECT category,\n       SUM(sales) AS total_sales,\n       COUNT(*)   AS n_orders\nFROM orders\nWHERE status = 'paid'\nGROUP BY category\nHAVING SUM(sales) > 1000\nORDER BY total_sales DESC;",
        lang: 'sql'
      }, {
        list: [['WHERE', 'Lọc dòng TRƯỚC khi gom nhóm.'], ['HAVING', 'Lọc kết quả SAU khi đã gom nhóm.'], ['GROUP BY', 'Gom các dòng cùng giá trị để tổng hợp.']]
      }]
    },
    'sql-joins': {
      cluster: 'SQL & DATABASES',
      summary: 'Kỹ năng quan trọng bậc nhất của Data Analyst — kết nối dữ liệu từ nhiều bảng.',
      body: [{
        h: 'JOINs — kết nối các bảng',
        p: 'Ghép các dòng từ hai (hay nhiều) bảng dựa trên một cột chung. Đây là kỹ năng dùng nhiều nhất hằng ngày.'
      }, {
        list: [['INNER JOIN', 'Chỉ lấy dòng có ở CẢ hai bảng.'], ['LEFT JOIN', 'Tất cả dòng bảng trái + dữ liệu khớp ở bảng phải (NULL nếu không khớp).'], ['RIGHT JOIN', 'Ngược lại LEFT JOIN.'], ['FULL OUTER JOIN', 'Mọi dòng có mặt ở một trong hai bảng.']]
      }, {
        code: "SELECT c.name, COALESCE(SUM(o.total), 0) AS spent\nFROM customers c\nLEFT JOIN orders o\n  ON o.customer_id = c.id\nGROUP BY c.name\nORDER BY spent DESC;",
        lang: 'sql'
      }, {
        note: 'Dùng LEFT JOIN khi bạn muốn GIỮ tất cả khách hàng — kể cả người chưa mua gì (spent = 0).'
      }]
    },
    'sql-window': {
      cluster: 'SQL & DATABASES',
      summary: 'Tính toán trên một tập dòng liên quan mà KHÔNG làm "mất" các dòng đó (khác GROUP BY).',
      body: [{
        h: 'Window Functions',
        p: 'Chạy phép tính trên một "cửa sổ" các dòng liên quan tới dòng hiện tại, nhưng vẫn giữ nguyên từng dòng trong kết quả.'
      }, {
        code: "SELECT employee, department, salary,\n  RANK() OVER (\n    PARTITION BY department\n    ORDER BY salary DESC\n  ) AS dept_rank,\n  salary - AVG(salary) OVER (PARTITION BY department) AS vs_avg\nFROM employees;",
        lang: 'sql'
      }, {
        list: [['ROW_NUMBER()', 'Đánh số thứ tự duy nhất.'], ['RANK() / DENSE_RANK()', 'Xếp hạng (RANK để trống thứ hạng khi đồng hạng).'], ['LAG() / LEAD()', 'Lấy giá trị dòng trước / sau — tính tăng trưởng MoM.']]
      }]
    },
    'sql-etl': {
      cluster: 'SQL & DATABASES',
      summary: 'ETL = Extract → Transform → Load. Data Warehouse là CSDL tối ưu cho phân tích (OLAP).',
      body: [{
        h: 'ETL & Data Warehousing',
        p: 'Trích xuất dữ liệu từ nhiều nguồn, biến đổi cho sạch & nhất quán, rồi nạp vào kho dữ liệu để phân tích.'
      }, {
        list: [['Extract', 'Kéo dữ liệu từ app DB, API, file.'], ['Transform', 'Làm sạch, chuẩn hóa, gộp.'], ['Load', 'Nạp vào warehouse: BigQuery, Redshift, Snowflake.']]
      }, {
        note: 'Xu hướng hiện đại là ELT: nạp dữ liệu thô vào warehouse trước, rồi transform bằng SQL ngay trong warehouse (vd dbt).'
      }]
    },
    /* ─────────────── DATAVIZ & POWER BI ─────────────── */
    'pbi-prep': {
      cluster: 'DATAVIZ & POWER BI',
      summary: 'Dùng Power Query Editor để Extract & Transform dữ liệu trước khi đưa vào Data Model.',
      body: [{
        h: 'Chuẩn bị dữ liệu trong Power BI',
        p: 'Cùng engine Power Query như Excel, nhưng kết nối được hàng trăm nguồn dữ liệu. Mọi thao tác làm sạch nên xảy ra ở đây.'
      }, {
        list: [['Kết nối', 'SQL, CSV, SharePoint, Web, Service.'], ['Làm sạch', 'Đổi kiểu dữ liệu, bỏ cột thừa, unpivot.'], ['Refresh', 'Lên lịch tự động làm mới dữ liệu.']]
      }, {
        note: 'Quy tắc: Transform ở Power Query, KHÔNG ở biểu đồ. Model càng gọn thì DAX càng dễ và báo cáo càng nhanh.'
      }]
    },
    'pbi-model': {
      cluster: 'DATAVIZ & POWER BI',
      summary: 'Bước quan trọng nhất để Power BI chạy nhanh và DAX viết dễ: mô hình sao (Star Schema).',
      body: [{
        h: 'Data Modeling — Star Schema',
        p: 'Một Fact Table ở giữa, nhiều Dimension Tables xung quanh, nối bằng quan hệ 1-N.'
      }, {
        list: [['Fact Table', 'Sự kiện/giao dịch: Sales, Orders. Nhiều con số, nhiều dòng.'], ['Dimension Table', 'Bối cảnh để lọc/gom: Products, Customers, Calendar.'], ['Quan hệ 1-N', 'One-to-Many là loại quan hệ lý tưởng nhất.']]
      }, {
        note: 'Tránh bảng phẳng (flat table) khổng lồ. Star schema giúp filter lan truyền đúng và giảm dung lượng nhờ nén VertiPaq.'
      }]
    },
    'pbi-dax': {
      cluster: 'DATAVIZ & POWER BI',
      summary: 'DAX (Data Analysis Expressions) tạo ra các metric tính toán động theo ngữ cảnh lọc.',
      body: [{
        h: 'Measure vs Calculated Column',
        p: 'Calculated Column tính từng dòng, tốn RAM (dùng cho slicer). Measure tính "on-the-fly" khi thả vào biểu đồ — nhẹ và linh hoạt.'
      }, {
        code: 'Total Sales = SUM( Sales[Amount] )\n\nSales YoY % =\nVAR ThisYear = [Total Sales]\nVAR LastYear =\n    CALCULATE( [Total Sales],\n        SAMEPERIODLASTYEAR( Calendar[Date] ) )\nRETURN\n    DIVIDE( ThisYear - LastYear, LastYear )',
        lang: 'dax'
      }, {
        note: 'CALCULATE là hàm quan trọng nhất của DAX — nó thay đổi Filter Context, nền tảng của mọi phép tính nâng cao (YTD, % of total…).'
      }]
    },
    'pbi-viz': {
      cluster: 'DATAVIZ & POWER BI',
      summary: 'Kể chuyện với dữ liệu: chọn đúng biểu đồ, loại bỏ lộn xộn, dẫn dắt sự chú ý.',
      source: 'Nguồn: Storytelling with Data (Cole Nussbaumer Knaflic).',
      body: [{
        h: 'Chọn đúng biểu đồ',
        p: 'Loại biểu đồ phải khớp với câu hỏi:'
      }, {
        list: [['So sánh', 'Bar / Column chart.'], ['Xu hướng theo thời gian', 'Line / Area chart.'], ['Tỷ trọng', 'Stacked bar, Treemap. Pie chỉ khi < 4 phần.'], ['Phân tán / quan hệ', 'Scatter plot, Histogram.']]
      }, {
        note: 'Decluttering: làm mờ gridline, bỏ viền, bỏ shadow. Dùng MỘT màu nhấn để chỉ vào insight quan trọng nhất, phần còn lại để xám.'
      }]
    },
    /* ─────────────── PYTHON ─────────────── */
    'py-pandas': {
      cluster: 'PYTHON FOR DATA',
      summary: 'Thư viện quan trọng nhất để thao tác dữ liệu dạng bảng — "SQL cho Python".',
      body: [{
        h: 'Pandas',
        p: 'DataFrame với Python cũng như Table với SQL. Lọc, gom nhóm, nối và biến đổi dữ liệu trong vài dòng.'
      }, {
        code: "import pandas as pd\n\ndf = pd.read_csv('orders.csv')\n\ntop = (df[df['total'] > 1000]\n       .groupby('region')['total']\n       .sum()\n       .sort_values(ascending=False))\n\nprint(top.head())",
        lang: 'python'
      }, {
        list: [['Series', 'Mảng 1 chiều có nhãn.'], ['DataFrame', 'Bảng 2 chiều (như Excel/SQL table).'], ['.groupby() / .merge()', 'Tương đương GROUP BY và JOIN của SQL.']]
      }]
    },
    'py-eda': {
      cluster: 'PYTHON FOR DATA',
      summary: 'Exploratory Data Analysis — bước đầu tiên khi nhận một dataset mới.',
      body: [{
        h: 'Khám phá dữ liệu (EDA)',
        p: 'Trước khi mô hình hóa, hãy hiểu hình dạng, chất lượng và quan hệ trong dữ liệu.'
      }, {
        code: "df.info()           # kiểu dữ liệu & missing\ndf.describe()       # mean, std, min, quartiles\ndf.isna().sum()     # đếm giá trị thiếu\ndf.corr(numeric_only=True)  # ma trận tương quan",
        lang: 'python'
      }, {
        list: [['Distribution', 'Vẽ histogram để xem độ lệch (skew).'], ['Outliers', 'Boxplot + quy tắc IQR.'], ['Correlation', 'Heatmap để tìm biến liên quan.']]
      }, {
        note: 'Correlation ≠ Causation. Tương quan cao chỉ là gợi ý để điều tra tiếp, không phải bằng chứng nhân quả.'
      }]
    },
    'py-viz': {
      cluster: 'PYTHON FOR DATA',
      summary: 'Matplotlib & Seaborn để trực quan hóa nhanh trong quá trình phân tích.',
      body: [{
        h: 'Matplotlib / Seaborn',
        p: 'Matplotlib là nền tảng; Seaborn là lớp cao cấp đẹp hơn cho biểu đồ thống kê.'
      }, {
        code: "import seaborn as sns\nimport matplotlib.pyplot as plt\n\nsns.histplot(df['total'], bins=30, kde=True)\nplt.title('Distribution of Order Value')\nplt.xlabel('Total ($)')\nplt.show()",
        lang: 'python'
      }, {
        note: 'Biểu đồ trong EDA là để BẠN hiểu dữ liệu — nhanh và xấu cũng được. Biểu đồ trong báo cáo là để NGƯỜI KHÁC hiểu — lúc đó mới chăm chút.'
      }]
    },
    'py-ml': {
      cluster: 'PYTHON FOR DATA',
      summary: 'Machine Learning cơ bản với Scikit-Learn: học có giám sát vs không giám sát.',
      body: [{
        h: 'Intro to Machine Learning',
        p: 'Hai nhóm lớn của ML:'
      }, {
        list: [['Supervised', 'Có label/target. Regression (dự đoán giá), Classification (lọc spam).'], ['Unsupervised', 'Không có label. Clustering (phân cụm khách hàng — K-Means).']]
      }, {
        code: "from sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42)\n\nmodel = LinearRegression().fit(X_train, y_train)\nprint('R² =', model.score(X_test, y_test))",
        lang: 'python'
      }, {
        note: 'Luôn chia Train/Test. Đánh giá mô hình trên dữ liệu nó CHƯA thấy — nếu không bạn chỉ đang đo khả năng học thuộc lòng (overfitting).'
      }]
    }
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/encyclopedia/data.js", error: String((e && e.message) || e) }); }

// ui_kits/encyclopedia/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide-style icons used across the Encyclopedia UI kit.
   The real product uses lucide-react; these mirror the same glyphs. */
const _S = (children, extra = {}) => /*#__PURE__*/React.createElement("svg", _extends({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  width: "100%",
  height: "100%"
}, extra), children);
const Icons = {
  Map: () => _S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m9 4 6 2 5-2v14l-5 2-6-2-5 2V6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 4v14M15 6v14"
  }))),
  Route: () => _S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "19",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "5",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 19H14a3.5 3.5 0 0 0 0-7H10a3.5 3.5 0 0 1 0-7h5.5"
  }))),
  List: () => _S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"
  }))),
  Refresh: () => _S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5"
  }))),
  Book: () => _S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
  }))),
  X: () => _S(/*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })),
  Search: () => _S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  }))),
  Arrow: () => _S(/*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  })),
  Compass: () => _S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m16.2 7.8-2.9 6.5-6.5 2.9 2.9-6.5z"
  }))),
  Sheet: () => _S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 9h18M3 15h18M9 3v18M15 3v18"
  }))),
  Database: () => _S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ellipse", {
    cx: "12",
    cy: "5",
    rx: "9",
    ry: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 5v14a9 3 0 0 0 18 0V5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12a9 3 0 0 0 18 0"
  }))),
  Code: () => _S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m16 18 6-6-6-6M8 6l-6 6 6 6"
  }))),
  Chart: () => _S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 3v18h18"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "7",
    y: "11",
    width: "3",
    height: "6"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "12",
    y: "7",
    width: "3",
    height: "10"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "17",
    y: "13",
    width: "3",
    height: "4"
  }))),
  Trend: () => _S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M22 7 13.5 15.5l-5-5L2 17"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 7h6v6"
  }))),
  Flame: () => _S(/*#__PURE__*/React.createElement("path", {
    d: "M12 2c1 4 5 5 5 9a5 5 0 0 1-10 0c0-1.5.6-2.6 1.4-3.5C9 9 9.5 7 9 5c2 .5 2.5 2 3 3 .5-2 0-4 0-6z"
  })),
  Check: () => _S(/*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })),
  Lock: () => _S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "11",
    width: "16",
    height: "10",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 11V7a4 4 0 0 1 8 0v4"
  }))),
  Star: () => _S(/*#__PURE__*/React.createElement("path", {
    d: "m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.4L12 17.8 6.2 20.8l1.1-6.4L2.6 9.8l6.5-.9z"
  })),
  Play: () => _S(/*#__PURE__*/React.createElement("path", {
    d: "M6 4v16l13-8z",
    fill: "currentColor",
    stroke: "none"
  })),
  Sun: () => _S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
  }))),
  Moon: () => _S(/*#__PURE__*/React.createElement("path", {
    d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"
  }))
};
window.Icons = Icons;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/encyclopedia/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ModuleTag = __ds_scope.ModuleTag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SegmentedTabs = __ds_scope.SegmentedTabs;

})();
