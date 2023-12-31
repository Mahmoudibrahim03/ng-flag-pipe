export type wavyFlagsSize =
  | '16x12'
  | '20x15'
  | '24x18'
  | '28x21'
  | '32x24'
  | '36x27'
  | '40x30'
  | '48x36'
  | '56x42'
  | '60x45'
  | '64x48'
  | '72x54'
  | '80x60'
  | '84x63'
  | '96x72'
  | '108x81'
  | '112x84'
  | '120x90'
  | '128x96'
  | '144x108'
  | '160x120'
  | '192x144'
  | '224x168'
  | '256x192';

export type fixedWidthFlagsSize =
  | 'w20'
  | 'w40'
  | 'w80'
  | 'w160'
  | 'w320'
  | 'w640'
  | 'w1280'
  | 'w2560';

export type fixedHeightFlagsSize =
  | 'h20'
  | 'h24'
  | 'h40'
  | 'h60'
  | 'h80'
  | 'h120'
  | 'h240';

export type flagSizes<T> = T extends 'WAVY'
  ? wavyFlagsSize
  : T extends 'FIXED_HEIGHT'
  ? fixedHeightFlagsSize
  : T extends 'FIXED_WIDTH'
  ? fixedWidthFlagsSize
  : never;
